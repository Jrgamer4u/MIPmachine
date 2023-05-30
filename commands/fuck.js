const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fuck')
		.setDescription('who the fuck are you and what did you do with the original person')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('whom')
				.setRequired(true)),
	async execute(interaction) {
		return interaction.reply(`<@${interaction.user.id}> is fucking ${interaction.options.getString('input')}! i should probably leave…`);
	},
};
