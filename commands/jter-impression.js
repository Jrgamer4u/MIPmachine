const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('jter-impression')
		.setDescription('real'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setColor('#33ccff')
			.setTitle('Jter be like:')
			.setDescription('A girl…? Whoa mama! Hummina hummina hummina bazooooooooing! eyes pop out AROOOOOOOOGA! jaw drops tongue rolls out WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF WOOF tongue bursts out of the outh uncontrollably leaking face and everything in reach WURBLWUBRLBWURblrwurblwurlbrwubrlwburlwbruwrlblwublr tiny cupid shoots an arrow through heart Ahhhhhhhhhhh me lady… heart in the shape of a heart starts beating so hard you can see it through shirt ba-bum ba-bum ba-bum ba-bum ba-bum milk truck crashes into a bakery store in the background spiling white liquid and dough on the streets BABY WANTS TO FUCK inhales from the gas tank honka honka honka honka masturabtes furiously ohhhh my gooooodd~');
		return interaction.reply({ embeds: [embed] });
	},
};
