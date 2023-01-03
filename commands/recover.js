const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("recover")
		.setDescription("recovers a person")
		.addStringOption((option) =>
			option
				.setName("input")
				.setDescription("Enter the person who gets recovered")
				.setRequired(true)
		),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setColor("#5866ef")
			.setTitle("Recovered:")
			.setDescription(interaction.options.getString("input"));
		return interaction.reply({ embeds: [embed] });
	},
};
