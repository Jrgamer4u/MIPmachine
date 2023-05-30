const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('oh-god')
		.setDescription('oh no'),
	async execute(interaction) {
		return interaction.reply("oh god oh no why");
	},
};
