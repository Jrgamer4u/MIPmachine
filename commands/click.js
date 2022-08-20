const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('click')
		.setDescription('click'),
	async execute(interaction) {
		return interaction.reply("Click.");
	},
};
