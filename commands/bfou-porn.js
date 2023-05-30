const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/bfou-porn.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bfou-porn')
		.setDescription('REAL???'),
	async execute(interaction) {
		return interaction.reply({ content: "REAL- wait since when were lapis and bucket a thing", files: [file] });
	},
};