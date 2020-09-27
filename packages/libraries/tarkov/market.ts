import { TarkovCommand } from '@gaming-tools/types/tarkov-commands'
import { newPage } from '../puppeteer'

export const market: TarkovCommand = {
  async main(command) {
    try {
      const page = await newPage()

      await page.goto('https://tarkov-market.com/')
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

      const marketData = {
        category: 'market',
        title: '**Flea Market Prices 📈**',
        items,
        avgPrice,
      }

      return marketData
    } catch (error) {
      Promise.reject('an error occured while retrieving market data')
    }
  },
}
