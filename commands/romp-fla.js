const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/romp-fla_betrayed.mp3');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('romp-fla')
		.setDescription('fnf guys'),
	async execute(interaction) {
		return interaction.reply({ content: 'romp', files: [file] });
	},
};