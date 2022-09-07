const 
   { EmbedBuilder, Colors, MessageEmbed, SelectMenuBuilder, ActionRowBuilder } = require('discord.js'),
   { bot } = require('../index.js'),
   { categories } = require('../utils'),
   fs = require('fs')

help = null
descr = ''

const select = (codes) => { 
  options = []

for (cmd of fs.readdirSync('../slash').filter(file => file.endsWith('.js') && file != 'init.js')) {
  cmd = require(`../slash/${cmd}`)
  options.push({
    label: codes[cmd.category + '_category'],
    value: cmd.category
  })
  descr += cmd.name + '\n'
}

  return new SelectMenuBuilder()
  .setCustomId("index")
  .setPlaceholder("Выбери категорию")
 .addOptions(options)
  
  .setMaxValues(1);
}
module.exports = async (inter, codes) => {
  row = select(codes)
  inter.reply({ embeds: [ new EmbedBuilder()
                         .setColor(Colors.Blurple)
                         .setTitle( `codes.rules`)
                         .setThumbnail(bot.user.avatarURL())
                         .setDescription(descr)
                         ], components:[new ActionRowBuilder()
                           .addComponents(row)] });
}
                         
