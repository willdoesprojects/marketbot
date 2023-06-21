const puppeteer = require('puppeteer');

async function searchTarget(searchString) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.target.com/');
  await page.screenshot({ path: `./scrapingbee_homepage.jpg` })

  // Enter search string in the search bar
  await page.type('input[data-test="search-field"]', searchString);

  // Click the search button
  await page.click('button[data-test="search-button"]');

  // Wait for the search results page to load
  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  // Get the prices of all the search results
  const prices = await page.$$eval('.styles__PriceFontSize-gob5n2-0', elements => elements.map(e => parseFloat(e.innerText.replace('$', ''))));

  // Find the lowest price
  const lowestPrice = Math.min(...prices);

  console.log(`The lowest price for "${searchString}" is $${lowestPrice}`);

  await browser.close();
}

searchTarget('iPhone');
