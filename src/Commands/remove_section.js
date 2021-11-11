const Command = require('../Structures/Command')

module.exports = new Command({
    name: 'remove_section',
    description: 'Supprime une section de jeu',

    async run(message, args, client) {

        let category_channels = client.channels.cache.get(args[1])

        if (category_channels !== undefined) {
            category_channels.children.forEach(channel => {
                channel.delete()
            })

            setTimeout(() => {
                category_channels.delete()
                message.reply(`Section ${category_channels.name} supprimer`)
            },3000)

        } else {
            message.reply('Desole cette category n\'existe pas')
        }

    }
})