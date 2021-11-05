const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('time')
		.setDescription('shows the time'),
	async execute(interaction) {
		return interaction.reply(String(([(new Date().getDay()), ' / ', (new Date().getDate()), ' / ', (new Date().getHours()), ' / ', (new Date().getMinutes()), ' / ', (new Date().getSeconds())].join(''))));
	},
};
