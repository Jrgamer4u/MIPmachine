const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/shmoo.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shmoo')
		.setDescription('not mipmachine ex'),
	async execute(interaction) {
		return interaction.reply({ content: "SHMOOOOOOOOOOOOOOOOOOOOOO", files: [file] });
	},
};