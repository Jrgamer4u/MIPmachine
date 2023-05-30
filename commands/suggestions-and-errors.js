const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('suggestions-and-errors')
		.setDescription('undiscord the bots'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setColor('#33ccff')
			.setTitle('Suggestions and Errors')
			.setDescription('[can do it through github, account needed](https://github.com/Jrgamer4u/MIPmachine/issues/new) or dm jrgamer4u ig');
		return interaction.reply({ embeds: [embed] });
	},
};
