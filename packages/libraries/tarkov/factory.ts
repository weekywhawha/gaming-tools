import { TarkovCommand } from '@gaming-tools/types/tarkov-commands'
import { newPage } from '../puppeteer'

export const factory: TarkovCommand = {
  async main() {
    try {
      const page = await newPage()

      await page.goto('https://escapefromtarkov.gamepedia.com/Factory')

      const raidDuration = await page.evaluate(() =>
        Array.prototype.slice
          .call(
            document.querySelectorAll(
              '#va-infobox0-content > td > table:nth-child(3) > tbody > tr:nth-child(6) > td.va-infobox-content'
            )
          )
          .map((a) => a.innerText)
          .toString()
      )

      const playerNumbers = await page.evaluate(() =>
        Array.prototype.slice
          .call(
            document.querySelectorAll(
              '#va-infobox0-content > td > table:nth-child(7) > tbody > tr:nth-child(4) > td.va-infobox-content'
            )
          )
          .map((a) => a.innerText)
          .toString()
      )
      const enemies = await page.evaluate(() =>
        Array.prototype.slice
          .call(
            document.querySelectorAll(
              '#va-infobox0-content > td > table:nth-child(7) > tbody > tr:nth-child(6) > td.va-infobox-content'
            )
          )
          .map((a) => a.innerText)
          .toString()
      )
      await page.close()

      const factoryData = {
        category: 'map',
        map: 'Factory',
        url: 'https://tarkov-tools.com/maps/factory.jpg',
        raidDuration,
        playerNumbers,
        enemies,
      }

      return factoryData
    } catch (error) {
      Promise.reject('an error occured while retrieving the factory data')
    }
  },
}
