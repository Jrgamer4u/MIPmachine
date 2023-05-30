const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const file = new AttachmentBuilder('files/bfb-porn.jpg');
const file2 = new AttachmentBuilder('files/bfb-porn2.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bfb-porn')
		.setDescription('fake'),
	async execute(interaction) {
		await interaction.reply({ files: [file] });
		await wait(5000);
		await interaction.followUp({ files: [file2] });
		await interaction.followUp('fear me');
	},
};