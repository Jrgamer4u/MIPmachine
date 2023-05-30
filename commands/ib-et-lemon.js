const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/lemon.mp4');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ib-et-lemon')
		.setDescription('lemon et ib'),
	async execute(interaction) {
		return interaction.reply({ files: [file] });
	},
};