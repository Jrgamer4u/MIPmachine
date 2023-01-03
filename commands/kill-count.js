const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("kill-count")
		.setDescription("says noob, credit to Ibby"),
	async execute(interaction) {
		return interaction.reply("noob");
	},
};
