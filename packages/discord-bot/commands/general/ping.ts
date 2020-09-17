export default {
  name: 'ping',
  cooldown: 5,
  description: 'Ping!',
  async execute(message) {
    message.channel.send('Pong.')
  },
}
