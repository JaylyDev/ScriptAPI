/**
 * @beta
 * Contains the integer X, Y, Z coordinates for a block. For
 * decimal locations useful for entities, items, and more, see
 * {@link Location}.
 */
export class BlockLocation {
  /**
   * The X coordinate.
   */
  x: number;
  /**
   * The integer-based Y position.
   */
  y: number;
  /**
   * The integer-based Z position.
   */
  z: number;
  /**
   * @remarks
   * Creates a new instance of an abstract block location.
   * @param x
   * X position of the block location. This number should be an
   * integer.
   * @param y
   * Y position of the block location. This number should be an
   * integer.
   * @param z
   * Z position of the block location. This number should be an
   * integer.
   */
  constructor(x: number, y: number, z: number) {
    this.x = Math.floor(x);
    this.y = Math.floor(y);
    this.z = Math.floor(z);
  }
  /**
   * @remarks
   * Returns a BlockLocation for a block above this BlockLocation
   * (that is, y + 1).
   */
  above(): BlockLocation {
    return new BlockLocation(this.x, this.y + 1, this.z);
  };
  /**
   * @remarks
   * Returns an array of block locations representing all blocks
   * in the volume (cuboid) between this location and another
   * location.
   * @param other
   * Additional BlockLocation used to determine the set of
   * locations in between this location and another point.
   * @returns
   * Array of block locations representing the volume between
   * this location and another, inclusive of the start and end
   * points.
   */
  blocksBetween(other: BlockLocation): BlockLocation[] {
    const distanceX = other.x - this.x;
    const distanceY = other.y - this.y;
    const distanceZ = other.z - this.z;
    const blockLocations: BlockLocation[] = [];

    for (let x = 0; x <= distanceX; x++) {
      const coordX = x + this.x;
      
      for (let y = 0; y <= distanceY; y++) {
        const coordY = y + this.y;
        
        for (let z = 0; z <= distanceZ; z++) {
          const coordZ = z + this.z;

          blockLocations.push(new BlockLocation(coordX, coordY, coordZ))
        }
      }
    };

    return blockLocations;
  };
  /**
   * @remarks
   * Compares this BlockLocation and another BlockLocation to one
   * another.
   * @param other
   * Other block location to compare this BlockLocation to.
   * @returns
   * True if the two block locations are equal.
   */
  equals(other: BlockLocation): boolean {
    if (this.x === other.x && this.y === other.y && this.z === other.z)
        return true;
    else return false;
  };
  /**
   * @remarks
   * Returns a block location using a position relative to this
   * block location
   * @param x
   * X offset relative to this BlockLocation.
   * @param y
   * Y offset relative to this BlockLocation.
   * @param z
   * Z offset relative to this BlockLocation.
   * @returns
   * BlockLocation that is positioned relative to this
   * BlockLocation.
   */
  offset(x: number, y: number, z: number): BlockLocation {
    return new BlockLocation(x + this.x, y + this.y, z + this.z);
  };
}