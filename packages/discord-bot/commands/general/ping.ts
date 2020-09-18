import { Command } from '../../types/command'

export const ping: Command = {
  name: 'ping',
  description: 'Ping!',
  usage: 'returns Pong',
  cooldown: 5,
  async execute(message) {
    message.channel.send('Pong!')
  },
}
