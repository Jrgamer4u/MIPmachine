const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cringe')
		.setDescription('says Cringe, credit to Ibby'),
	async execute(interaction) {
		return interaction.reply('Cringe');
	},
};
