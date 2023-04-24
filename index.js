const { Client, Intents, Collection } = require('discord.js');
const { TOKEN } = require('./config.json');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
    ]
});



client.login(TOKEN);


const prefix = "+"


client.on('ready', () => {
    console.log('the bot is ready')
})


//ban Member v13
client.on('messageCreate', async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  
    if(command === 'ban') {

        let user = await message.mentions.members.first() || await message.guild.members.cache.get(args[0]);

        if(!user) return await message.reply({content : 'user ? '});

        try {
            await message.guild.members.ban(user).then(async () => {
                await message.reply({content : `${user} ✈`});
            })
        } catch (err) {
            await console.log(err);
        }
    }
});
//https://ra3dstudio.com CopyRight Codesس
