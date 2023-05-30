const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('inv')
		.setDescription('invites more bots'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setColor('#33ccff')
			.setTitle('<:yah:857776457987915786> Here!')
			.setDescription('Invite is above the About Me under the bot Profile.\n[To invite my other bot buddies, Click this link](https://bariron294.wixsite.com/addibbot)');
		return interaction.reply({ embeds: [embed] });
	},
};
