const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rauf')
		.setDescription('fuar'),
	async execute(interaction) {
		return interaction.reply("what a long link\nhttps://embed.rauf.workers.dev/?author=click%2520now%2520%253E%253A%28&title=barbot%2520shows%2520you%2520rauf%2520embed%2520generator&description=AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA&color=00b3ff&image=https%253A%252F%252Fimages-ext-1.discordapp.net%252Fexternal%252FVnLjJKULLNtuevtMOHLRrfNFDT2jUelbHuLJ2Nhbe-U%252F%25253Fsize%25253D512%252Fhttps%252Fcdn.discordapp.com%252Favatars%252F844310809932726352%252F4fc740583caa4b");
	},
};