const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('images/douchebag.gif');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('douchebag')
		.setDescription('shows you’re a douchebag'),
	async execute(interaction) {
		return interaction.reply({ files: [file] });
	},
};
