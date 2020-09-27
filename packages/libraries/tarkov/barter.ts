import { TarkovCommand } from '@gaming-tools/types/tarkov-commands'
import { newPage } from '../puppeteer'

export const barter: TarkovCommand = {
  async main() {
    try {
      const page = await newPage()

      await page.goto('https://tarkov-market.com/tag/barter')
      await page.waitForSelector('th[class="price pointer"]')
      await page.click('th[class="price pointer"]')
      await page.waitForSelector('div[class="nuxt-progress"]', {
        visible: false,
      })

      const items = await page.evaluate(() =>
        Array.from(document.querySelectorAll('img[alt]'), (a) => a.getAttribute('alt'))
      )
      const avgPrice = await page.evaluate(() =>
        Array.prototype.slice.call(document.querySelectorAll('span[class="price-main"]')).map((a) => a.innerText)
      )
      await page.close()

      const barterData = {
        category: 'market',
        title: '**Barter Prices 🤝**',
        items,
        avgPrice,
      }

      return barterData
    } catch (error) {
      Promise.reject('an error occured while retrieving barter data')
    }
  },
}
