const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('images/BALLZ.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('balls')
		.setDescription('balls balls balls'),
	async execute(interaction) {
		return interaction.reply({ files: [file] });
	},
};