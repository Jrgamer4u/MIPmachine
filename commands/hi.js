const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hi')
		.setDescription('says nah'),
	async execute(interaction) {
		return interaction.reply('nah');
	},
};
