const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('get-here')
		.setDescription('make BarBot get over here'),
	async execute(interaction) {
		await interaction.reply('**entering channel noises**');
		await wait(2000);
		await interaction.reply(`sup <@${interaction.user.id}> what you need`);
	},
};
