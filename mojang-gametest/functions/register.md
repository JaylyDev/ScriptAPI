# register

Description: https://docs.microsoft.com/en-us/minecraft/creator/scriptapi/mojang-gametest/mojang-gametest#register

Usage:
```ts
register(
  testClassName: string,
  testName: string,
  testFunction: (arg: Test) => void
): RegistrationBuilder
```

Example:
```js
GameTest.register("ExampleTests", "alwaysFail", (test) => {
  test.fail("This test, runnable via '/gametest run ExampleTests:alwaysFail', will always fail");
});
```
> Credit: [@types/mojang-gametest/index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mojang-gametest/index.d.ts)