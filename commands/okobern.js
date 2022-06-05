const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('okobern')
		.setDescription('does a okobern impression'),
	async execute(interaction) {
		return interaction.reply('m&o is white and said the n-word so i will leak m&o’s ip and address');
	},
};
