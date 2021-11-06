const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fakelad')
		.setDescription('shows fakelad image'),
	async execute(interaction) {
		return interaction.reply('https://media.discordapp.net/attachments/904416417682690148/906332926369759282/26348780.jpg');
	},
};
