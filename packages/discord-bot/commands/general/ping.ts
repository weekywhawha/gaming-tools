import { Command } from 'discord-bot/types/command'
import { Message } from 'discord.js'

export const ping: Command = {
  name: 'ping',
  description: 'Ping!',
  usage: 'returns Pong',
  cooldown: 5,
  async execute(message: Message) {
    message.channel.send('Pong!')
  },
}
