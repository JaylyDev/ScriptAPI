# Script Eval

A capability registry to enable the use of eval() and Function() from string.

Enable it in `manifest.json` if neccessary.

manifest.json
```json
"capabilities": [ "script_eval" ]
```

## Errors

Following errors are thrown if script_eval is not enabled:

- Function from string is not supported

Example:
```js
new Function('console.log("Hello World")');
```

- 'eval is not supported' or ''eval' is not defined'

Example:
```js
eval('console.log("Hello World")');
```