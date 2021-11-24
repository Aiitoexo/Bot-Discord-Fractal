const Command = require('../Structures/Command')
const {MessageEmbed} = require('discord.js');

module.exports = new Command({
    name: 'fractal',
    description: 'Genere les embed du channel fractal',

    async run(message, args, client) {

        let fractal_channel = message.guild.channels.cache.get('904751374233903144')

        let arrowLeft = client.emojis.cache.get('795689398233858098')
        let arrowRight = client.emojis.cache.get('795689140418379827')

        let circle = client.emojis.cache.get('795254914560294932')

        let discordInvite = 'https://discord.gg/NPq62weZjc'

        const logoFractal = new MessageEmbed()
            .setColor('#D0CFFF')
            .setImage('https://i.imgur.com/TsE4DxL.png')

        const teamFractal = new MessageEmbed()
            .setColor('#D0CFFF')
            .setImage('https://i.imgur.com/kFyNhoX.png')
            .addFields(
                {
                    name: `> ${arrowLeft} __TEAM FRACTAL__ ${arrowRight}`,
                    value: `FRACTAL  est une toute nouvelle structure communautaire (Team &  Multigaming) en pleine essor fondée en Novembre 2021 par un groupe d'amis soudés depuis de nombreuses années, passionnés de jeux-vidéo en tout genre(MMO, FPS, MOBA..) Ayant une vision commune d'un regroupement de joueurs en ligne unis, passionnés, respectueux et matures`,
                    inline: false
                },
            )

        const logoObjectifs = new MessageEmbed()
            .setColor('#D0CFFF')
            .setImage('https://i.imgur.com/HfmEpGa.png')

        const objectifsFractal = new MessageEmbed()
            .setColor('#D0CFFF')
            .setImage('https://i.imgur.com/kFyNhoX.png')
            .addFields(
                {
                    name: `> ${arrowLeft} __Objectifs FRACTAL__ ${arrowRight}`,
                    value: `Nos objectifs principaux sont de **rassembler** une communauté de joueurs passionnés, **d'échanger, d'évoluer ensemble** et d'être **reconnue** pour **nos exploits ensemble**.`,
                    inline: false
                }, {
                    name: `\u200b`,
                    value: `\u200b`,
                    inline: false
                }, {
                    name: `> Mais aussi:       `,
                    value: `${circle}**! Être une structure où la maturité est notre point fort !** \n${circle}Fournir un Discord stable, structuré et sécurisé dans une ambiance amicale et positive ! \n${circle}Un site WEB regroupant les news et les prochaines sorties de jeux sur lesquelles la team sera présente ,les prouesses de la communauté, les affiliations et partenaires , les lives etc... \n${circle}Mettre tout en oeuvre pour que chaque personne puisse s'épanouir et atteindre ses objectifs.`,
                    inline: false
                },
            )

        const logoEsprit = new MessageEmbed()
            .setColor('#D0CFFF')
            .setImage('https://i.imgur.com/OckkWa2.png')

        const espritFractal = new MessageEmbed()
            .setColor('#D0CFFF')
            .setImage('https://i.imgur.com/kFyNhoX.png')
            .addFields(
                {
                    name: `> ${arrowLeft} __L'esprit Fractal__ ${arrowRight}`,
                    value: `Nous avons déjà une forte expérience en MMORPG/FPS/MOBA. Nous avons su évoluer dans de nombreuses teams mais qui malheureusement  n’était pas dans la même vision commune que nous partageons.`,
                    inline: false
                }, {
                    name: `\u200b`,
                    value: `\u200b`,
                    inline: false
                }, {
                    name: `> Faire partie de FRACTAL c’est :`,
                    value: `${circle} L’idée de complémentarité.\n ${circle} Toujours évoluer ensemble.\n ${circle} Être solidaire, Avoir une confiance mutuelle.\n ${circle} Une ambiance amicale et respectueuse.`,
                    inline: false
                }, {
                    name: `\u200b`,
                    value: `*Nous mettons un point d’honneur quant au respect que chacun doit avoir envers les autres joueurs appartenant ou non à la team. Nous voulons une structure sans "Drama" où tout le monde prend plaisir à nous rejoindre pour décompresser et s'amuser.* \n\n **Cet esprit doit être la ligne à suivre pour tout membre arborant le tag FRACTAL.**`,
                    inline: false
                },
            )

        const logoLink = new MessageEmbed()
            .setColor('#D0CFFF')
            .setImage('https://i.imgur.com/tGzJAXO.png')

        const textLink = new MessageEmbed()
            .setColor('#D0CFFF')
            .setImage('https://i.imgur.com/kFyNhoX.png')
            .addFields(
                {
                    name: `> Suivez-Nous sur:`,
                    value: `${circle} __**Site**__ : Fractal-team.fr \n${circle} __**Lien d'invitation**__ : ${discordInvite}`,
                    inline: false
                },
            )

        fractal_channel.send(
            {
                embeds: [
                    logoFractal,
                    teamFractal,
                    logoObjectifs,
                    objectifsFractal,
                    logoEsprit,
                    espritFractal,
                    logoLink,
                    textLink,
                ]
            }
        ).then(m => {
            message.delete()
        })
    }
})