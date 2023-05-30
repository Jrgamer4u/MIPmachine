const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/card.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rrc')
		.setDescription('card'),
	async execute(interaction) {
		return interaction.reply({ content: 'Get Reversed <:lol:857776541727588362>', files: [file] });
	},
};
