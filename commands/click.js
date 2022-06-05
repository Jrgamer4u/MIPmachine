const { SlashCommandBuilder } = require('@discordjs/builders');
const Database = require("easy-json-database")
const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
const db = new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('click')
		.setDescription('add a click')
	async execute(interaction) {
    await db.set('Total Clicks', db.get('Total Clicks') + 1);
		await interaction.reply('We gained 1 click.');
	},
};
