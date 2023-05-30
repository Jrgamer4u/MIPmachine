const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('find-server')
		.setDescription('lets see if the server exists!')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('Type in anything and lets see if the server exists!')
				.setRequired(true)),
	async execute(interaction) {
		return interaction.reply(`Hmm. What’s this server?\ndiscord.gg/${interaction.options.getString('input')}`);
	},
};
