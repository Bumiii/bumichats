module.exports = {
    name: 'setup',
    description: "sets up BumiChats",
    execute(client, message, args, Discord) {
        if (message.member.hasPermission("ADMINISTRATOR")) {


            message.guild.channels
                .create('bumichats', {
                    type: 'text',
                })
                .then((channel) => {
                    console.log(channel)
                })
            message.channel.send("The 'bumichats' channel has been created and can be moved in to any category and when you type in it I will give a response");
            console.log("Command executed");
        } else {
            message.channel.send("You do not have the correct permissions");
            console.log("Command executed");
        }
    }
}