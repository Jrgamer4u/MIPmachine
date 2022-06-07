const { SlashCommandBuilder } = require('@discordjs/builders');
const Database = require("easy-json-database")
const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
const clicks = new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/database/clicks.json`)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('my-clicks')
		.setDescription('show number of clicks'),
	async execute(interaction) {
		if (clicks.has('clicks')) {
			clicks.set('clicks', 0);
		}
		return interaction.reply(clicks.get('clicks') + ' Clicks.');
	},
};
