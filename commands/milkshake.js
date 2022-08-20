const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('milkshake')
		.setDescription('test command'),
	async execute(interaction) {
		await interaction.reply('MIP');
		await wait(4000);
		await interaction.editReply('Shmoo');
	},
};
