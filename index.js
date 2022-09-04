require('dotenv').config();
const
    { IntentsBitField, Client } = require('discord.js'),
    fs = require('fs'),
    { createClient } = require('@supabase/supabase-js'),

    bot = new Client({
        intents: new IntentsBitField(32767),
        ws: { 
            properties: {
                    $os: process.platform,
                    $browser: "Discord Android", //для статуса "в сети с телефона"
                    $device: "discord.js" 
                }
            }
    }),
    db = createClient( //База данных
        process.env.db_url,
        process.env.db_key
    );

module.exports = {bot: bot, startTime: Math.round(Date.now()/1000), db: db}
const { handleError, getLocalisation, refreshGuild } = require('./utils.js') // оно не на верху ибо должно быть импортировано ДО создания module.exports

if (process.argv.includes('--refresh-slash')) { //если запущено через node . --refrash-slash
    require('./slash/init.js');                                 //то обновляем слеш команды
}

interactionTypes = [
    'ping', 'command',
    'component', 'autocomplete',
    'modal'
];
selectMenus = {};

console.log('') // \n
start = Date.now(); //смотрим за сколько времени запустится бот
bot.on('ready', async ()=>{
    await bot.user.setPresence({ activities: [{ name: 'поедании вискаса', type: 5 }]}); //статус бота
    duration = Date.now() - start; 
    bot.guilds.cache.each(g=>{ refreshGuild(g) }) //обновляем сервера в бд
    console.log(`${bot.user.username} is ready for ${duration}ms`);
})

bot.on('interactionCreate', async (inter)=>{
    data = (await db //получаем данные из сервера
        .from('servers')
        .select('*')
        .match({ id: inter.guildId })).data[0] 

    path = './'
    try {
        if (inter.isCommand()) { path += 'commands/'; }
        if (inter.isAutocomplete()) { path += 'autocomplete/'; }
        path += inter.commandName + '/'
        try {
            sub = inter.options.getSubcommand()
            group = inter.options.getSubcommandGroup()
        }
        catch(a) { sub = null; group = null }
        if (inter.options && sub) {
            if (group) {
                path += group + '/'
            }
            path += sub
        }
        path = (path
            .replaceAll('-', '_')
            .replaceAll(' ', '_')
            .toLowerCase() + '.js')
            .replaceAll('/.js', '.js')
        console.log(path)
        path = require(path)
        path(inter, getLocalisation(data.language))
                .catch((err) => handleError(inter, err, getLocalisation(data.language)));
    } catch(err) { handleError(inter, err, getLocalisation(data.language)); }
});

bot.on('guildMemberAdd', async member => {
    data = await db
        .from('servers')
        .select('*')
        .match({ id: member.guildId })
    data= data.data[0]

    role= member.guild.roles.cache.find(role => role.id === data['role-join'])
    if (role) { 
        member.roles.add(role);
    }
});

bot.on("guildCreate", refreshGuild)

bot.login(process.env.token);
