import { DiceRoller } from 'rpg-dice-roller'
const dice = new DiceRoller()

// roll 2d5
// roll 2d5+3d6
// roll 2d5+10
// roll 2d5 / comment

export const rollDice = function (command: string, comment?: string): any | Promise<string> {
  // TODO test regex
  // if (!regex.test(command)) {
  //   return Promise.reject('Please specify a dice type e.g., "1d6", "2d5+1d7", etc.')
  // }

  try {
    dice.roll(command)

    const result = dice.log.shift()

    if (!result) {
      return Promise.reject('error while getting dice results')
    }

    if (comment) {
      return `rolled**${result.toString().substring(result.toString().indexOf(':') + 1)}** | *${comment}*`
    }

    return `rolled**${result.toString().substring(result.toString().indexOf(':') + 1)}**`
  } catch (err) {
    Promise.reject('wrong dice notation please use a valid notation.')
  }
}
