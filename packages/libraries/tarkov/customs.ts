import { TarkovCommand } from '@gaming-tools/types/tarkov-commands'
import { newPage } from '../puppeteer'

export const customs: TarkovCommand = {
  async main() {
    try {
      const page = await newPage()

      await page.goto('https://escapefromtarkov.gamepedia.com/Customs')

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

      const customsData = {
        category: 'map',
        map: 'Customs',
        url: 'https://tarkov-tools.com/maps/customs.jpg',
        raidDuration,
        playerNumbers,
        enemies,
      }

      return customsData
    } catch (error) {
      Promise.reject('an error occured while retrieving the customs data')
    }
  },
}
