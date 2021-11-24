const Command = require('../Structures/Command')
const {MessageEmbed} = require('discord.js');

module.exports = new Command({
    name: 'rules',
    description: 'Genere les embed du channel Reglement',

    async run(message, args, client) {

        let rules_channel = message.guild.channels.cache.get('904751298472185876')

        let emoji1 = client.emojis.cache.get('848272105421930516')
        let emoji2 = client.emojis.cache.get('848271520735952948')
        let emoji3 = client.emojis.cache.get('848271141305974815')
        let emoji4 = client.emojis.cache.get('848273287964655616')
        let emoji5 = client.emojis.cache.get('848273304976490537')
        let emoji6 = client.emojis.cache.get('909878877239799840')
        let emoji7 = client.emojis.cache.get('909879163308097636')
        let emoji8 = client.emojis.cache.get('909880132024541264')

        let circle = client.emojis.cache.get('795254914560294932')

        let valid = client.emojis.cache.get('858464802766979102')

        let channelContactStaff = client.channels.cache.get('902880909827666000')
        let channelRole = client.channels.cache.get('904751443037290507')
        let channelFractal = client.channels.cache.get('904751374233903144')
        let discordInvite = 'https://discord.gg/NPq62weZjc'

        const logoFractal = new MessageEmbed()
            .setColor('#D0CFFF')
            .setImage('https://i.imgur.com/TsE4DxL.png')

        const welcome = new MessageEmbed()
            .setColor('#D0CFFF')
            .setImage('https://i.imgur.com/A62I53C.png')

        const fractalWelcome = new MessageEmbed()
            .setColor('#D0CFFF')
            .setImage('https://i.imgur.com/kFyNhoX.png')
            .addFields(
                {
                    name: `\u200b`,
                    value: `**FRACTAL** Team & Communauté multigaming  créée en Novembre 2021 est avant tout un rassemblement de joueurs passionnés & matures .Pour de plus amples informations concernant FRACTAL dirigez vous dans le salon ${channelFractal}`,
                    inline: false
                },
            )

        const link = new MessageEmbed()
            .setColor('#D0CFFF')
            .setImage('https://i.imgur.com/aD04FCu.png')

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

        const topRules = new MessageEmbed()
            .setColor('#D0CFFF')
            .setImage('https://i.imgur.com/gWiiKTQ.png')

        const rules1 = new MessageEmbed()
            .setColor('#D0CFFF')
            .setImage('https://i.imgur.com/kFyNhoX.png')
            .addFields(
                {
                    name: `> ${emoji1} Signalez les comportements inappropriés`,
                    value: `Tout signalement de membres se fait dans le salon dédié avec politesse et respect, ${channelContactStaff}, sur présentation de preuves fiables.`,
                    inline: false
                },
            )

        const rules2 = new MessageEmbed()
            .setColor('#D0CFFF')
            .setImage('https://i.imgur.com/kFyNhoX.png')
            .addFields(
                {
                    name: `> ${emoji2} Pas de NSFW...`,
                    value: `Pas de NSFW de contenu ou propos pornographique , violent, homophobe, raciste, gênant ou en rapport avec la religion/politique. Aucun de ces contenues  sont autorisés sur le serveur. Cela inclut les avatars, les noms d'utilisateur, le statut personnalisé, les émojis (messages ou réactions),si un membre  ne respecte pas ces règles merci de nous contacter dans le salon.`,
                    inline: false
                },
            )

        const rules3 = new MessageEmbed()
            .setColor('#D0CFFF')
            .setImage('https://i.imgur.com/kFyNhoX.png')
            .addFields(
                {
                    name: `> ${emoji3} No Drama !`,
                    value: `Aucun drame, insulte, discours de haine, racisme, cyberharcèlement , ou toute forme de comportement négatif n'est autorisé sur le serveur. Contactez-nous immédiatement dans le channel ${channelContactStaff}`,
                    inline: false
                },
            )

        const rules4 = new MessageEmbed()
            .setColor('#D0CFFF')
            .setImage('https://i.imgur.com/kFyNhoX.png')
            .addFields(
                {
                    name: `> ${emoji4} Droit à l'image`,
                    value: `De partager des images de personnes qui ne vous représentent pas. Cela va à l'encontre du droit à l'image et sera supprimé sans aucun préavis.`,
                    inline: false
                },
            )

        const rules5 = new MessageEmbed()
            .setColor('#D0CFFF')
            .setImage('https://i.imgur.com/kFyNhoX.png')
            .addFields(
                {
                    name: `> ${emoji5} Démarchage`,
                    value: `Le démarchage est interdit. Il s’agit d’aller solliciter des membres tant en MP que sur les serveurs officiels, sans que vous n’en ayez été invité, avec éventuellement pour but de promouvoir un quelconque contenu.`,
                    inline: false
                },
            )

        const rules6 = new MessageEmbed()
            .setColor('#D0CFFF')
            .setImage('https://i.imgur.com/kFyNhoX.png')
            .addFields(
                {
                    name: `> ${emoji6} Pas de spam , de PUB`,
                    value: `Le spam n'est pas autorisé, cela inclut tout type de contenu. De publicité des sites web, des entreprises ou des organisations qui n'ont aucun rapport avec **FRACTAL**.`,
                    inline: false
                },
            )

        const rules7 = new MessageEmbed()
            .setColor('#D0CFFF')
            .setImage('https://i.imgur.com/kFyNhoX.png')
            .addFields(
                {
                    name: `> ${emoji7} Aucun cheater n'est toléré sur FRACTAL`,
                    value: `Il est formellement interdit de partager ou d'utiliser une quelconque méthode de hack / triche / exploit sur le jeu !.`,
                    inline: false
                },
            )

        const rules8 = new MessageEmbed()
            .setColor('#D0CFFF')
            .setImage('https://i.imgur.com/kFyNhoX.png')
            .addFields(
                {
                    name: `> ${emoji8} Acceptez le reglement`,
                    value: `Vous devez être en accord avec ce règlement et cochez ${valid} pour nous rejoindre sur le serveur FRACTAL N'oubliez pas de vous assigner un rôle ${channelRole}`,
                    inline: false
                },
            )

        rules_channel.send(
            {
                embeds: [
                    logoFractal,
                    welcome,
                    fractalWelcome,
                    link,
                    textLink,
                ]
            });

        rules_channel.send(
            {
                embeds: [
                    topRules,
                    rules1,
                    rules2,
                    rules3,
                    rules4,
                    rules5,
                    rules6,
                    rules7,
                    rules8,
                ]
            }).then(m => {
                message.delete()
        })
    }
})