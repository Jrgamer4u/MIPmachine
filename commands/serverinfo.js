const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('serverinfo')
		.setDescription('help get info'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setColor('#33ccff')
			.setTitle(`${interaction.guild.name}’s Info:`)
			.setDescription(`Current Member Count: ${interaction.guild.memberCount}\n\nCurrent Boost Level: ${interaction.guild.premiumTier}\n\nServer ID: ${interaction.guild.id}`);
		await interaction.reply({ embeds: [embed], ephemeral: true });
	},
};