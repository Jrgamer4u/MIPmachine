const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/FNFGAMING2.mp4');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fnf-gaming-3')
		.setDescription('no i’m not making the gaming-fnf-3 command'),
	async execute(interaction) {
		return interaction.reply({ content: "fb fnf real", files: [file] });
	},
};