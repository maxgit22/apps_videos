var Discord = require('discord.js');
const tokens = require('../tokens.json');
const log = require(`../handlers/logHandler.js`);
const client = new Discord.Client();

exports.run = async (client, msg, params) => {

  if(!msg.channel.name.startsWith(`xd7-`)) {
    const embed = new Discord.RichEmbed()
    .setAuthor(`${tokens.generic.messages.noPermissions}`)
    .setDescription(`You can only execute this command in a ticket channel!`)
    .setColor(tokens.generic.colour.error)
    .setTimestamp()
    .setFooter(`${tokens.generic.footer}`, `${tokens.generic.footerURL}`)
    msg.channel.send(embed)
    return;
  }

  let thisUser = msg.channel.name.replace('xd7-', '')
  let user = client.users.get(thisUser);

  user.send(">>> **Ticket has been closed By Team 👑XD7💎 Staff** \n\n *Do Not Reply TO This Thread Else It WIll Create A New One*\n\n ")
  msg.channel.delete()
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['c']
};

exports.help = {
  name: 'close',
  description: 'Replys to a ticket',
  usage: 'close'
};
