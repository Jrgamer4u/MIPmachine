const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/simp.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('simp')
		.setDescription('i’m gonna jitter'),
	async execute(interaction) {
		return interaction.reply({ files: [file] });
	},
};