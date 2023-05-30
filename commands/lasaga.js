const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/lasaga.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lasaga')
		.setDescription('garfield'),
	async execute(interaction) {
		return interaction.reply({ content: '"Jon, please just give me the lasaga. You know what happens if you dont."', files: [file] });
	},
};