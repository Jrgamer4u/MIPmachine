const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/old-barbot-asset.png');
const file2 = new AttachmentBuilder('files/new-barbot-asset.png');
const file3 = new AttachmentBuilder('files/new-barbot-asset2.png');
const file4 = new AttachmentBuilder('files/barbot-levers.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('barbot-assets')
		.setDescription('barbot’s ass'),
	async execute(interaction) {
		await interaction.reply({ content: 'Old Asset', files: [file] });
		await interaction.followUp({ content: 'Asset (Without Levers)', files: [file2] });
		await interaction.followUp({ content: 'Asset (With Levers)', files: [file3] });
		await interaction.followUp({ content: 'Levers', files: [file4] });
	},
};
