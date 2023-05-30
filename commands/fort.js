const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/fort.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fort')
		.setDescription('fort'),
	async execute(interaction) {
		await interaction.reply("**fort**");
		await interaction.followUp({ content: '…', files: [file] });
	},
};