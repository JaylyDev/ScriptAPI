const minX = -25;
const minZ = -35;
const maxX = 78;
const maxZ = 28;

system.runInterval(() => {
    world.getPlayers().forEach(player => {
        const x = Math.floor(player.location.x);
        const z = Math.floor(player.location.z);
        if (Math.abs(x - (minX + maxX) / 2) > Math.abs(minX - maxX) / 2 || Math.abs(z - (minZ + maxZ) / 2) > Math.abs(minZ - maxZ) / 2) {
            player.sendMessage('You are outside the border!')
        }
        else {
            player.sendMessage('You are in the border!')
        }
    })
});
