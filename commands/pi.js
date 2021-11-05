const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pi')
		.setDescription('says 40 digits of pi'),
	async execute(interaction) {
		return interaction.reply('3.1415926535897932384626433832795028841971');
	},
};
