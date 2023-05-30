const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('download-ssf2')
		.setDescription('link'),
	async execute(interaction) {
		await interaction.reply(':warning: **Do NOT download if you don’t have a PC.**\nhttps://www.supersmashflash.com/play/ssf2/downloads/');
	},
};