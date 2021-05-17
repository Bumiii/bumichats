const fetch = require("node-fetch").default;

module.exports = (Discord, client, message) =>{

    if (message.author.bot || message.channel.type === 'dm') return;

    if(message.channel.name === "bumichats") {
        fetch(`https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}&key=lmxWAyly2nsfNC7UWbPLpB7ts`)
        .then(response => response.json())
        .then(data => {
            message.channel.send(data.response)
        })
        .catch(() => {
            message.channel.send("Couldn't fetch response!");
        })
    }

    const prefix = '!bc ';
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(command) command.execute(client, message, cmd, args, Discord);
}