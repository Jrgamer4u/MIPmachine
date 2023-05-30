const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('10100')
		.setDescription('hacking'),
	async execute(interaction) {
		return interaction.reply('<:shotscared:858854376592506910> what the fuck hacker?!?!?!?!?!!');
	},
};
