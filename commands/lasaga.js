const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lasaga')
		.setDescription('sends garfeild image, credit to Ibby'),
	async execute(interaction) {
		return interaction.reply('https://media.discordapp.net/attachments/839302540134318110/841064571678359582/7vfnrhz2b4y61.png?width=332&height=406');
	},
};
