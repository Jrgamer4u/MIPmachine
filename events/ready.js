module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		client.user.setActivity('MM EX | Slash Commands!');
	},
};
