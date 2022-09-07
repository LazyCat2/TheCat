const
    { SlashCommandBuilder } = require('discord.js'),
    { categories } = require('../utils.js')

module.exports = new SlashCommandBuilder()
    .setName('help')
    .setNameLocalization('ru', 'хелп')

    .setDescription('Show command list')
    .setDescriptionLocalization('ru', 'Показать список команд')

module.exports.category = categories.main