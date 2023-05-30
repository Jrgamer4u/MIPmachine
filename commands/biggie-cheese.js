const { SlashCommandBuilder, ActionRowBuilder, AttachmentBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/biggie-cheese.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('biggie-cheese')
		.setDescription('Tells you  textbox'),
	async execute(interaction) {
		const select = new StringSelectMenuBuilder()
			.setCustomId('select')
			.setPlaceholder('Nothing selected')
			.addOptions(
				new StringSelectMenuOptionBuilder()
					.setLabel('Yes')
					.setDescription('yey moment')
					.setValue('He gives you the phone case. you walk away with your gift.'),
				new StringSelectMenuOptionBuilder()
					.setLabel('No')
					.setDescription('huh wtf')
					.setValue('Biggie Cheese takes out his gun, as you knew you fucked up. He shoots you and you die.')
			);
		const row = new ActionRowBuilder()
			.addComponents(select);
		await interaction.reply({ content: "Biggie Cheese approaches you. He wants to give you his new brand of the Biggie Cheese Phone Case for FREE!\nDo you want them?", files: [file], components: [row] });
	},
};