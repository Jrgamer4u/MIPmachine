const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('say stuff as MIPmachine')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('input what MIPmachine says')
				.setRequired(true)),
	async execute(interaction) {
		return interaction.reply(interaction.options.getString('input'));
	},
};
