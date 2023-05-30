const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/demoman-2.mp4');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('demoman-tricky-2')
		.setDescription('fnf nyc'),
	async execute(interaction) {
		return interaction.reply({ content: "OMG HES BACK!!\n", files: [file] });
	},
};