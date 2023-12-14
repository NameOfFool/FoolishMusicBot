const { Client, IntentsBitField } = require("discord.js");
const ConfigFetcher = require("../utils/GetConfig")

class FoolishMusicBot extends Client {
  /**
   * Creating music bot client
   * @param {import("discord.js").ClientOptions} props - CLient options
   */
  constructor(
    props = {
      intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
      ],
    }
  ) {
    super(props)

    Config
  }
}
module.exports = FoolishMusicBot