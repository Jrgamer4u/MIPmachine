const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('get-here')
		.setDescription('make MIPmachine get over here'),
	async execute(interaction) {
		return interaction.reply(`sup <@${interaction.user.id}> what you need`);
	},
};
