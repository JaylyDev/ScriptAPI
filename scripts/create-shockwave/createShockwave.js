function magnitude(vector) {
    return Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
}

function calculateDistance(posA, posB) {
    let direction = {
        x: posA.x - posB.x,
        y: posA.y - posB.y,
        z: posA.z - posB.z
    };
    return magnitude(direction);
}

function calculateKnockbackVector(entityPosition, pusherPosition, forceMagnitude) {
    let direction = {
        x: entityPosition.x - pusherPosition.x,
        y: entityPosition.y - pusherPosition.y,
        z: entityPosition.z - pusherPosition.z
    };
  
    let distance = magnitude(direction);
  
    // Normalize the direction vector so it has a magnitude of 1
    direction = {
        x: direction.x / distance,
        y: direction.y / distance,
        z: direction.z / distance
    };
  
    // Scale the direction vector by the force magnitude to get the final knockback vector
    let knockback = {
        x: direction.x * forceMagnitude,
        y: direction.y * forceMagnitude,
        z: direction.z * forceMagnitude
    };
  
    return knockback;
}

function createShockwave(player, spawnPos, strength, range, damageFactor = 1) {
    // Create the needed variables for kb and pos
    const dimension = player.dimension;
    const entities = [...dimension.getEntities({ location: spawnPos, maxDistance: range, excludeNames: [player.name], excludeFamilies: ["inanimate"], excludeTypes: ["item"], excludeTags: ["anti_shockwave"] })];
    const items = [...dimension.getEntities({ location: spawnPos, maxDistance: range, type: "item" })];

    // Loop through all nearby entities (not items though)
    entities.forEach(entity => {
        // Calculate damage
        const kbIntensity = strength / (1 + Math.exp(-5 * (Math.ceil(calculateDistance(entity.location, spawnPos)) - 0.5)));
        const kbVector = calculateKnockbackVector(entity.location, spawnPos, kbIntensity/2);

        // Apply damage and knockback
        entity.applyDamage(damageFactor * Math.min(kbIntensity/2, 4));
        try {
            entity.applyKnockback(kbVector.x, kbVector.z, kbIntensity/4, kbIntensity/20);
        } catch (error) {
            entity.applyImpulse(calculateKnockbackVector(entity.location, spawnPos, 2));
        }
    });
    items.forEach(item => { item.applyImpulse(calculateKnockbackVector(item.location, spawnPos, 3)); });
}