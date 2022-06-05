const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('balls')
		.setDescription('balls balls balls'),
	async execute(interaction) {
		return interaction.reply('https://cdn.discordapp.com/attachments/734105441860321351/983116953742884894/IMG_0357.png');
	},
};