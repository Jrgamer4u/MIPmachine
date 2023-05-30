const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('coded-with')
		.setDescription('MIPmachine tells you what they were coded with'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setColor('#33ccff')
			.setTitle('With Discord.js, of course!')
			.setDescription('https://discord.js.org/#/')
		return interaction.reply({ embeds: [embed] });
	},
};
