const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kill-count')
		.setDescription('says noob, credit to Ibby'),
	async execute(interaction) {
		return interaction.reply('noob');
	},
};
