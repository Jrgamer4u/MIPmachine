const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("version")
		.setDescription("shows version"),
	async execute(interaction) {
		return interaction.reply("MipMachine EX January 2023 | OBR 2.2.0");
	},
};
