module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		client.channels.cache.get(process.env.connected).send('Connected');
		client.user.setActivity('MipMachine EX | Slash Commands!');
	},
};