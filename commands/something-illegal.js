const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('something-illegal')
		.setDescription('ILLEGAL:exclamation:'),
	async execute(interaction) {
		await interaction.reply('alright then.\nim gonna do something illegal to you.');
		await wait(2000);
		await interaction.followUp('254.421.81.132 <:love:858854429143072798>');
	},
};