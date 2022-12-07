const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('version')
		.setDescription('shows version'),
	async execute(interaction) {
		return interaction.reply('MipMachine EX December Update 2022 (1.2.1) | OBR 1.5.1');
	},
};
