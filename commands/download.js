const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/DOWNLOAD.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('download')
		.setDescription('now'),
	async execute(interaction) {
		return interaction.reply({ content: "now.", files: [file] });
	},
};