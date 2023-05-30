const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kiss')
		.setDescription('who you kissin hmmm')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('whom')
				.setRequired(true)),
	async execute(interaction) {
		return interaction.reply(`<@${interaction.user.id}> kissed ${interaction.options.getString('input')}! Wow, they sure are a cute couple…`);
	},
};
