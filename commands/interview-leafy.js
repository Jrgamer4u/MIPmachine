const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/leafy.mp4');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('interview-leafy')
		.setDescription('interview with leafy!!'),
	async execute(interaction) {
		await interaction.reply({ content: 'guys look omg', files: [file] });
		if ((interaction.member || interaction.member.displayName) == 'Leafy') {
			await delay(2000);
			await interaction.followUp('…wait leafy why are you trying to interview yourself');
		}
	},
};