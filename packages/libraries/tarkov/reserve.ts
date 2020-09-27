import { TarkovCommand } from '@gaming-tools/types/tarkov-commands'
import { newPage } from '../puppeteer'

export const reserve: TarkovCommand = {
  async main() {
    try {
      const page = await newPage()

      await page.goto('https://escapefromtarkov.gamepedia.com/Reserve')

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
              '#va-infobox0-content > td > table:nth-child(5) > tbody > tr:nth-child(4) > td.va-infobox-content'
            )
          )
          .map((a) => a.innerText)
          .toString()
      )
      const enemies = await page.evaluate(() =>
        Array.prototype.slice
          .call(
            document.querySelectorAll(
              '#va-infobox0-content > td > table:nth-child(5) > tbody > tr:nth-child(6) > td.va-infobox-content'
            )
          )
          .map((a) => a.innerText)
          .toString()
      )
      await page.close()

      const reserveData = {
        map: 'Reserve',
        url: 'https://tarkov-tools.com/maps/reserve.jpg',
        raidDuration,
        playerNumbers,
        enemies,
      }

      return reserveData
    } catch (error) {
      Promise.reject('an error occured while retrieving the reserve data')
    }
  },
}

// export const reserve: TarkovCommand = {
//   async main(message) {
//     try {
//       const browser = await puppeteer.launch({
//         headless: true,
//         executablePath: process.env.CHROME_BIN,
//         args: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-dev-shm-usage'],
//       })
//       const [page] = await browser.pages()

//       await page.goto('https://escapefromtarkov.gamepedia.com/Reserve')

//       const raidDuration = await page.evaluate(() =>
//         Array.prototype.slice
//           .call(
//             document.querySelectorAll(
//               '#va-infobox0-content > td > table:nth-child(3) > tbody > tr:nth-child(6) > td.va-infobox-content'
//             )
//           )
//           .map((a) => a.innerText)
//           .toString()
//       )

//       const playerNumbers = await page.evaluate(() =>
//         Array.prototype.slice
//           .call(
//             document.querySelectorAll(
//               '#va-infobox0-content > td > table:nth-child(5) > tbody > tr:nth-child(4) > td.va-infobox-content'
//             )
//           )
//           .map((a) => a.innerText)
//           .toString()
//       )
//       const enemies = await page.evaluate(() =>
//         Array.prototype.slice
//           .call(
//             document.querySelectorAll(
//               '#va-infobox0-content > td > table:nth-child(5) > tbody > tr:nth-child(6) > td.va-infobox-content'
//             )
//           )
//           .map((a) => a.innerText)
//           .toString()
//       )

//       const locationInfo = new MessageEmbed()
//         .setTitle('Reserve')
//         .setImage('https://tarkov-tools.com/maps/reserve.jpg')
//         .addField('Raid Duration', `${raidDuration}`, true)
//         .addField('Players', `${playerNumbers}`, true)
//         .addField('Enemies', `${enemies}`, true)
//         .setFooter(
//           'source: escapefromtarkov.gamepedia.com',
//           'https://mercury-media.cursecdn.com/avatars/0/676/635077524106421849.png'
//         )

//       await browser.close()
//       return message.channel.send(locationInfo)
//     } catch (err) {
//       console.error(err)
//     }
//   },
// }
