const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('images/fakelad.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fakelad')
		.setDescription('shows fakelad image'),
	async execute(interaction) {
		return interaction.reply({ files: [file] });
	},
};
