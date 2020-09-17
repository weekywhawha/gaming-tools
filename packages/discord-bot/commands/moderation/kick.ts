import { Command } from 'discord-bot/types/command'

export const kick: Command = {
  name: 'kick',
  description: 'Tag a member of the channel and kick them.',
  guildOnly: 'true',
  usage: '[member-tag] [reason(optional)]',
  async execute(message, args: string[]) {
    if (!message.member!.roles.cache.some((r) => r.name === 'Admin')) {
      return message.reply('you do not have permission to use this command.')
    }

    const member = message.mentions.members!.first() || message.guild!.members.cache.get(args[0]) // TODO ask if I can add those '!' in this case

    if (!member) {
      return message.reply('please mention a valid member of this server.')
    }
    if (!member.kickable) {
      return message.reply('I cannot kick this user! Do they have a higher role? Do I have kick permissions?')
    }

    let reason = args.slice(1).join(' ')

    if (!reason) {
      reason = 'No reason provided'
    }

    await member
      .kick(reason)
      .catch((error: string) => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`))
    message.channel.send(`<@${member.user.id}> has been kicked by <@${message.author.id}>. **Reason:** ${reason}`)
  },
}
