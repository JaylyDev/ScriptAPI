import { Vector3Builder, Vector3Utils } from "@minecraft/math";
import { EasingType, Player, Vector3 } from "@minecraft/server";

function getAbsoluteLocationFromViewAnchor(
  anchor: Vector3,
  location: Vector3,
  viewDirection: Vector3
) {
  const dirz = new Vector3Builder(viewDirection);
  const dirx = new Vector3Builder(dirz.z, 0, -dirz.x);
  const diry = Vector3Utils.cross(dirz, dirx);
  const xo = Vector3Utils.scale(dirx, anchor.x);
  const yo = Vector3Utils.scale(diry, anchor.y);
  const zo = Vector3Utils.scale(dirz, anchor.z);

  return new Vector3Builder(location).add(xo).add(yo).add(zo);
}

// Scripting code for the `execute as @s at @s anchored eyes run camera @s set minecraft:free ease 0.1 linear pos ^-0.75 ^ ^-1.5 rot ~ ~` command
function setCamera(player: Player) {
  const headLocation = player.getHeadLocation();
  const viewDirection = player.getViewDirection();
  const rotation = player.getRotation();
  const anchor = new Vector3Builder(-0.75, 0, -1.5);
  const location = getAbsoluteLocationFromViewAnchor(
    anchor,
    headLocation,
    viewDirection
  );
  player.camera.setCamera('minecraft:free', {
    location: location,
    rotation: rotation,
    easeOptions: {
      easeTime: 0.1,
      easeType: EasingType.Linear
    }
  });
}