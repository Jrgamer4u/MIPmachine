const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cringe')
		.setDescription('says Cringe, credit to Ibby'),
	async execute(interaction) {
		return interaction.reply('Cringe');
	},
};
