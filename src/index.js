const { IntentsBitField, Collection } = require("discord.js");
const FoolishMusicBot = require("../lib/FoolishMusicBot");

const client = new FoolishMusicBot({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) =>{
  console.log(`${c.user.tag} is online.`)
})
client.commands = new Collection()
const comms = require("./commands")
Object.keys(comms).map(key =>{
  client.commands.set(comms[key].name, comms[key])
})

client.login(token);
