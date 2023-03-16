# fill-blocks

## Description

Fills an area between begin and end with block of type block, with no fill limit of 32768.

### Parameters

- `dimension` Dimension to fill blocks in.
- `begin` The lower northwest starting corner of the area.
- `end` The upper southeast ending corner of the area.
- `block` Type of block to fill the volume with.
- `options` A set of additional options, such as a matching block to potentially replace this fill block with.

### returns

Number of blocks filled

### example

`fillBlocks.js`

```js
fillBlocks(
  world.getDimension("overworld"),
  { x, y, z },
  { x: x + 10000, y: y + 10, z: z + 100 },
  MinecraftBlockTypes.stone
);
```

## Credits

These scripts were written by Jayly#1397 on Jayly Discord
