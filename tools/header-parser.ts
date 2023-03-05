// Uses @definitelytyped/header-parser
import pm from "parsimmon";

/*

  # Example header format #

  // Script example for ScriptAPI
  // Author: My Self <https://github.com/me>, Some Other Guy <https://github.com/otherguy>
  // Project: https://github.com/JaylyDev/ScriptAPI

*/

export interface Header {
  readonly nonNpm: boolean;
  readonly contributors: readonly Author[];
}

export interface Author {
  readonly name: string;
  readonly url: string;
  readonly githubUsername: string | undefined;
}

export interface ParseError {
  readonly index: number;
  readonly line: number;
  readonly column: number;
  readonly expected: readonly string[];
}

export function parseHeaderOrFail(mainFileContent: string): Header {
  const header = parseHeader(mainFileContent);
  if (isParseError(header)) {
    throw new Error(renderParseError(header));
  }
  return header;
}

export function validate(mainFileContent: string): ParseError | undefined {
  const h = parseHeader(mainFileContent);
  return isParseError(h) ? h : undefined;
}

export function renderExpected(expected: readonly string[]): string {
  return expected.length === 1 ? expected[0] : `one of\n\t${expected.join("\n\t")}`;
}

export function renderParseError({ line, column, expected }: ParseError): string {
  return `At ${line}:${column} : Expected ${renderExpected(expected)}`;
}

function isParseError(x: {}): x is ParseError {
  // tslint:disable-next-line strict-type-predicates
  return (x as ParseError).expected !== undefined;
}

/** @param strict If true, we allow fewer things to be parsed. Turned on by linting. */
function parseHeader(text: string): Header | ParseError {
  const res = headerParser().parse(text);
  return res.status
    ? res.value
    : { index: res.index.offset, line: res.index.line, column: res.index.column, expected: res.expected };
}

function headerParser(): pm.Parser<Header> {
  return pm.seqMap(
    pm.regex(/\/\/ Script example for ScriptAPI/),
    pm.regexp(/\r?\n\/\/ Author: /),
    contributorsParser(),
    projectParser,
    pm.all, // Don't care about the rest of the file
    // tslint:disable-next-line:variable-name
    (str, _defsBy, contributors, _project, typeScriptVersion) => ({
      nonNpm: str.endsWith("non-npm package "),
      contributors,
      typeScriptVersion,
    })
  );
}


/*
Allow any of the following:

Use `\s\s+` to ensure at least 2 spaces, to  disambiguate from the next line being `// Author:`.
*/
const separator: pm.Parser<string> = pm.regexp(/(, )|(,?\r?\n\/\/\s\s+)/);

function contributorsParser(): pm.Parser<readonly Author[]> {
  const contributor: pm.Parser<Author> = // In non-strict mode, allows arbitrary URL, and trailing whitespace.
  pm.seqMap(pm.regexp(/([^<]+) /, 1), pm.regexp(/<([^>]+)> */, 1), (name, url) => {
    const rgx = /^https\:\/\/github.com\/([a-zA-Z\d\-]+)\/?$/;
    const match = rgx.exec(url);
    const githubUsername = match === null ? undefined : match[1];
    // tslint:disable-next-line no-null-keyword
    return { name, url: githubUsername ? `https://github.com/${githubUsername}` : url, githubUsername };
  });
  return pm.sepBy1(contributor, separator);
}

const projectParser = pm.regexp(/\r?\n\/\/ Project: https:\/\/[^\r\n]+/);

declare module "parsimmon" {
  // tslint:disable-next-line no-unnecessary-qualifier
  type Pr<T> = pm.Parser<T>; // https://github.com/Microsoft/TypeScript/issues/14121
  export function seqMap<T, U, V, W, X, Y, Z, A, B, C>(
    p1: Pr<T>,
    p2: Pr<U>,
    p3: Pr<V>,
    p4: Pr<W>,
    p5: Pr<X>,
    p6: Pr<Y>,
    p7: Pr<Z>,
    p8: Pr<A>,
    p9: Pr<B>,
    cb: (a1: T, a2: U, a3: V, a4: W, a5: X, a6: Y, a7: Z, a8: A, a9: B) => C
  ): Pr<C>;
}

