const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('images/BALLZ.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('balls')
		.setDescription('balls balls balls'),
	async execute(interaction) {
		return interaction.reply({ files: [file] });
	},
};