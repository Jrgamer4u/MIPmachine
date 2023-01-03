const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("gaming")
		.setDescription("gamer"),
	async execute(interaction) {
		return interaction.reply("gaming");
	},
};
