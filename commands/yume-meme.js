const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/yume-meme.mp4');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('yume-meme')
		.setDescription('wtf'),
	async execute(interaction) {
		return interaction.reply({ content: "lol xd so funny amirite", files: [file] });
	},
};