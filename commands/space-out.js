const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('space-out')
		.setDescription('spipy'),
	async execute(interaction) {
		await interaction.reply('Alrighty! Doing it in 5 seconds.');
		await wait(5000);
		await interaction.followUp('ㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\nㅤ\n');
		await interaction.followUp('<:yah:857776457987915786> the chat has been spaced out.');
	},
};