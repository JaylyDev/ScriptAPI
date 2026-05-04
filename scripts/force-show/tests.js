// Author: Jayly <https://github.com/JaylyDev>
// Project: https://github.com/JaylyDev/ScriptAPI
import {
  world,
  system,
  Player,
  CommandPermissionLevel,
  CustomCommandParamType,
  CustomCommandStatus,
} from "@minecraft/server";
import {
  ModalFormData,
  ActionFormData,
  MessageFormData,
} from "@minecraft/server-ui";
import { forceShow } from "./index";

system.beforeEvents.startup.subscribe((_event) => {
  _event.customCommandRegistry.registerCommand(
    {
      name: "jayly:forceshow",
      description: "Custom command for forceshow",
      permissionLevel: CommandPermissionLevel.Any,
    },
    (origin) => {
      const player = origin.sourceEntity;
      if (!(player instanceof Player)) {
        return {
          message: "This command can only be used by a player.",
          status: CustomCommandStatus.Failure,
        };
      }

      const modalForm = new ModalFormData();
      modalForm.title("Title");
      modalForm.dropdown("Dropdown", ["0", "1"]);

      forceShow(player, modalForm)
        .then((res) => {
          console.log("Success");
        })
        .catch(console.error);
    }
  );
});

world.beforeEvents.itemUse.subscribe(async (event) => {
  if (!(event.source instanceof Player)) return;
  event.cancel = true;

  const form = new ActionFormData();
  form.button("button");
  form.button("button");
  form.button("button");

  const response = await forceShow(event.source, form);

  // response should be ActionFormResponse
  world.sendMessage(String(response.selection));
});

system.run(async function () {
  for (let player of world.getAllPlayers()) {
    const form = new MessageFormData();
    form.title("title");
    form.button1("button");
    form.button2("button");

    const response = await forceShow(player, form);

    // response should be MessageFormResponse
    world.sendMessage(String(response.selection));
  }
});

// test timeout feature
system.beforeEvents.startup.subscribe((_event) => {
  _event.customCommandRegistry.registerCommand(
    {
      name: "jayly:forceshow",
      description: "Custom command for forceshow",
      mandatoryParameters: [
        { name: "message", type: CustomCommandParamType.String },
      ],
      permissionLevel: CommandPermissionLevel.Any,
    },
    (origin, message) => {
      const { sourceEntity } = origin;

      if (!(sourceEntity instanceof Player)) {
        return {
          message: "This command can only be used by a player.",
          status: CustomCommandStatus.Failure,
        };
      }

      forceShow(
        sourceEntity,
        new MessageFormData().title("Title").body(message),
        10
      )
        .then((res) => {
          console.log("Success");
        })
        .catch(console.error);
    }
  );
});
