const { SlashCommandBuilder } = require('@discordjs/builders');
const Database = require("easy-json-database")
const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
const db = new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('total-clicks')
		.setDescription('sends total clicks')
	async execute(interaction) {
		await interaction.reply(db.get('Total Clicks') + ' Clicks.');
	},
};
