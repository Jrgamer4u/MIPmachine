const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('images/balls.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('download')
		.setDescription('shows funny image'),
	async execute(interaction) {
		return interaction.reply({files: [file]});
	},
};
