const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('love')
		.setDescription('potato'),
	async execute(interaction) {
		return interaction.reply("chips can I love you <3");
	},
};
