const {ignore} = require("nodemon/lib/rules");
require('dotenv').config()

const Client = require('./src/Structures/Client')
const Command = require('./src/Structures/Command')
const config = require("./src/Data/config.json")
const client = new Client()
const fs = require('fs')

fs.readdirSync('./src/Commands')
    .filter(file => file.endsWith('.js'))
    .forEach(file => {

        /**
         * @type {Command}
         */
        const command = require(`./src/Commands/${file}`)
        client.commands.set(command.name, command)
    })

client.on("guildMemberAdd", async member => {

})

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(config.prefix)) return

    const args = message.content.substring(config.prefix.length).split(/ +/);
    const command = client.commands.find(cmd => cmd.name === args[0])

    if (!command) return message.reply("Ce n'est pas une commande valide");

    command.run(message, args, client)

    console.log(`onMessageCreate - ${message.content}`);
})

client.login(process.env.DISCORD_TOKEN)

console.log('Bot FRACTAL started');

console.log('Waiting for commands...');
