const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('give-poopies')
		.setDescription('give a shit')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('Who are you giving your poopies to?')
				.setRequired(true))
		.addNumberOption(option =>
			option.setName('amount')
				.setDescription('How many poopies?')
				.setRequired(true)),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setColor('#33ccff')
			.setTitle(`<:yah:857776457987915786> Poopies to ${interaction.options.getString('input')} Given:`)
			.setDescription(`${interaction.options.getString('amount')}`);
		return interaction.reply({ embeds: [embed] });
	},
};
