# __date_clock()

A method that is supposed to return the number of microseconds elapsed since January 1, 1970 00:00:00 UTC

## Syntax
```js
__date_clock()
```

## Issue in Minecraft

Minecraft is not able to retrieve microseconds because the function is OS dependent, and the developers have disable the 'os' module in QuickJS for security issue.

## Learn More

https://github.com/bellard/quickjs/blob/master/quickjs.c