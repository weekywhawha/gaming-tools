import { TarkovCommand } from '@gaming-tools/types/tarkov-commands'
import { newPage } from '../puppeteer'

export const search: TarkovCommand = {
  async main(search) {
    try {
      const searchInput = search

      if (!searchInput || searchInput.length < 3) {
        return Promise.reject(`invalid search parameter`)
      }

      const page = await newPage()

      await page.goto('https://tarkov-market.com/')

      const input = await page.waitForSelector('div[class="search"]')

      await page.click('div[class="search"]')

      await input.type(searchInput)

      await page.waitForSelector('th[class="price pointer"]')
      await page.click('th[class="price pointer"]')
      await page.waitForSelector('div[class="nuxt-progress"]')
      await page.waitForSelector('div[class="nuxt-progress"]', {
        visible: false,
      })

      const items = await page.evaluate(() =>
        Array.from(document.querySelectorAll('img[alt]'), (a) => a.getAttribute('alt'))
      )
      const avgPrice = await page.evaluate(() =>
        Array.prototype.slice.call(document.querySelectorAll('span[class="price-main"]')).map((a) => a.innerText)
      )

      if (!items.length) {
        await page.close()
        return Promise.reject('your search did not match any item.')
      }
      await page.close()

      const searchData = {
        category: 'market',
        title: `**Search Results for** *"${searchInput}"* 📦`,
        items,
        avgPrice,
      }

      return searchData
    } catch (error) {
      Promise.reject('an error occured while retrieving your search data')
    }
  },
}
