import { DynamicPropertiesDefinition, MinecraftEntityTypes, world } from "@minecraft/server";

world.afterEvents.worldInitialize.subscribe(({propertyRegistry}) => {
  // add boolean dynamic property
  const property = new DynamicPropertiesDefinition();
  property.defineBoolean("my_boolean");

  // add number dynamic property
  property.defineNumber("my_number");

  // add string dynamic property
  property.defineString("my_string", 256);

  // register to world
  propertyRegistry.registerEntityTypeDynamicProperties(property, MinecraftEntityTypes.cow);
});

const entities = [...world.getDimension("overworld").getEntities()];
entities.find(entity => entity.id === "minecraft:cow").setDynamicProperty("my_boolean", false);
entities.find(entity => entity.id === "minecraft:cow").setDynamicProperty("my_number", 10);
entities.find(entity => entity.id === "minecraft:cow").setDynamicProperty("my_string", 'cow');

entities.find(entity => entity.id === "minecraft:cow").getDynamicProperty("my_boolean"); // false
entities.find(entity => entity.id === "minecraft:cow").getDynamicProperty("my_number"); // 10
entities.find(entity => entity.id === "minecraft:cow").getDynamicProperty("my_string"); // cow
