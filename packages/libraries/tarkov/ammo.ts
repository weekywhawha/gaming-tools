import { TarkovCommand } from '@gaming-tools/types/tarkov-commands'
import { newPage } from '../puppeteer'

let latestUpdate: string
let screenshot: Buffer

export const ammo: TarkovCommand = {
  async main() {
    try {
      const page = await newPage()

      await page.goto('https://tarkov-tools.com/ammo/')
      await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
      })

      await page.waitForSelector('#root > div > div.display-wrapper > div > div.VictoryContainer > svg')
      const element = await page.$('#root > div > div.display-wrapper > div > div.VictoryContainer > svg')

      await page.evaluate(() => {
        const removeWrapper = document.querySelector('#root > div > div.id-wrapper.id-wrapper-left')
        if (!removeWrapper?.parentNode) {
          return Promise.reject('something went wrong while retrieving the ammo chart')
        }
        removeWrapper.parentNode.removeChild(removeWrapper)
      })

      const newDate = await page.evaluate(() =>
        Array.prototype.slice
          .call(document.querySelectorAll('div[class="updated-label"]'))
          .map((a) => a.innerText)
          .toString()
      )

      if (latestUpdate !== newDate || !screenshot) {
        latestUpdate = newDate
        if (!element) {
          return Promise.reject('something went wrong while retrieving the ammo chart')
        }
        screenshot = await element.screenshot({ encoding: 'binary' })
      }

      await page.close()

      const ammoData = {
        category: 'ammo',
        newDate,
        image: screenshot,
      }

      return ammoData
    } catch (error) {
      console.error(error)
      Promise.reject('an error occured while retrieving ammo data')
    }
  },
}
