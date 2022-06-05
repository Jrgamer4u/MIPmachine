const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('click')
		.setDescription('click'),
	async execute(interaction) {
		return interaction.reply('Click.');
	},
};
