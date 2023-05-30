const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/roast.mp4');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mega-roast')
		.setDescription('fr- from- from the movie- the movie gu-uy… i-im shaking'),
	async execute(interaction) {
		return interaction.reply({ content: "sheesh…", files: [file] });
	},
};