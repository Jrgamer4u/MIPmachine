const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/fat-pin.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fat-pin')
		.setDescription('from bfdfi real'),
	async execute(interaction) {
		return interaction.reply({ content: "fat pin", files: [file] });
	},
};