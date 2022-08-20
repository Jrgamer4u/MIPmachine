const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('version')
		.setDescription('shows version'),
	async execute(interaction) {
		return interaction.reply('MipMachine EX 1.1.3 | Base: OBR 1.4.3');
	},
};
