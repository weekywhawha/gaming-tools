import { Message } from "discord.js";

export interface Command {
    name: string
    description: string
    usage: string
    alias?: string
    cooldown?: number
    execute(message: Message, args: string): any | Promise<any>
}