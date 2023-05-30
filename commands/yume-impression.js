const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('yume-impression')
		.setDescription('real'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setColor('#33ccff')
			.setTitle('Yume be like:')
			.setDescription('UWU OWO THATS OFFENSIVE GRRR BARK BARK I HATE JTER IRON BAR IS MEAN! IM GONNA KILL MYSELF I WILL KILL IRON BAR >:(');
		return interaction.reply({ embeds: [embed] });
	},
};
