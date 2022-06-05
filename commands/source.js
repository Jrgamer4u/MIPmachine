const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('source')
		.setDescription('sends source of MipMachine EX'),
	async execute(interaction) {
		return interaction.reply('https://github.com/Jrgamer4u/OBR');
	},
};
