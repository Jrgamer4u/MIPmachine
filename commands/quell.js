const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("quell")
		.setDescription(
			"quells the person pointing out has used the aforementioned command"
		),
	async execute(interaction) {
		return interaction.reply(
			"apology with the purpose of bad english\na place question for were the second person a circumstance question of " +
			interaction.user.username +
			' was quelled\nthe first person was indicating a point occupied in house eating doritos a circumstance question of the aforementioned phone rang\n"' +
			interaction.user.username +
			' has quelld"\n"negation"'
		);
	},
};
