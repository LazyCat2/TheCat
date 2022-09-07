const 
    { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js'),
    { categories } = require('../utils')

module.exports = new ContextMenuCommandBuilder()
	.setName('Avatar')
    .setNameLocalization('ru', 'Аватар')
    .setNameLocalization('uk', 'Аватар')
	.setType(ApplicationCommandType.User);

module.exports.category = categories.utils