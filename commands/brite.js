const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/brite-off.png');
const file2 = new AttachmentBuilder('files/brite-on.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('brite')
		.setDescription('ow'),
	async execute(interaction) {
		await interaction.reply('Oh, so you don’t know what a Handy Brite is?');
		await interaction.followUp({ content: '**Well then. Allow me to demonstrate.**', files: [file] });
		await interaction.followUp({ content: '***WOOOOOOOOOHH***', files: [file2] });
	},
};