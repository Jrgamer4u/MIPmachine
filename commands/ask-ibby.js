const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ask-ibby')
		.setDescription('to the ibbster'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setColor('#33ccff')
			.setTitle('just ask in ibby’s dms')
			.setDescription('lmao');
		return interaction.reply({ embeds: [embed] });
	},
};