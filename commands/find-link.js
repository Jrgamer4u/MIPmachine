const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('find-link')
		.setDescription('lets see if the link exists!')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('Type in anything and lets see if the link exists!')
				.setRequired(true)),
	async execute(interaction) {
		return interaction.reply(`Hmm. Try to click on the link if you have to.\nhttps://${interaction.options.getString('input')}.com`);
	},
};
