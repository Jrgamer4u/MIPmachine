const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gaming')
		.setDescription('gamer'),
	async execute(interaction) {
		return interaction.reply('gaming');
	},
};
