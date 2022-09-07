const 
    { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js'),
    { categories } = require('../utils')

module.exports = new ContextMenuCommandBuilder()
	.setName('User info')
    .setNameLocalization('ru', 'Информация о пользователе')
    .setNameLocalization('uk', 'Дані про користувача')
	.setType(ApplicationCommandType.User);
    module.exports.category = categories.utils