const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/cringe1.png');
const file2 = new AttachmentBuilder('files/cringe2.png');
const file3 = new AttachmentBuilder('files/cringe3.png');
const file4 = new AttachmentBuilder('files/cringe4.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cringe')
		.setDescription('look at cringe images'),
	async execute(interaction) {
		await interaction.reply({ files: [file, file2, file3, file4] });
		await interaction.followUp('CRINGE');
	},
};