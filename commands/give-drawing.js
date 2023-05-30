const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('give-drawing')
		.setDescription('doodlin’, drawing, doodlin’, drawing')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('whom')
				.setRequired(true)),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		await interaction.reply(`yo ${interaction.options.getString('input')}`);
		await wait(2000);
		await interaction.followUp(`@${interaction.options.getString('input')} >:(`);
		await wait(2000);
		await interaction.followUp(`anyways\n**gives ${interaction.options.getString('input')} a drawing** :]`);
	},
};
