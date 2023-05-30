const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/undertale_text_box.gif');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('textbox')
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
							description: 'undertale',
							value: 'https://www.demirramon.com/generators/undertale_text_box_generator',
						},
						{
							label: 'No',
							description: 'k',
							value: 'alr then',
						},
						{
							label: 'Maybe',
							description: 'bruh',
							value: 'HMMMMMMMMMMMMMMMMMM?\n**Select `YES` OR `NO` FFS**',
						},
					]),
			);
		await interaction.reply({ content: 'wanna know how i did this', files: [file], components: [row] });
	},
};