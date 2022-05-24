const { SlashCommandBuilder } = require('@discordjs/builders');
const Database = require("easy-json-database")
const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
const db = new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('suggest')
		.setDescription('sends suggestions to MIP and Jrgamer4u for commands')
	  .addStringOption(option =>
		  option.setName('input')
			  .setDescription('Enter your suggestion')
			  .setRequired(true)),
	async execute(interaction) {
    await db.set(interaction.options.getString('input'), 'suggestions');
		await interaction.reply('Thank you.');
	},
};
