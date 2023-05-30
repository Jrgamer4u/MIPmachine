const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('help get info'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setColor('#33ccff')
			.setTitle(`Your Info:`)
			.setDescription(`Your username: ${interaction.user.username}\nTag: ${interaction.user.tag}\nDiscriminator (Tag Alone): ${interaction.user.discriminator}\n\nYour ID: ${interaction.user.id}`);
		return interaction.reply({ embeds: [embed], ephemeral: true });
	},
};