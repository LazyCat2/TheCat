const
    { SlashCommandBuilder } = require('discord.js'),
    { categories } = require('../utils.js')

module.exports = new SlashCommandBuilder()
	.setName('settings')
    .setNameLocalization('ru', 'настройки')
    .setNameLocalization('uk', 'налаштування')

    .setDescription('Settings')
    .setDescriptionLocalization('ru', 'Настройки')
    .setDescriptionLocalization('uk', 'Налаштування')

    .setDefaultPermission(false)

    .addSubcommand(sub => sub
            .setName('language')
            .setNameLocalization('ru', 'язык')
            .setNameLocalization('uk', 'мова')

            .setDescription('Change bot language for this server')
            .setDescriptionLocalization('ru', 'Поменять язык бота для этого сервера')
            .setDescriptionLocalization('uk', 'Змінити мову бота для цього серверу')

        .addStringOption(op => op
                .setName('language')
                .setNameLocalization('ru', 'язык')
                .setNameLocalization('uk','мова')

                .setDescription('New bot\'s language')
                .setDescriptionLocalization('ru', 'Новый язык бота')
                .setDescriptionLocalization('uk', 'Нова мова бота')

                .addChoices(
                    { name: 'English', value: 'en' },
                    { name: 'Русский', value: 'ru' },
	            { name: 'Українська', value: 'uk' }
                )

                .setRequired(true)
            )
    )
    .addSubcommandGroup(group => group
        .setName('auto-role')
        .setNameLocalization('ru', 'авто-роль')
        .setNameLocalization('uk', 'авто-роль')
			
        .setDescription('d')

        .addSubcommand(sub => sub
            .setName('join')
            .setNameLocalization('ru', 'заход')
            .setNameLocalization('uk', 'приєднування')
            
            .setDescription('Give role to members when they joined')
            .setDescriptionLocalization('ru', 'Давать роль участникам когда они заходят')
            .setDescriptionLocalization('uk', 'Давати роль учасникам коли вони заходять')

            .addRoleOption(option => option
                .setName('role')
                .setNameLocalization('ru', 'роль')
                .setNameLocalization('uk', 'роль')

                .setDescription('This role will be given to new members')
                .setDescriptionLocalization('ru', 'Эту роль получат новые участники')
		.setDescriptionLocalization('uk', 'Цю роль отримають нові учасники')

                .setRequired(true)
            )
        )
        .addSubcommand(sub => sub
            .setName('buttons-add')
            .setNameLocalization('ru', 'кнопки-добавить')
            .setNameLocalization('uk', 'кнопки-добавити')
		       

            .setDescription('Add role to buttons')
            .setDescriptionLocalization('ru', 'Добавить роль в кнопки')
            .setDescriptionLocalization('uk', 'Добавити роль в кнопки')

            .addRoleOption(option => option
                .setName('role')
                .setNameLocalization('ru', 'роль')
	        .setNameLocalization('uk', 'роль')

                .setDescription('Members are able to get this role via buttons')
                .setDescriptionLocalization('ru', 'Участники смогут получить эту роль через кнопки')
		.setDescriptionLocalization('uk', 'Учасники зможуть получити цю роль через кнопки')

                .setRequired(true)
            )
        )
        .addSubcommand(sub => sub
            .setName('buttons-remove')
            .setNameLocalization('ru', 'кнопки-убрать')
            .setNameLocalization('uk', 'кнопки-прибрати')

            .setDescription('Remove role from buttons')
            .setDescriptionLocalization('ru', 'Убрать роль из кнопки')
	    .setDescriptionLocalization('uk', 'Прибрати роль з кнопки')
        )
    )
    .addSubcommand(sub => sub
        .setName('show')
        .setNameLocalization('ru', 'показать')
	.setNameLocalization('uk', 'показати')

        .setDescription('Shows current bot settings')
        .setDescriptionLocalization('ru', 'Показывает текущие настройки бота')
        .setDescriptionLocalization('uk', 'Показує настройки бота')
    )
    .addSubcommandGroup(group => group
        .setName('verify')
        .setNameLocalization('ru', 'верефикация')
        .setNameLocalization('uk', 'веріфікація')


        .setDescription('Verification is used to prevent raids using self-bots')
        .setDescriptionLocalization('ru', 'Верефикация предотвращает рейды через селф-ботов')
	.setDescriptionLocalization('uk', 'Веріфікація запобігає рейди селф-ботами')
        
        .addSubcommand(sub => sub
            .setName('toggle')
            .setNameLocalization('ru', 'переключить')
            .setNameLocalization('uk', 'переключити')

            .setDescription('Enable verification to prevent raids using self-bots')
            .setDescriptionLocalization('ru', 'Включите верефикацию, чтобы предотвратить рейды через селф-ботов')
            .setDescriptionLocalization('uk', 'Включіть веріфікацію щоб запобігти рейдам селф-ботами')
        )
        .addSubcommand(sub => sub
            .setName('length')
            .setNameLocalization('ru', 'длина')
	    .setNameLocalization('uk', 'довжина')

            .setDescription('Change length of captcha')
            .setDescriptionLocalization('ru', 'Сменить длину капчи')
	    .setDescriptionLocalization('uk', 'Змінити довжину капчі')


            .addIntegerOption(option => option
                .setMinValue(1)
                .setMaxValue(10)

                .setName('lenght')
                .setNameLocalization('ru', 'длина')
	        .setNameLocalization('uk', 'довжина')

                .setDescription('Amount of numbers in captcha')
                .setDescriptionLocalization('uk', 'Кількість цифр к капчі')
	        .setDescriptionLocalization('ru', 'Длина цифр в капче')

                .setRequired(true)
            )
        )
        .addSubcommand(sub => sub
            .setName('send')
            .setNameLocalization('ru', 'отправить')
            .setNameLocalization('uk', 'відправити')

            .setDescription('Sends messsage with button for verifycation')
            .setDescriptionLocalization('ru', 'Отправляет сообщение с кнопкой для верефикации')
	    .setDescriptionLocalization('uk', 'Відправляє повідомлення з кнопкою для веріфікації')
        )
    )

    module.exports.category = categories.settings