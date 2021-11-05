const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('milkshake')
		.setDescription('test command'),
	async execute(interaction) {
		await interaction.reply('MIP');
    await wait(1);
    await interaction.editReply('Shmoo');
	},
};
