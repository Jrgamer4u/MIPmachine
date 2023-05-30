const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/cat.jpeg');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('from five nights at funkin'),
	async execute(interaction) {
		return interaction.reply({ content: "REAL!!!", files: [file] });
	},
};