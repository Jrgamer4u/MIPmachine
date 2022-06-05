const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('sends invite to pietro\'s server'),
	async execute(interaction) {
		return interaction.reply('https://discord.gg/z7rHKTVB');
	},
};
