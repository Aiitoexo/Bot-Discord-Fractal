// const Command = require('../Structures/Command')
//
//
// module.exports = new Command({
//     name: 'test',
//     description: 'test',
//
//     async run(message, args, client) {
//         const botMessages = [];
//         let yolo =null
//
//         let emoji = client.emojis.cache.get('902939880651362394')
//
//         client.channels.cache.get(message.channelId).messages.fetch({
//             limit: 50 // Change `100` to however many messages you want to fetch
//         }).then((msg) => {
//             msg.filter(msg => msg.id === args[1]).forEach(m => {
//                 yolo = m
//             })
//         })
//
//         setTimeout(function () {
//             yolo.react(emoji)
//         },1000)
//     }
// })