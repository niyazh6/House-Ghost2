
const Discord =require("discord.js");
const TOKEN ="Mzk3MDI5OTcxNzk4OTE3MTMw.DSqCmg.kM2ZW447KkmNTLinUTMa4bkMJ-s";
const prefix = "-";
var rtd = [
    "yes",
    "no",
    "maybe",
    "i dont know"
];
function generateHex()
{ return '#' + Math.floor(Math.random() * 16777215).toString(16); }

var bot = new Discord.Client();
bot.on("ready",function(){
    console.log("ready");
})
bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "welcome").sendMessage(member.toString() + "Welcome to the discord channel of our Clan..We are currently working on making this server better..Thanks for your patience.");
    member.addRole(member.guild.roles.find("name", "newrole"));
});
    /*member.guild.createRole(    {
        name: member.user.username,
        color: generateHex(),
        permissions: []
      }).then(function(role)
  { member.addRole(role); 
});*/

bot.on("message",function(message)
{    console.log(message.content);
    if (message.author.equals(bot.user)) return;
    if(message.content == "hello")
      message.channel.sendMessage(message.author.toString() + " hi..there");
    if(!message.content.startsWith(prefix)) return;
   
    var args = message.content.substring(prefix.length).split (" ");
    
    switch (args[0].toLowerCase()){
        case "ping" :
            message.channel.sendMessage(message.author.toString() + " pong");
        break;    
        case "info" :
            message.channel.sendMessage(message.author.toString() + " I am a bot created by wolfie for this server");
        break;
        case "roll":
            if (args[1]) { 
            message.channel.sendMessage(message.author.toString() + " " + rtd[Math.floor(Math.random() * rtd.length)]);    
            }
            else { message.channel.sendMessage("cant read that") };
            break;
        case "embed":
            var embed = new Discord.RichEmbed()
            .addField("test title1","test description1", true)
            .addField("test title2","test description2", true)  //makes this and above fields comes in one line
            .setColor(0x00ff342)
            .setFooter("testing of how footer works")
            .setThumbnail(message.author.avatarURL)
            .setDescription("hello, this is an illustration of RichEmbed")
            .setImage(URL="https://static.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg")
            .setAuthor("wolfie")
            message.channel.sendEmbed(embed);
            break;
        case "noticeme" :
            message.channel.sendMessage(message.author.toString() + "you are gonna rock");
            break;
        /*case "removerole" :
            message.member.removeRole(message.member.guild.roles.find("name", "newrole"));
            break;     
        case "deleterole" :
            message.member.guild.roles.find("name", "newrole").delete();   
            break;
        */     
            default: message.channel.sendMessage("Invalid command");    
        
    }
});
bot.login(TOKEN);
