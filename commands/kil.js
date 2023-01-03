const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("kil")
		.setDescription("kil person")
		.addStringOption((option) =>
			option.setName("input")
				.setDescription("Nter who di")
				.setRequired(true)
		),
	async execute(interaction) {
		return interaction.reply(
			"apolgy for bad english\nwhere were you wen " +
			interaction.options.getString("input") +
			' die\ni was at house eating dorito when phone ring\n"' +
			interaction.options.getString("input") +
			' is kil"\n"no"'
		);
	},
};
