const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('is-ayan-bad')
		.setDescription('says funny ayan image, credit to Ibby'),
	async execute(interaction) {
		return interaction.reply('https://cdn.discordapp.com/attachments/870522417079017474/983089612043984916/unknown.png');
	},
};
