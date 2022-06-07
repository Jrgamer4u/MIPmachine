const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('milkshake')
		.setDescription('test command'),
	async execute(interaction) {
		await interaction.reply('MIP');
		await wait(4000);
		await interaction.editReply('Shmoo');
	},
};
