const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/MNpGOg2.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('eat-chipcan')
		.setDescription('’s ass'),
	async execute(interaction) {
		return interaction.reply({ content: "<:love:858854429143072798><:love:858854429143072798><:love:858854429143072798>", files: [file] });
	},
};