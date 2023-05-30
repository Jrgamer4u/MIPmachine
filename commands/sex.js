const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sex')
		.setDescription('nice'),
	async execute(interaction) {
		const user = interaction.options.getUser('746858751801163887');
		return interaction.reply(`**fucks <@${user}> cutely** <:love:858854429143072798>`);
	},
};
