const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('channels')
		.setDescription('youtubes and discord'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setColor('#33ccff')
			.setTitle('Channels')
			.setDescription('[Ibby’s Channel](https://www.youtube.com/c/IronBarOfficial)\n[Jrg’s Channel](https://www.youtube.com/c/IronBarOfficial)\n[Discord Server](https://discord.gg/G5qfPnzwzN)');
		return interaction.reply({ embeds: [embed] });
	},
};
