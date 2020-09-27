//import { Message } from 'discord.js'

export interface TarkovCommand {
  main(search?: string): any | Promise<any>
}

export interface TarkovCommands {
  [index: string]: TarkovCommand
}
