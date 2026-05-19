
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('https://passive-funnel-techtalks-production-069c.up.railway.app', { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/home/domainbuddy7/passive-funnel/landing-page/screenshot.png', fullPage: false });
  await browser.close();
  console.log('Screenshot saved');
})();
