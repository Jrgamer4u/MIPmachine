const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const file = new AttachmentBuilder('files/lemon.png');
const file2 = new AttachmentBuilder('files/lemon2.png');
const file3 = new AttachmentBuilder('files/lemon3.png');
const file4 = new AttachmentBuilder('files/lemon4.png');
const file5 = new AttachmentBuilder('files/lemon5.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('eat-lemon')
		.setDescription('eat the big lemon'),
	async execute(interaction) {
		await interaction.reply({ content: '**lemo-** …', files: [file] });
		await interaction.followUp('…');
		await wait(1000);
		await interaction.followUp({ files: [file2] });
		await wait(1000);
		await interaction.followUp({ files: [file3] });
		await wait(1000);
		await interaction.followUp({ files: [file4] });
		await wait(1000);
		await interaction.followUp({ files: [file5] });
	},
};