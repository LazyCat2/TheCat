const { SlashCommandBuilder } = require('discord.js');

module.exports = new SlashCommandBuilder()
    .setName('help')
    .setNameLocalization('ru', 'хелп')

    .setDescription('Show command list')
    .setDescriptionLocalization('ru', 'Показать список команд')