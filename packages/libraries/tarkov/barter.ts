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
        items,
        avgPrice,
      }

      return barterData
    } catch (error) {
      Promise.reject('an error occured while retrieving barter data')
    }
  },
}

// export const barter: TarkovCommand = {
//   async main(message) {
//     try {
//       const browser = await puppeteer.launch({
//         headless: true,
//         executablePath: process.env.CHROME_BIN,
//         args: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-dev-shm-usage'],
//       })
//       const [page] = await browser.pages()

//       await page.goto('https://tarkov-market.com/tag/barter')
//       await page.waitForSelector('th[class="price pointer"]')
//       await page.click('th[class="price pointer"]')
//       await page.waitForSelector('div[class="nuxt-progress"]', {
//         visible: false,
//       })

//       const items = await page.evaluate(() =>
//         Array.from(document.querySelectorAll('img[alt]'), (a) => a.getAttribute('alt'))
//       )
//       const avgPrice = await page.evaluate(() =>
//         Array.prototype.slice.call(document.querySelectorAll('span[class="price-main"]')).map((a) => a.innerText)
//       )

//       const lootInfo = new MessageEmbed()
//         .setTitle('**Barter Prices 🤝**')
//         .addField(
//           '\u200b\nItems\n\u200b',
//           items.map((str) => (str as string).substring(0, 40)),
//           true
//         )
//         .addField('Avg price (24h) \nPer slot\n\u200b', avgPrice, true)
//         .addField('\u200b', '\u200b', false)
//         .setFooter('source: tarkov-market.com ', 'https://tarkov-market.com/favicon-32x32.png')

//       await browser.close()
//       return message.channel.send(lootInfo)
//     } catch (err) {
//       console.error(err)
//     }
//   },
// }
