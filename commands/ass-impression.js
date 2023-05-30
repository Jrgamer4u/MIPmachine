const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ass-impression')
		.setDescription('real'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setColor('#33ccff')
			.setTitle('Molecule be like:')
			.setDescription('Anyone at all: *makes sound*\nMolecule: IM NOT AN ASS!!!!!!!!11!1 real');
		return interaction.reply({ embeds: [embed] });
	},
};
