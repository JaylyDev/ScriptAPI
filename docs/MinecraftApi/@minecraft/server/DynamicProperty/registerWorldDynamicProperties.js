import { world } from '@minecraft/server';

// Set dynamic property value
world.setDynamicProperty('my_boolean', true);
world.setDynamicProperty('my_number', 100);
world.setDynamicProperty('my_string', 'Hi mom');

world.getDynamicProperty('my_boolean'); // true
world.getDynamicProperty('my_number'); // 100
world.getDynamicProperty('my_string'); // 'Hi mom'
