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
		return interaction.followUp(`**gives ${interaction.options.getString('input')} a drawing** :)`);
	},
};
