const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/borger.jpg');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('borger')
		.setDescription('from mother 3'),
	async execute(interaction) {
		return interaction.reply({ content: "ib ned borger", files: [file] });
	},
};