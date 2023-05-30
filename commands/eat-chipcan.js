const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/MNpGOg2.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('eat-chipcan')
		.setDescription('’s ass'),
	async execute(interaction) {
		return interaction.reply({ files: [file] });
	},
};