const 
    fs = require('fs'),
    { EmbedBuilder, Colors } = require('discord.js'),
    { db } = require('./index');

module.exports = {
    getLocalisation: (lang) => {
        lang_codes = require(`./localisation/${
            fs.readdirSync('./localisation/').includes(lang + '.json') ?
            lang : 'en'
        }.json`);

        return lang_codes || require('./localisation/en.json');
    },
    handleError: async (inter, err, codes) => {
        console.error(err)
        if (!inter.reply) {return}
        a = inter.deffered ? inter.editReply : inter.reply
        a({embeds: [
            new EmbedBuilder()
                .setTitle(codes.error_title)
                .setDescription(codes.error_text)
                .setColor(Colors.Red)
            ]});
    },
    refreshGuild: async (g) => {
        db
            .from('servers')
            .select('*')
            .match({ id: g.id })
            .then(d=>{
                if (!d.data.length) {
                    db
                        .from('servers')
                        .insert([{ id: g.id, get_roles: [], audit: [], language: g.preferredLocale }])
                        .then(a=>{
                            console.log(`${g.id} was added to DB`)
                        })
                } else {
                    console.log(`${g.id} is already in DB`)
                }
            })
    
    },
    categories: {
        main: 1, settings: 2, utils: 3
    }
};
getLocalisation = module.exports.getLocalisation;