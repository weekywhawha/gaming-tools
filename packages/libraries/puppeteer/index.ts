import { Browser, launch } from 'puppeteer'

let browser: Browser

export async function getBrowser() {
  if (typeof browser !== 'undefined') {
    return browser
  }
  browser = await launch({
    headless: true,
    executablePath: process.env.CHROME_BIN,
    args: ['--no-sandbox', '--headless', '--disable-gpu', '--disable-dev-shm-usage'],
  })
  return browser
}

export async function newPage() {

    const b = await getBrowser()

    return b.newPage()
  }
