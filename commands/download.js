const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('download')
		.setDescription('shows funny image, credit to Ibby ig'),
	async execute(interaction) {
		return interaction.reply('https://media.discordapp.net/attachments/870522417079017474/983089550387716146/unknown.png');
	},
};
