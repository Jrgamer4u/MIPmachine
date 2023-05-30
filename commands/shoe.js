const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/shoe.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shoe')
		.setDescription('shoe'),
	async execute(interaction) {
		return interaction.reply({ content: 'heres your DAMN SHOEIE', files: [file] });
	},
};