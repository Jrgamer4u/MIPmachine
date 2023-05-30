const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/biggie-cheese.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('biggie-cheese')
		.setDescription('Tells you  textbox'),
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
							value: 'He gives you the phone case. you walk away with your gift.',
						},
						{
							label: 'No',
							description: 'huh wtf',
							value: 'Biggie Cheese takes out his gun, as you knew you fucked up. He shoots you and you die.',
						},
					]),
			);
		await interaction.reply({ content: "Biggie Cheese approaches you. He wants to give you his new brand of the Biggie Cheese Phone Case for FREE!\nDo you want them? **Choose 'YES' to take, or 'NO' to decline.**", files: [file], components: [row] });
	},
};