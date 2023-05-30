const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('the-funny')
		.setDescription('yes this is actually the 69th command'),
	async execute(interaction) {
		const row = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Yes',
							description: 'yey moment',
							value: 'AEEEEEEEEEEEEEEEEEEEE',
						},
						{
							label: 'No',
							description: 'huh wtf',
							value: '…meh **celebrates anyways**',
						},
					]),
			);
		await interaction.reply('HAHA THIS IS COMMAND 69');
		await interaction.followUp({ content: "should we celebrate this wonderful command?", components: [row] });
	},
};