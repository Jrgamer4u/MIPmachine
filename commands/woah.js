const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('woah')
		.setDescription('says woah'),
	async execute(interaction) {
		return interaction.reply('woah');
	},
};
