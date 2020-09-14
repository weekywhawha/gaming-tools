import puppeteer from 'puppeteer'
import { MessageEmbed } from 'discord.js'

export const tarkovFactory = async function main(message) {
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const [page] = await browser.pages();

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

    const locationInfo = new MessageEmbed()
      .setTitle('Factory')
      .setImage('https://tarkov-tools.com/maps/factory.jpg')
      .addField('Raid Duration', `${raidDuration}`, true)
      .addField('Players', `${playerNumbers}`, true)
      .addField('Enemies', `${enemies}`, true)
      .setFooter(
        'source: escapefromtarkov.gamepedia.com',
        'https://mercury-media.cursecdn.com/avatars/0/676/635077524106421849.png'
      )

    await browser.close()
    return message.channel.send(locationInfo)
  } catch (err) {
    console.error(err)
  }
}
