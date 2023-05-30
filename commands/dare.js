const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dare')
		.setDescription('how daring')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('your dare')
				.setRequired(true)),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setColor('#33ccff')
			.setTitle(`The person 3 messages above has been dared to:`)
			.setDescription(`${interaction.options.getString('input')} the person below.`);
		return interaction.reply({ embeds: [embed] });
	},
};
