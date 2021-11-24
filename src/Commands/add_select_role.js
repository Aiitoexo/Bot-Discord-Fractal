const Command = require('../Structures/Command')
const {default: axios} = require("axios");
axios.defaults.headers.token = 'change-me';
const endpoint = 'https://fractal-team.fr';
// const endpoint = 'http://127.0.0.1:8000';

module.exports = new Command({
    name: 'add_select_role',
    description: 'Supprime une section de jeu',

    async run(message, args, client) {

        let findMessage = null

        client.channels.cache.get(message.channelId).messages.fetch({
            limit: 50
        }).then((msg) => {
            msg.filter(msg => msg.id === args[1]).forEach(m => {
                findMessage = m
            })
        })

        setTimeout(function (){

            let messageToReaction = client.channels.cache.get(message.channelId).messages.cache.get(args[1])
            let emojiReact = message.guild.emojis.cache.get(args[2])
            let roleAdd = message.guild.roles.cache.get(args[3])

            if (messageToReaction === undefined || emojiReact === undefined || roleAdd === undefined) {

                let errorMessage = messageToReaction === undefined ? `[Message introuvable: '${args[1]}']` : '';
                let errorEmoji = emojiReact === undefined ? `[Emoji introuvable: '${args[2]}']` : '';
                let errorRole = roleAdd === undefined ? `[Role introuvable: '${args[3]}']` : '';

                message.reply(`Erreur Commande : ${errorMessage} ${errorEmoji} ${errorRole}`)

            } else {

                axios.post(endpoint + '/api/add_select_role', {
                    messageId: messageToReaction.id,
                    emojiId: emojiReact.id,
                    roleId: roleAdd.id,
                    roleName: roleAdd.name
                }).then(function (response) {
                    console.log(response.data.message)
                    // message.reply(response.data.message)
                }).catch(function (error) {
                    console.log(error.response.data.message);
                });

                messageToReaction.react(emojiReact)

                setTimeout(function () {
                    message.delete()
                }, 1500)
            }
        }, 1000)
    }
})