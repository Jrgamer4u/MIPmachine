const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("why")
		.setDescription(
			'says "Ibby give me command ideas for mipmachine or i\'ll die"'
		),
	async execute(interaction) {
		return interaction.reply(
			"Ibby give me command ideas for mipmachine or i'll die"
		);
	},
};
