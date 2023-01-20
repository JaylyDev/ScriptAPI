// Script examples for ScriptAPI
// Author: defowler2005#4812 <Jayly Discord>

const Tpa_Main = new ActionFormData();
Tpa_Main.title('§dTpa options')
Tpa_Main.body('§bSelect an option')
Tpa_Main.button('§dSend a tpa request')
Tpa_Main.button('§2Accept a TPA request')
Tpa_Main.show(Player).then(Result => {
    if (Result.selection === 0) {
        const Tpa_Request = new ModalFormData();
        let playerList = ['§cSelect a target'];
        const Players = world.getAllPlayers().filter(({
            name
        })=>name !== Player.name).filter(Player => !Player.hasTag('Ban'));
        playerList = playerList.concat(Players);
        Tpa_Request.title('§dTpa request');
        Tpa_Request.dropdown('§aSelect a player:', playerList.map(n=>n.name??n));
        Tpa_Request.show(Player).then(result => {
            const [Target] = result.formValues;
            if (Score_Test(Player, 'Tpa_Request') >= 0) {
                Player.runCommandAsync(`scoreboard players random ${Player.name} Tpa_Request 1 999999`);
                Player.runCommandAsync(`scoreboard players operation ${playerList[Target].name} Tpa_Request = ${Player.name} Tpa_Request`);
                playerList[Target].tell(`§¶§cUAF ► §d${Player.name} §bhas sent you a TPA Request`);
                Player.tell(`§¶§cUAF ► §bYou send a TPA request to §f${playerList[Target].name}`);
            }
        })
    }
    if (Result.selection === 1) {
        const Tpa_Accept = new MessageFormData();
        Tpa_Accept.title('§gTpa')
        Tpa_Accept.body('§2Are you sure you want to accept this TPA request?')
        Tpa_Accept.button1('§aYes!')
        Tpa_Accept.button2('§4No!')
        Tpa_Accept.show(Player).then(Result => {
            if (Result.selection === 1) {
                Player.runCommandAsync(`execute as @p[name=!${Player.name},scores={Tpa_Request=${Score_Test(Player, 'Tpa_Request')}}] run tp @s ${Player.name}`)
                Player.runCommandAsync(`execute as @a[scores={Tpa_Request=${Score_Test(Player, 'Tpa_Request')}}] run scoreboard players remove @s Tpa_Request ${Score_Test(Player, 'Tpa_Request')}`)
                Player.runCommandAsync(`scoreboard players remove ${Player.name} ${Score_Test(Player, 'Tpa_Request')}`)
                Player.runCommandAsync(`execute as @p[name=!${Player.name},scores={Tpa_Request=${Score_Test(Player, 'Tpa_Request')}}] run tellraw @s {"rawtext":[{"text":"§cUAF ► §f${Player.name}§b accepted your TPA request!"}]}`)
                if (Score_Test(Player, 'Tpa_Request') === 0) Player.tell('§cUAF ► §bThere are no request to accept')
            }
            if (Result.selection === 0) {
                Player.runCommandAsync(`execute as @a[scores={Tpa_Request=${Score_Test(Player, 'Tpa_Request')}}] run scoreboard players remove @s Tpa_Request ${Score_Test(Player, 'Tpa_Request')}`)
                Player.runCommandAsync(`scoreboard players remove ${Player.name} ${Score_Test(Player, 'Tpa_Request')}`)
                if (Score_Test(Player, 'Tpa_Request') === 0) Player.tell('§cUAF ► §bThere are no request to decline')
            }
        })
    }
})