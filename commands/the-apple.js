const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const file = new AttachmentBuilder('files/broke.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('the-apple')
		.setDescription('流れてく　時の中ででも 気だるさが　ほらグルグル廻って 私から　離れる心も 見えないわ　そう知らない？'),
	async execute(interaction) {
		return interaction.reply({ content: "***__~~T H E  A P P L E~~__***", files: [file] });
	},
};