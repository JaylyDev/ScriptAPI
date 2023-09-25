/**
 * All possible MinecraftCameraPresetsTypes
 */
export enum MinecraftCameraPresetsTypes {
    FirstPerson = "minecraft:first_person",
    Free = "minecraft:free",
    ThirdPerson = "minecraft:third_person",
    ThirdPersonFront = "minecraft:third_person_front"
}
/**
 * Union type equivalent of the MinecraftCameraPresetsTypes enum.
 */
export type MinecraftCameraPresetsTypesUnion = keyof typeof MinecraftCameraPresetsTypes;
