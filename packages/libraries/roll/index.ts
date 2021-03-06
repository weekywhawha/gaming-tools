import { DiceRoller } from 'rpg-dice-roller'
const dice = new DiceRoller()
const regex = RegExp(/^(\d[d]\d)\S*\S*\S*$/)

export const getRollDice = async function (command: string): Promise<any> {
  if (!regex.test(command)) {
    return Promise.reject('Please specify a dice type e.g., "1d6", "2d5+1d7", etc.')
  }

  try {
    dice.roll(command)

    const result = dice.log.shift()

    if (!result) {
      return Promise.reject('error while getting dice results')
    }

    return `rolled${result.toString().substring(result.toString().indexOf(':') + 1)}`
  } catch (err) {
    Promise.reject('wrong dice notation please use a valid notation.')
  }
}
