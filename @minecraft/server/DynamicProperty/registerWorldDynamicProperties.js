import { DynamicPropertiesDefinition, world } from "mojang-minecraft";

world.events.worldInitialize.subscribe(({propertyRegistry}) => {
  // add boolean dynamic property
  const WorldProperty1 = new DynamicPropertiesDefinition();
  WorldProperty1.defineBoolean("my_boolean");

  // add number dynamic property
  const WorldProperty2 = new DynamicPropertiesDefinition();
  WorldProperty2.defineNumber("my_number");

  // add string dynamic property
  const WorldProperty3 = new DynamicPropertiesDefinition();
  WorldProperty3.defineString("my_string", 256);

  // register to world
  propertyRegistry.registerWorldDynamicProperties(WorldProperty1);
  propertyRegistry.registerWorldDynamicProperties(WorldProperty2);
  propertyRegistry.registerWorldDynamicProperties(WorldProperty3);
});

world.getDynamicProperty("my_boolean");
world.getDynamicProperty("my_number");
world.getDynamicProperty("my_string");