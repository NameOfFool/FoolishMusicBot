const { Client, IntentsBitField } = require("discord.js");
const dotenv = require("dotenv");
const { registerCommands } = require("./register-commands");



dotenv.config();
const token = process.env.TOKEN;



const client = new Client({
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

client.on('guildCreate',(guild)=>{
  console.log(`We was added to a new guild`)
  registerCommands(guild.id)
})

client.on('interactionCreate', (interaction) =>{
  console.log(interaction)
  if(interaction.commandName === 'hey'){
    interaction.reply("F#ck you")
  }
})

client.login(token);
