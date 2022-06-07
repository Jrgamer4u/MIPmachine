const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');
const file = new MessageAttachment('images/garfeild.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lasaga')
		.setDescription('sends garfeild image, credit to Ibby'),
	async execute(interaction) {
		return interaction.reply({ files: [file] });
	},
};
