const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/pfp.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pfp')
		.setDescription('sinker'),
	async execute(interaction) {
		return interaction.reply({ content: "idk why you would want it but here ye go", files: [file] });
	},
};