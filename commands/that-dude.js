const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/that-dude.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('that-dude')
		.setDescription('simpson'),
	async execute(interaction) {
		return interaction.reply({ files: [file] });
	},
};