const puppeteer = require('puppeteer');

async function searchWalmart(searchTerm) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = `https://www.walmart.com/search/?query=${encodeURIComponent(searchTerm)}`;

  await page.goto(url);
  await page.screenshot({ path: `./scrapingbee_homepage.jpg` })
  const products = await page.evaluate(() => {
    const results = [];
    const items = document.querySelectorAll('.search-result-gridview-items .search-result-gridview-item');

    items.forEach(item => {
      const name = item.querySelector('.product-title-link').innerText;
      const price = item.querySelector('.price-main').innerText;
      const image = item.querySelector('img.product-image-photo').src;
      results.push({ name, price, image });
    });

    return results;
  });

  await browser.close();
  return products;
}

searchWalmart('laptops').then(products => {
    products.forEach(product => {
      console.log(`${product.name}: ${product.price}`);
    });
  }).catch(error => {
    console.error(error);
  });