const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/crocs.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('horny-shoe')
		.setDescription('show me'),
	async execute(interaction) {
		return interaction.reply({ content: "I shoed the show…", files: [file] });
	},
};