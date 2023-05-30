const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/fort.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fort')
		.setDescription('forts you'),
	async execute(interaction) {
		await interaction.reply("**forts in a ~~18+~~ 20+ way**");
		await interaction.followUp({ content: '…', files: [file] });
	},
};