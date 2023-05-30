const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/image0 (36).png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dick')
		.setDescription('ib dick real!'),
	async execute(interaction) {
		return interaction.reply({ content: 'guys look real', files: [file] });
	},
};