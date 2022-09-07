const { EmbedBuilder, Colors, MessageEmbed, MessageSelectMenu, MessageActionRow } = require('discord.js')

const select = new MessageSelectMenu()
                         .setCustomId("index")
                         .setPlaceHolder("Ничего")
                        .addOptions([
                           {
                            label: `${codes.info-full}`,
                            description: `${codes.help-help} \n ${codes.info-help}`,
                            value: `Первый`
                           },
                           {
                            label: `codes.settings`,
                            description: `${codes.SettingsAutoRoleJoin-help} \n ${codes.settingsViev-help} \n ${codes.settingsLang-help \n ${codes.settingsAutoRoleButtonsAdd-help} \n ${codes.settingsAutoRoleButtonsDelete-help} \n ${codes.settingsVerificatinSwitch-help} \n 
                         ${codes.settingsVerificationLength-help} \n ${codes.settingsVerificationSand-help}`,
                            value: `Второй`
                           },
                           {
                            label: `${codes.utilites}`,
                            description: `${codes.avatar-help}`,
                            value: `Третий`
                           },
                         ])
                         
                         .setMaxValues(1);
                    const row = new MessageActionRow()
                    .addComponents(select)

module.exports = async () => {
  inter.reply({ embeds: [ new EmbedsBuilder()
                         .setColor('2617db')
                         .setTitle( `${codes.rules}`)
                         .setThumbnail(bot.user.id)
                         .setDescription(` ${codes.help-help} \n ${codes.avatar-help} \n ${codes.info-help} \n ${codes.SettingsAutoRoleJoin-help} \n ${codes.settingsViev-help} \n 
                         ${codes.settingsLang-help} \n ${codes.settingsAutoRoleButtonsAdd-help} \n ${codes.settingsAutoRoleButtonsDelete-help} \n ${codes.settingsVerificatinSwitch-help} \n 
                         ${codes.settingsVerificationLength-help} \n ${codes.settingsVerificationSand-help}`)
                         ], components:[row] });
                         
                      });
                         
