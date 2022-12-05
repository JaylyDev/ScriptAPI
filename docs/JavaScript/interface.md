# Interface

Interfaces are capable of describing the wide range of shapes that JavaScript objects can take. It is one of TypeScript’s core principles for type checking. `interface` syntax is not supported in JavaScript.

## Required Properties

Properties that does not have a question mark at the end of their names. When using the interface the property has to be assigned with the right type.

```ts
interface LabeledValue {
  label: string;
}
```

Example:

```js
/**
 * @type {LabeledValue}
 */
const value = {
  label = 'test'
};
```

## Optional Properties

Properties that has a question mark (`?`) to the end of their names are marked as optional. Meaning the object _might_ have a property set.

```ts
interface Options {
  type?: string[];
  value: string;
}
```

Example:

```js
/**
 * @type {Options}
 */
const value = {
  value = 'required'
};
```

## Learn More

https://www.typescriptlang.org/docs/handbook/2/objects.html
