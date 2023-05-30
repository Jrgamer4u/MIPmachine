const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/lemon.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lemon')
		.setDescription('demon'),
	async execute(interaction) {
		return interaction.reply({ content: '**lemon.**', files: [file] });
	},
};