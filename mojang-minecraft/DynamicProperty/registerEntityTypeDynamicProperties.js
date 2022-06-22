import { DynamicPropertiesDefinition, MinecraftEntityTypes, world } from "mojang-minecraft";

world.events.worldInitialize.subscribe(({propertyRegistry}) => {
  // add boolean dynamic property
  const property1 = new DynamicPropertiesDefinition();
  property1.defineBoolean("my_boolean");

  // add number dynamic property
  const property2 = new DynamicPropertiesDefinition();
  property2.defineNumber("my_number");

  // add string dynamic property
  const property3 = new DynamicPropertiesDefinition();
  property3.defineString("my_string", 256);

  // register to world
  propertyRegistry.registerEntityTypeDynamicProperties(property1, MinecraftEntityTypes.cow);
  propertyRegistry.registerEntityTypeDynamicProperties(property2, MinecraftEntityTypes.cow);
  propertyRegistry.registerEntityTypeDynamicProperties(property3, MinecraftEntityTypes.cow);
});

const entities = [...world.getDimension("overworld").getEntities()];
entities.find(entity => entity.id === "minecraft:cow").getDynamicProperty("my_boolean");
entities.find(entity => entity.id === "minecraft:cow").getDynamicProperty("my_number");
entities.find(entity => entity.id === "minecraft:cow").getDynamicProperty("my_string");