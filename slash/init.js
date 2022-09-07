require('dotenv').config();
const 
	{ REST } = require('@discordjs/rest'),
	{ Routes } = require('discord.js'),
	fs = require('fs'),

	commands = [],
	commandFiles = fs.readdirSync('./slash').filter(file => file.endsWith('.js') && file != 'init.js'),

	clientId = process.env.client_id,
	guildId = '927860273388343306';


for (const file of commandFiles) {
	const command = require(`./${file}`)
		.setDMPermission(false)
	
	console.log(command.name)
	console.log(command.category)
	commands.push(command.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.token);

(async () => {
	try {
		console.log('Refreshing slashes...');

		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Slashes was refreshed');
	} catch (error) {
		console.error(error);
	}
})();
