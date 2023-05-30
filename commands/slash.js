const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;
const file = new AttachmentBuilder('files/moai.gif');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shash')
		.setDescription('look guys here’s the funny guy. HERE’S THE FUNNY GUY'),
	async execute(interaction) {
		await interaction.reply('…');
		await wait(1000);
		await interaction.followUp({ content: 'die <:shot:858854281292283914>', files: [file] });
	},
};