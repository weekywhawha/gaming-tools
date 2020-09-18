import { Message } from "discord.js";

export interface TarkovCommand {
    main(message: Message, args: string | string[]): any | Promise<any>
}

export interface TarkovCommands {
    [index: string]: TarkovCommand
}
