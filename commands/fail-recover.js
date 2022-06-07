const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fail-recover')
		.setDescription('fail to recovers a person')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('Enter the person who fails to be recovered')
				.setRequired(true)),
	async execute(interaction) {
		const embed = new MessageEmbed()
			.setColor('#ec4145')
			.setTitle('Recovering Failed:')
			.setDescription(interaction.options.getString('input'));
		return interaction.reply({ embeds: [embed] });
	},
};
