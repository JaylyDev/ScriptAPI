
/**
 * @beta
 * Holds information for expressing the net size of a volume of
 * blocks.
 */
export class BlockAreaSize {
  /**
   * X size (west to east) component of this block area.
   */
  x: number;
  /**
   * Y size (down to up) of this block area size.
   */
  y: number;
  /**
   * Z size (south to north) of this block area size.
   */
  z: number;
  /**
   * @remarks
   * Creates a new BlockAreaSize object.
   * @param x
   * @param y
   * @param z
   */
  constructor(x: number, y: number, z: number) {
    this.x = Math.floor(x);
    this.y = Math.floor(y);
    this.z = Math.floor(z);
  }
  /**
   * @remarks
   * Tests whether this block area size is equal to another
   * BlockAreaSize object.
   * @param other
   */
  equals(other: BlockAreaSize): boolean {
    if (this.x === other.x && this.y === other.y && this.z === other.z)
        return true;
    else return false;
  };
}