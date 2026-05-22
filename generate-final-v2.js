const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const outputDir = '/home/domainbuddy7/passive-funnel/ebook';
const htmlPath = path.join(outputDir, 'freelance_blueprint_fixed_breaks.html');
const pdfPath = path.join(outputDir, 'freelance-to-passive-blueprint-FINAL-v2.pdf');

async function generatePDF() {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 1700 });
  
  console.log('Loading HTML...');
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000);
  
  // Get page count info
  const pageCount = await page.evaluate(() => {
    const pages = document.querySelectorAll('[style*="page-break"], .page, .cover, .part-title, .chapter-block');
    return pages.length;
  });
  console.log('Page break elements found:', pageCount);
  
  console.log('Generating PDF...');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    displayHeaderFooter: false,
    preferCSSPageSize: true
  });
  
  await browser.close();
  
  const stats = fs.statSync(pdfPath);
  console.log('PDF generated:', pdfPath);
  console.log('Size:', (stats.size / 1024).toFixed(0), 'KB');
  
  // Copy to Desktop
  fs.copyFileSync(pdfPath, 'C:\\Users\\roger\\Desktop\\freelance-to-passive-blueprint-FINAL-v2.pdf');
  console.log('Copied to Desktop');
}

generatePDF().catch(e => console.error('Error:', e));
