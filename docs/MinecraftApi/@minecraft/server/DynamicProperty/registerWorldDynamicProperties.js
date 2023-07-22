import { DynamicPropertiesDefinition, world } from "@minecraft/server";

world.afterEvents.worldInitialize.subscribe(({propertyRegistry}) => {
  // add boolean dynamic property
  const dynamicProperty = new DynamicPropertiesDefinition();
  dynamicProperty.defineBoolean("my_boolean");

  // add number dynamic property
  dynamicProperty.defineNumber("my_number");

  // add string dynamic property
  dynamicProperty.defineString("my_string", 256);

  // register to world
  propertyRegistry.registerWorldDynamicProperties(dynamicProperty);
});

// Set dynamic property value
world.setDynamicProperty("my_boolean", true);
world.setDynamicProperty("my_number", 100);
world.setDynamicProperty("my_string", 'Hi mom');

world.getDynamicProperty("my_boolean"); // true
world.getDynamicProperty("my_number"); // 100
world.getDynamicProperty("my_string"); // 'Hi mom'
