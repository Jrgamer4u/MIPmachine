const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("kill")
		.setDescription("kills a person")
		.addStringOption((option) =>
			option
				.setName("input")
				.setDescription("Enter the person who gets killed")
				.setRequired(true)
		),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setColor("#f04747")
			.setTitle("Killed:")
			.setDescription(interaction.options.getString("input"));
		return interaction.reply({ embeds: [embed] });
	},
};
