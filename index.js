const Discord = require('discord.js');
const client = new Discord.Client();



client.on("guildMemberAdd", member => {
  const channel = member.guild.channels.find(channel => channel.name === "𝑾𝑬𝑳𝑪𝑶𝑴𝑬");
  if(!channel) return;
  channel.send(`Welcome to Our server
  Have a great time with us , ${member}`);
});




  // Create an event listener for messages
  client.on('message', message => {
    // If the message is "what is my avatar"
    if (message.content === 'what is my avatar') {
      // Send the user's avatar URL
      message.reply(message.author.avatarURL);
    }
  });

 
  client.on('ready', () => {
    console.log('I am ready!');
  });

  // Create an event listener for messages
  client.on('message', message => {
    // If the message is "ping"
    if (message.content === 'ping') {
      // Send "pong" to the same channel
      message.channel.send('pong');
    }
  });




      const prefix = "tb!";
      client.on ("message", message=> {

       msg= message.content.toLowerCase()

       mention = message.mentions.users.first();

       if(msg.startsWith (prefix + "send")) {

       if(mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice (8); 
        mention.sendMessage (mentionMessage);
        message.channel.send ("done!"); 
       }
      });






client.login("NjQ1OTY5MTU0NzM3NzAwODc0.XdKUyQ.abodOeuL3LdbpSv3Wzd6wgkqSd4");