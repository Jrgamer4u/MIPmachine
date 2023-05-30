const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('premhelp')
		.setDescription('help get premium'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setColor('#33ccff')
			.setTitle('<:PREMIUM:858854477053689856> How to get Premium:')
			.setDescription('[somewhere in the website ig](https://bariron294.wixsite.com/ironsite)');
		return interaction.reply({ embeds: [embed] });
	},
};
