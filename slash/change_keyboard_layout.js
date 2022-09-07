const 
    { ContextMenuCommandBuilder, ApplicationCommandType } = require('discord.js'),
    { categories } = require('../utils')

module.exports = new ContextMenuCommandBuilder()
	.setName('Change keyboard layout')
    .setNameLocalization('ru', 'Сменить раскладку клавиатуры')
    .setNameLocalization('uk', 'Змінити розкладку клавіатури')
	.setType(ApplicationCommandType.Message);

    module.exports.category = categories.utils