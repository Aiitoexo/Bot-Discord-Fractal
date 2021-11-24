const {ignore} = require("nodemon/lib/rules");
require('dotenv').config()

const axios = require("axios").default

axios.defaults.headers.token = 'change-me';
const endpoint = 'https://fractal-team.fr';
// const endpoint = 'http://127.0.0.1:8000';

const Client = require('./src/Structures/Client')
const Command = require('./src/Structures/Command')
const config = require("./src/Data/config.json")

const client = new Client()
const Canvas = require('canvas');
const { registerFont } = require('canvas')
registerFont('./Osiris.otf', {family: 'Osiris'})

const fs = require('fs')

const {MessageEmbed, Permissions, MessageAttachment} = require("discord.js");

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

    let channelWelcome = client.channels.cache.get('904751162828423178')

    const canvas = Canvas.createCanvas(1024, 500);
    const context = canvas.getContext('2d');

    const background = await Canvas.loadImage('https://i.imgur.com/5CeSRCn.png');
    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));

    context.drawImage(avatar, 385, 52, 254, 254);

    context.drawImage(background, 0, 0, canvas.width, canvas.height);

    context.font = '60px sans-serif';

    context.fillStyle = '#b3e0e1';

    context.font = '45px "Osiris"'

    context.fillText(member.displayName, canvas.width / 2.5, 480);

    const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');

    channelWelcome.send({ files: [attachment] });
})

client.on("guildMemberRemove", async member => {
    console.log(member)

    let channel = client.channels.cache.get('909596919574171729')
    let memberName = member.user.username
    let memberId = member.id

    const exampleEmbed = new MessageEmbed()
        .setColor('#f276ff')
        .setTitle(`${memberName} a quitter le discord ! ID: ${memberId}`)
        .setImage(member.displayAvatarURL())

    channel.send({embeds: [exampleEmbed]});
})

client.on("messageCreate", (message) => {
    if (!message.content.startsWith(config.prefix)) return

    const args = message.content.substring(config.prefix.length).split(/ +/);
    const command = client.commands.find(cmd => cmd.name === args[0])

    if (!command) return message.reply("Ce n'est pas une commande valide");

    command.run(message, args, client)

    console.log(`onMessageCreate - ${message.content}`);
})

client.on("messageReactionAdd", async (reaction, user) => {

        let idMessage = reaction.message.id

        axios.post(endpoint + '/api/fetch_role', {
            messageId: idMessage
        }).then(function (response) {

            if (response.data.success === true) {
                const role = reaction.message.guild.roles.cache.find(r => r.id === response.data.role)

                if (user.id !== '905134530736832533') {
                    reaction.message.guild.members.cache.get(user.id).roles.add(role)
                }
                // if (user.id !== '905134530736832533') {
                //     user.send(`Tu es desormais ${ role.name }, est tu as accer a la categorie pour pouvoir postuler ! Bon jeux !`)
                // }
            }

        }).catch(function (error) {
            console.log(error.response.data.message);
        });
})

client.on("messageReactionRemove", async (reaction, user) => {
    let idMessage = reaction.message.id

    axios.post(endpoint + '/api/fetch_role', {
        messageId: idMessage
    }).then(function (response) {

        const role = reaction.message.guild.roles.cache.find(r => r.id === response.data.role)

        if (user.id !== '905134530736832533') {
            reaction.message.guild.members.cache.get(user.id).roles.remove(role)
        }
        // if (user.id !== '905134530736832533') {
        //     user.send(`Tu es desormais ${ role.name }, est tu as accer a la categorie pour pouvoir postuler ! Bon jeux !`)
        // }

    }).catch(function (error) {
        console.log(error.response.data.message);
    });
})

client.on("voiceStateUpdate", async (oldState, newState) => {

    let all_voice_channel = []

    axios.post(endpoint + '/api/all_voice_channel',)
        .then(function (response) {

            response.data.message.forEach(c => {
                all_voice_channel.push(c.category_voice_channel)
            })

        }).catch(function (error) {
        // console.log(error.response.data.message);
    });

    let voiceChannelGeneral = '909718765053296640'
    let user = client.users.cache.get(newState.id)
    let member = newState.guild.members.cache.get(user.id)
    const everyone_role = newState.guild.roles.cache.find(r => r.name === '@everyone')

    setTimeout(async function (){
         try {
            if (all_voice_channel.includes(newState.channel.id) || newState.channel.id === voiceChannelGeneral) {
                console.log('yala')
                const newChannel = await newState.guild.channels.create(`${member.user.username} channel`, {
                    type: 'GUILD_VOICE',
                    parent: newState.channel.parent,
                    permissionOverwrites: [
                        {
                            id: member.id,
                            allow: [Permissions.FLAGS.MANAGE_CHANNELS]
                        },
                        {
                            id: everyone_role.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.CONNECT, Permissions.FLAGS.SPEAK, Permissions.FLAGS.REQUEST_TO_SPEAK]
                        },
                    ]
                })

                await member.voice.setChannel(newChannel)

                axios.post(endpoint + '/api/voice_channel', {
                    idVoiceChannel: newChannel.id,
                    idAuthor: member.id,
                    idCategory: newState.channel.id
                }).then(function (response) {
                    console.log(response.data)
                }).catch(function (error) {
                    console.log(error.response.data.message);
                });
            }

            axios.post(endpoint + '/api/voice_channel_exist', {
                idVoiceChannel: oldState.channel.id,
            }).then(function (response) {
                if (response.data.message === true) {

                    let getChannel = client.channels.cache.get(oldState.channel.id)

                    if (getChannel.members.size === 0) {
                        getChannel.delete()
                        axios.post(endpoint + '/api/voice_channel_remove', {
                            idVoiceChannel: oldState.channel.id,
                        }).then(function (response) {
                            console.log(response.data)
                        }).catch(function (error) {
                            console.log(error.response.data.message);
                        });
                    }
                }
            }).catch(function (error) {
                // console.log(error.response.data.message);
            });
        } catch (e) {
            console.log(e)
        }
    },1000)

})

client.login(process.env.DISCORD_TOKEN)

console.log('Bot FRACTAL started');

console.log('Waiting for commands...');
