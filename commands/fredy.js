const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/fredy.mp4');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fredy')
		.setDescription('real'),
	async execute(interaction) {
		return interaction.reply({ content: "fredy", files: [file] });
	},
};