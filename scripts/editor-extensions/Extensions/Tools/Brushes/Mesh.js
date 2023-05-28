// src/set.ts
var BlockSet = class {
  constructor() {
    this.positions = /* @__PURE__ */ new Map();
  }
  add(pos) {
    this.positions.set(this.getKey(pos), true);
    this.updateBounds(pos);
  }
  remove(pos) {
    this.positions.delete(this.getKey(pos));
    this.updateBounds();
  }
  has(pos) {
    return this.positions.has(this.getKey(pos));
  }
  getKey(pos) {
    return `${pos.x}:${pos.y}:${pos.z}`;
  }
  updateBounds(pos) {
    if (!pos) {
      this.min = void 0;
      this.max = void 0;
      return;
    }
    if (!this.min || !this.max) {
      this.min = { x: pos.x, y: pos.y, z: pos.z };
      this.max = { x: pos.x, y: pos.y, z: pos.z };
      return;
    }
    this.min = {
      x: Math.min(this.min.x, pos.x),
      y: Math.min(this.min.y, pos.y),
      z: Math.min(this.min.z, pos.z)
    };
    this.max = {
      x: Math.max(this.max.x, pos.x),
      y: Math.max(this.max.y, pos.y),
      z: Math.max(this.max.z, pos.z)
    };
  }
};

var Mesh = class extends BlockSet {
  /**
   * Calculates the smallest amount of BlockVolume objects needed to create a preview for the mesh.
   * @returns List of volumes to be used for a selection.
   */
  calculateVolumes() {
    const volumes = [];
    const visited = new BlockSet();
    if (!this.min || !this.max) {
      return volumes;
    }
    for (let x = this.min.x; x <= this.max.x; x++) {
      for (let z = this.min.z; z <= this.max.z; z++) {
        for (let y = this.min.y; y <= this.max.y; y++) {
          if (!this.has({ x, y, z }) || visited.has({ x, y, z })) {
            continue;
          }
          let extendX = 0;
          let extendY = 0;
          let extendZ = 0;
          for (let posX = x + 1; posX <= this.max.x; posX++) {
            const pos = { x: posX, y, z };
            if (!this.has(pos) || visited.has(pos)) {
              break;
            }
            extendX++;
          }
          zloop:
            for (let posZ = z + 1; posZ <= this.max.z; posZ++) {
              for (let posX = x; posX <= x + extendX; posX++) {
                const pos = { x: posX, y, z: posZ };
                if (!this.has(pos) || visited.has(pos)) {
                  break zloop;
                }
              }
              extendZ++;
            }
          yloop:
            for (let posY = y + 1; posY <= this.max.y; posY++) {
              for (let posX = x; posX <= x + extendX; posX++) {
                for (let posZ = z; posZ <= z + extendZ; posZ++) {
                  const pos = { x: posX, y: posY, z: posZ };
                  if (!this.has(pos) || visited.has(pos)) {
                    break yloop;
                  }
                }
              }
              extendY++;
            }
          for (let posX = x; posX <= x + extendX; posX++) {
            for (let posY = y; posY <= y + extendY; posY++) {
              for (let posZ = z; posZ <= z + extendZ; posZ++) {
                visited.add({ x: posX, y: posY, z: posZ });
              }
            }
          }
          volumes.push(
            {
              from: { x, y, z },
              to: { x: x + extendX, y: y + extendY, z: z + extendZ }
            }
          );
        }
      }
    }
    return volumes;
  }
};
export {
  Mesh
};
