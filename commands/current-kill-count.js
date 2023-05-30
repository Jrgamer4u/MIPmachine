const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('current-kill-count')
		.setDescription('tells you'),
	async execute(interaction) {
		return interaction.reply("more than you :sunglasses: <:lol:857776541727588362>");
	},
};
