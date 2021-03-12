const { chromium } = require(‘playwright’);

const WHATSAPP_WEB_URL = “https://web.whatsapp.com/”

const sleep = (milliseconds) => {
return new Promise(resolve => setTimeout(resolve, milliseconds))
}
(async () => {
const browser = await chromium.launch({ headless: false })
const context = await browser.newContext()
const page = await context.newPage();

await page.goto(WHATSAPP_WEB_URL);

// inspect the user interface elements to manipulate for locating the contact, typing and sending tyhe message
// find the CSS selectors for the relevant elements

await sleep(50000000) // 1000* 50 seconds
//await browser.close()
})()