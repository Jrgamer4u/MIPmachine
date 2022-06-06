const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('talk')
		.setDescription('talk as MipMachine EX')
	  .addStringOption(option =>
		  option.setName('input')
			  .setDescription('input what MipMachine EX says')
			  .setRequired(true)),
	async execute(interaction) {
		return interaction.reply(interaction.options.getString('input'));
	},
};
