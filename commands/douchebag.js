const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('images/douchebag.gif');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('douchebag')
		.setDescription('shows you’re a douchebag'),
	async execute(interaction) {
		return interaction.reply({ files: [file] });
	},
};
