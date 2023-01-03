const { SlashCommandBuilder } = require("discord.js");
const Database = require("easy-json-database");
const suggestions = new Database("./database/suggestions.json");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("suggest")
		.setDescription("sends suggestions to MIP and Jrgamer4u for commands")
		.addStringOption((option) =>
			option
				.setName("input")
				.setDescription("Enter your suggestion")
				.setRequired(true)
		),
	async execute(interaction) {
		await suggestions.set(
			interaction.options.getString("input"),
			"suggestions"
		);
		await interaction.reply("Thank you.");
	},
};
