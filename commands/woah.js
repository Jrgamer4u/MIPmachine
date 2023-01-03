const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder().setName("woah").setDescription("says woah"),
	async execute(interaction) {
		return interaction.reply("woah");
	},
};
