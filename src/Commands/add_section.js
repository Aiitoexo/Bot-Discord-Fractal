const Command = require('../Structures/Command')
const {Permissions} = require('discord.js');
const {default: axios} = require("axios");
axios.defaults.headers.token = 'change-me';
const endpoint = 'https://fractal-team.fr';
// const endpoint = 'http://127.0.0.1:8000';

module.exports = new Command({
    name: 'add_section',
    description: 'Ajouter une section de jeu',

    run: async function (message, args, client) {

        let temp = args.slice(1)
        const category_name = temp.join(' ')
        let category_parent = ''
        let all_roles_id = []

        const roles = [
            {
                name: 'Officier',
                color: '#c2b8f8',
                permissions:
                    [
                        Permissions.FLAGS.MANAGE_ROLES,
                        Permissions.FLAGS.CHANGE_NICKNAME,
                        Permissions.FLAGS.MANAGE_NICKNAMES,
                        Permissions.FLAGS.SEND_MESSAGES,
                        Permissions.FLAGS.EMBED_LINKS,
                        Permissions.FLAGS.ADD_REACTIONS,
                        Permissions.FLAGS.MOVE_MEMBERS,
                        Permissions.FLAGS.MENTION_EVERYONE,
                        Permissions.FLAGS.MANAGE_MESSAGES,
                        Permissions.FLAGS.READ_MESSAGE_HISTORY,
                        Permissions.FLAGS.MUTE_MEMBERS,
                        Permissions.FLAGS.ATTACH_FILES,
                    ],
            },
            {
                name: 'Membre',
                color: '#cbbaeb',
                permissions:
                    [
                        Permissions.FLAGS.CHANGE_NICKNAME,
                        Permissions.FLAGS.SEND_MESSAGES,
                        Permissions.FLAGS.EMBED_LINKS,
                        Permissions.FLAGS.ADD_REACTIONS,
                        Permissions.FLAGS.READ_MESSAGE_HISTORY,
                        Permissions.FLAGS.ATTACH_FILES,
                    ]
            },
            {
                name: 'Recrue',
                color: '#f8d2f4',
                permissions:
                    [
                        Permissions.FLAGS.CHANGE_NICKNAME,
                        Permissions.FLAGS.SEND_MESSAGES,
                        Permissions.FLAGS.EMBED_LINKS,
                        Permissions.FLAGS.ADD_REACTIONS,
                        Permissions.FLAGS.READ_MESSAGE_HISTORY,
                        Permissions.FLAGS.ATTACH_FILES,
                    ]
            },
            {
                name: 'Postulant',
                color: '#fadef7',
                permissions:
                    [
                        Permissions.FLAGS.CHANGE_NICKNAME,
                        Permissions.FLAGS.SEND_MESSAGES,
                        Permissions.FLAGS.READ_MESSAGE_HISTORY,

                    ],
            }
        ]

        const guest_role = '904753330478256138'

        const everyone_role = message.guild.roles.cache.find(r => r.name === '@everyone')

        roles.forEach(r => {
            message.guild.roles.create({
                name: `${r.name} ${category_name}`,
                color: r.color,
                permissions: r.permissions,
            }).then(role => {
                all_roles_id.push(role.id)
                role.setHoist(true)
            })
        })

        setTimeout(() => {

            message.guild.channels.create(
                `.????????????????????????????? ${category_name} ???????`, {
                    type: "GUILD_CATEGORY",
                    permissionOverwrites: [
                        {
                            id: all_roles_id[0],
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                })
                .then(category => {
                    category_parent = client.channels.cache.get(category.id)
                })

            message.guild.channels.create('???????staff', {
                type: 'GUILD_TEXT',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: all_roles_id[0],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: all_roles_id[1],
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: all_roles_id[2],
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: all_roles_id[3],
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    }
                ])
            })

            message.guild.channels.create('???????????nfos-jeu', {
                type: 'GUILD_TEXT',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[3],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    }
                ])
            })

            message.guild.channels.create('???????????nfos-????uilde', {
                type: 'GUILD_TEXT',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[3],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    }
                ])
            })

            message.guild.channels.create('???????????oster', {
                type: 'GUILD_TEXT',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        deny: [Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[3],
                        deny: [Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.VIEW_CHANNEL],
                    },
                ])
            })

            message.guild.channels.create('???????????aid-planner', {
                type: 'GUILD_TEXT',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        deny: [Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.READ_MESSAGE_HISTORY,
                            Permissions.FLAGS.SEND_MESSAGES,
                            Permissions.FLAGS.MANAGE_MESSAGES,
                            Permissions.FLAGS.ADD_REACTIONS,
                        ],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[3],
                        deny: [Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.VIEW_CHANNEL],
                    },
                ])
            })

            message.guild.channels.create('???????????????-?????????-???????????????', {
                type: 'GUILD_TEXT',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        deny: [Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[3],
                        deny: [Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.VIEW_CHANNEL],
                    },
                ])
            })

            message.guild.channels.create('???????????ous-recrutons', {
                type: 'GUILD_TEXT',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[3],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                ])
            })

            message.guild.channels.create('???????????andidatures', {
                type: 'GUILD_TEXT',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.READ_MESSAGE_HISTORY,
                            Permissions.FLAGS.SEND_MESSAGES,
                            Permissions.FLAGS.MANAGE_MESSAGES,
                            Permissions.FLAGS.ADD_REACTIONS
                        ],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.READ_MESSAGE_HISTORY,
                            Permissions.FLAGS.SEND_MESSAGES,
                        ],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.READ_MESSAGE_HISTORY,
                            Permissions.FLAGS.SEND_MESSAGES,
                        ],
                    },
                    {
                        id: all_roles_id[3],
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                ])
            })

            message.guild.channels.create('???????????????-?????????-???????????????', {
                type: 'GUILD_TEXT',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        deny: [Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[3],
                        deny: [Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.VIEW_CHANNEL],
                    },
                ])
            })

            message.guild.channels.create('???????????iens-utiles', {
                type: 'GUILD_TEXT',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[3],
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                ])
            })

            message.guild.channels.create('???????????nnonces', {
                type: 'GUILD_TEXT',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[3],
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                ])
            })

            message.guild.channels.create('???????????ews', {
                type: 'GUILD_TEXT',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[3],
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                ])
            })

            message.guild.channels.create('???????????oles-classes', {
                type: 'GUILD_TEXT',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.READ_MESSAGE_HISTORY],
                        deny: [Permissions.FLAGS.SEND_MESSAGES],
                    },
                    {
                        id: all_roles_id[3],
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                ])
            })

            message.guild.channels.create('???????????lips-screenshot', {
                type: 'GUILD_TEXT',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.READ_MESSAGE_HISTORY,
                            Permissions.FLAGS.SEND_MESSAGES,
                            Permissions.FLAGS.MANAGE_MESSAGES,
                            Permissions.FLAGS.ADD_REACTIONS,
                            Permissions.FLAGS.ATTACH_FILES,
                            Permissions.FLAGS.EMBED_LINKS
                        ],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.READ_MESSAGE_HISTORY,
                            Permissions.FLAGS.SEND_MESSAGES,
                            Permissions.FLAGS.ADD_REACTIONS,
                            Permissions.FLAGS.ATTACH_FILES,
                            Permissions.FLAGS.EMBED_LINKS
                        ],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.READ_MESSAGE_HISTORY,
                            Permissions.FLAGS.SEND_MESSAGES,
                            Permissions.FLAGS.ADD_REACTIONS,
                            Permissions.FLAGS.ATTACH_FILES,
                            Permissions.FLAGS.EMBED_LINKS
                        ],
                    },
                    {
                        id: all_roles_id[3],
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                ])
            })

            message.guild.channels.create('??????????eneral', {
                type: 'GUILD_TEXT',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.READ_MESSAGE_HISTORY,
                            Permissions.FLAGS.SEND_MESSAGES,
                            Permissions.FLAGS.MANAGE_MESSAGES,
                            Permissions.FLAGS.ADD_REACTIONS,
                            Permissions.FLAGS.ATTACH_FILES,
                            Permissions.FLAGS.EMBED_LINKS
                        ],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.READ_MESSAGE_HISTORY,
                            Permissions.FLAGS.SEND_MESSAGES,
                            Permissions.FLAGS.ADD_REACTIONS,
                            Permissions.FLAGS.ATTACH_FILES,
                            Permissions.FLAGS.EMBED_LINKS
                        ],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.READ_MESSAGE_HISTORY,
                            Permissions.FLAGS.SEND_MESSAGES,
                            Permissions.FLAGS.ADD_REACTIONS,
                            Permissions.FLAGS.ATTACH_FILES,
                            Permissions.FLAGS.EMBED_LINKS
                        ],
                    },
                    {
                        id: all_roles_id[3],
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                ])
            })

            message.guild.channels.create('?????????????????????????????????????????????', {
                type: 'GUILD_TEXT',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL,],
                        deny: [Permissions.FLAGS.SEND_MESSAGES]
                    },
                    {
                        id: all_roles_id[1],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL,],
                        deny: [Permissions.FLAGS.SEND_MESSAGES]
                    },
                    {
                        id: all_roles_id[2],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL,],
                        deny: [Permissions.FLAGS.SEND_MESSAGES]
                    },
                    {
                        id: all_roles_id[3],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL],
                        deny: [Permissions.FLAGS.CONNECT, Permissions.FLAGS.SPEAK],
                    },
                ])
            })

            message.guild.channels.create('???????????????????ecrue???????????????', {
                type: 'GUILD_TEXT',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.READ_MESSAGE_HISTORY,
                            Permissions.FLAGS.SEND_MESSAGES,
                            Permissions.FLAGS.MANAGE_MESSAGES,
                        ],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.READ_MESSAGE_HISTORY,
                            Permissions.FLAGS.SEND_MESSAGES,
                        ],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.READ_MESSAGE_HISTORY,
                            Permissions.FLAGS.SEND_MESSAGES,
                        ],
                    },
                    {
                        id: all_roles_id[3],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.READ_MESSAGE_HISTORY,
                            Permissions.FLAGS.SEND_MESSAGES,
                        ],
                    },
                ])
            })

            message.guild.channels.create('.?????????????????????????????????????????????????? Entretien ??', {
                type: 'GUILD_VOICE',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.CONNECT,
                            Permissions.FLAGS.REQUEST_TO_SPEAK,
                        ],
                    },
                    {
                        id: guest_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.CONNECT,
                            Permissions.FLAGS.REQUEST_TO_SPEAK,
                            Permissions.FLAGS.MUTE_MEMBERS
                        ],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.CONNECT,
                            Permissions.FLAGS.REQUEST_TO_SPEAK,
                        ],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.CONNECT,
                            Permissions.FLAGS.REQUEST_TO_SPEAK,
                        ],
                    },
                    {
                        id: all_roles_id[3],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.CONNECT,
                            Permissions.FLAGS.REQUEST_TO_SPEAK,
                        ],
                    },
                ])
            })

            message.guild.channels.create('??????????????????????????????????????????', {
                type: 'GUILD_VOICE',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                        ],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                        ],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                        ],
                    },
                    {
                        id: all_roles_id[3],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL],
                        deny: [Permissions.FLAGS.CONNECT, Permissions.FLAGS.SPEAK],
                    },
                ])
            })

            message.guild.channels.create('.??????????????????????????????????????????????????????????????????????| Staff |', {
                type: 'GUILD_VOICE',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.CONNECT,
                            Permissions.FLAGS.REQUEST_TO_SPEAK,
                        ],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                        ],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                        ],
                    },
                    {
                        id: all_roles_id[3],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL],
                        deny: [Permissions.FLAGS.CONNECT],
                    },
                ])
            })

            message.guild.channels.create('??? ???????????????????????????????????? ???', {
                type: 'GUILD_VOICE',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        allow: [Permissions.FLAGS.VIEW_CHANNEL],
                        deny: [Permissions.FLAGS.CONNECT, Permissions.FLAGS.SPEAK],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                        ],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                        ],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                        ],
                    },
                    {
                        id: all_roles_id[3],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL],
                        deny: [Permissions.FLAGS.CONNECT, Permissions.FLAGS.SPEAK],
                    },
                ])
            })

            message.guild.channels.create('.????????????????????????????????????????-???? ??R??union ????-', {
                type: 'GUILD_VOICE',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.CONNECT,
                            Permissions.FLAGS.REQUEST_TO_SPEAK,
                            Permissions.FLAGS.MUTE_MEMBERS,
                        ],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.CONNECT,
                            Permissions.FLAGS.REQUEST_TO_SPEAK,
                        ],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.CONNECT,
                            Permissions.FLAGS.REQUEST_TO_SPEAK,
                        ],
                    },
                    {
                        id: all_roles_id[3],
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                ])
            })

            message.guild.channels.create('.???????????????????????????????????????? ???? ???????? General', {
                type: 'GUILD_VOICE',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guest_role,
                        allow: [Permissions.FLAGS.VIEW_CHANNEL],
                        deny: [Permissions.FLAGS.CONNECT, Permissions.FLAGS.SPEAK],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.CONNECT,
                            Permissions.FLAGS.REQUEST_TO_SPEAK,
                            Permissions.FLAGS.MUTE_MEMBERS,
                        ],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.CONNECT,
                            Permissions.FLAGS.REQUEST_TO_SPEAK,
                        ],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.CONNECT,
                            Permissions.FLAGS.REQUEST_TO_SPEAK,
                        ],
                    },
                    {
                        id: all_roles_id[3],
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                ])
            })

            message.guild.channels.create('??? Cre??r ton vocal', {
                type: 'GUILD_VOICE',
            }).then(channel => {
                channel.setParent(category_parent)
                channel.permissionOverwrites.set([
                    {
                        id: everyone_role,
                        allow: [Permissions.FLAGS.VIEW_CHANNEL],
                        deny: [Permissions.FLAGS.CONNECT, Permissions.FLAGS.SPEAK]
                    },
                    {
                        id: guest_role,
                        allow: [Permissions.FLAGS.VIEW_CHANNEL],
                        deny: [Permissions.FLAGS.CONNECT, Permissions.FLAGS.SPEAK],
                    },
                    {
                        id: all_roles_id[0],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.CONNECT,
                            Permissions.FLAGS.REQUEST_TO_SPEAK,
                            Permissions.FLAGS.MUTE_MEMBERS,
                        ],
                    },
                    {
                        id: all_roles_id[1],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.CONNECT,
                            Permissions.FLAGS.REQUEST_TO_SPEAK,
                        ],
                    },
                    {
                        id: all_roles_id[2],
                        allow: [
                            Permissions.FLAGS.VIEW_CHANNEL,
                            Permissions.FLAGS.CONNECT,
                            Permissions.FLAGS.REQUEST_TO_SPEAK,
                        ],
                    },
                    {
                        id: all_roles_id[3],
                        allow: [Permissions.FLAGS.VIEW_CHANNEL],
                        deny: [Permissions.FLAGS.CONNECT, Permissions.FLAGS.SPEAK],
                    },
                ])

                axios.post(endpoint + '/api/add_category_voice_channel', {
                    IdChannel: channel.id,
                }).then(function (response) {
                    console.log(response.data.message)
                    // message.reply(response.data.message)
                }).catch(function (error) {
                    console.log(error.response.data.message);
                });
            })

        }, 2000)
    }
})