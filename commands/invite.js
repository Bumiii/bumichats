const discord = require("discord.js")

module.exports = {
    name: 'invite',
    description: "invite to the support server",
    execute(client, message, args, Discord){
        const embed = new discord.MessageEmbed()
        .setColor('#039154')
        .setAuthor('Bumi', 'https://i.imgur.com/OaqryKu.png', "https://account.venmo.com/u/Bumiii")
        .setTitle("The link below is the link to Bumi's Bots Support Server")
        .addFields(
            { name: 'Link to invite BumiChats', value: 'https://discord.com/oauth2/authorize?client_id=821474236698853427&scope=bot&permissions=8', inline: true },
            { name: "Link to the Bumi's Bots support server", value: 'https://discord.gg/jQ9Q4SJXXn', inline: true },
        )
        .setTimestamp()
        .setFooter("Click on my name to donate if you want to help with the further development of BumiBeats")
        message.channel.send(embed);
        console.log("Command executed");
    }
}