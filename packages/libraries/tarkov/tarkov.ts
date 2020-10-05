import { tarkovCommands } from './index'

export const runTarkovCommand = async function (command: string, search?: string) {
  if (!command) {
    return Promise.reject('please specify an argument.')
  }

  if (!tarkovCommands.hasOwnProperty(command)) {
    return Promise.reject('command not found.')
  }

  return tarkovCommands[command].main(search)
}
