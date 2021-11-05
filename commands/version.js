const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('version')
		.setDescription('shows version'),
	async execute(interaction) {
		return interaction.reply('MipMachine EX 1.1.0 | Base: OBR 1.4.0');
	},
};
