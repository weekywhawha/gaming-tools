import { Message } from "discord.js";

export interface Command {
    name: string
    description: string
    usage: string
    aliases?: string[]
    guildOnly?: string
    cooldown?: number
    execute(message: Message, args: string | string[]): any | Promise<any>
}