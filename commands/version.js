const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('version')
		.setDescription('shows version'),
	async execute(interaction) {
		return interaction.reply('MipMachine EX October Update 2022 (1.2.0) | OBR 1.5.0');
	},
};
