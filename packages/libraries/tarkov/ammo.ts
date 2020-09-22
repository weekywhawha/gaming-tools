import puppeteer from 'puppeteer-core'
import { MessageEmbed } from 'discord.js'
import { TarkovCommand } from '@gaming-tools/types/tarkov-commands'
import { resolve } from 'path'

let latestUpdate: string

export const ammo: TarkovCommand = {
  async main(message) {
    try {
      const browser = await puppeteer.launch({
        headless: true,
        executablePath: process.env.CHROME_BIN,
        args: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-dev-shm-usage'],
      })
      const [page] = await browser.pages()

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
          return message.reply('something went wrong while retrieving the ammo chart')
        }
        removeWrapper.parentNode.removeChild(removeWrapper)
      })

      const newDate = await page.evaluate(() =>
        Array.prototype.slice
          .call(document.querySelectorAll('div[class="updated-label"]'))
          .map((a) => a.innerText)
          .toString()
      )

      if (latestUpdate !== newDate) {
        latestUpdate = newDate
        if (!element) {
          return message.reply('something went wrong while retrieving the ammo chart')
        }
        await element.screenshot({ path: resolve(__dirname, '..', '..', 'data/img/image.png') })
      }
      await browser.close()

      const ammoInfo = new MessageEmbed()
        .setDescription(`${newDate}`)
        .attachFiles([resolve(__dirname, '..', '..', 'data/img/image.png')])
        .setImage('attachment://image.png')
        .setFooter('source: tarkov-tools.com', 'https://tarkov-tools.com/favicon-32x32.png')

      await message.channel.send(ammoInfo)
    } catch (err) {
      console.error(err)
    }
  },
}