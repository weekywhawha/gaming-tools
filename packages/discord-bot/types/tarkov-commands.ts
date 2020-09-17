import { Message } from "discord.js";

export interface TarkovCommand {
    main(message: Message, args: string | string[]): any | Promise<any>
}
