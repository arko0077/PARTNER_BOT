const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**هەتا تۆ نەچیتە ڤۆیس من ئەس نا ھيم**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(`رێكلامێ بكە من ژي بو تە كرhttps://discord.gg/EtdVmXBsZy `) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("793626191533309962").send(
`> By  <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`شتێک بنوسە بۆ ستریمینگ`,"لينكێ ذيسكوردێ خو بو من فرێكە") 
});




client.login("NzkzNjMwMzU2MDg2ODQ5NTU2.X-vD3Q.Sasz0eCXLw7FRxik1-wPGVT0kFg");//تۆکین لێرە دانێ
