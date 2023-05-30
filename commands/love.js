const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('love')
		.setDescription('potato'),
	async execute(interaction) {
		return interaction.reply("chips can I love you <3\n<:love:858854429143072798><:love:858854429143072798><:love:858854429143072798>");
	},
};
