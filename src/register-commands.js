const { REST, Routes } = require("discord.js");
require("dotenv").config();

const commands = [
  {
    name: "hey",
    description: "Replies with hey!",
  },
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);
async function registerCommands(id) {
  try {
    console.log("register commands...");
    await rest.put(
      Routes.applicationGuildCommands(
        "1184199895310143728",
        id
      ),
      {
        body: commands,
      }
    );
    console.log("register commands:done");
  } catch (error) {
    console.log(error);
  }
}
exports.registerCommands = registerCommands