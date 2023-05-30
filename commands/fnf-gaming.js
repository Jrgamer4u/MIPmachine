const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/broke.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fnf-gaming')
		.setDescription('no i’m not making the gaming-fnf command'),
	async execute(interaction) {
		return interaction.reply({ content: "fnf mods in a nutshell", files: [file] });
	},
};