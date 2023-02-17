// Script examples for ScriptAPI
// Author: FrankyRayMS#7172 <Bedrock Add-Ons>

// @ts-check
import {
  http,
  HttpClient,
  HttpHeader,
  HttpRequest,
  HttpRequestMethod,
  HttpResponse,
} from "mojang-net";
import { secrets } from "@minecraft/server-server-admin";

/**
 * Console log to discord by using link webhook
 * @param {string} message Message for Discord embed
 * @param {string} title Title for Discord embed
 * @param {boolean} print Print the success discord embed to minecraft
 */
export default function DiscordLog(
  message,
  title = "Discord Console Log",
  print = false
) {
  // Create "config/<pack_id>/secrets.json"
  // And set value inside "discord_webhook" keys with discord webhook
  const discordWebhookLink = // secrets.get("discord_webhook")
    "https://discord.com/api/webhooks/1006552244486934600/gE5gXDRtPDoAv8aXmqS4GaGw7kFsEDAf8AyvR1FHNbfl0ZQw4ErKE4tyalgybOQzXjYx";

  const discordWebhook = new HttpRequest(discordWebhookLink);
  discordWebhook.method = HttpRequestMethod.POST;
  discordWebhook.body = JSON.stringify({
    embeds: [
      {
        title: title,
        description: message,
        footer: {
          text: `Logged at ${new Date().toUTCString()}`,
        },
      },
    ],
  });

  http.request(discordWebhook).then();
}