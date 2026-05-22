const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const outputDir = '/home/domainbuddy7/passive-funnel/ebook';
const pdfPath = path.join(outputDir, 'freelance-to-passive-blueprint-PREMIUM.pdf');

async function generatePDF() {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 1700 });
  
  const htmlPath = path.join(outputDir, 'premium-ebook.html');
  console.log('Loading HTML from:', htmlPath);
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle', timeout: 30000 });
  
  console.log('Generating PDF...');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    displayHeaderFooter: false
  });
  
  await browser.close();
  
  const stats = fs.statSync(pdfPath);
  console.log('PDF generated:', pdfPath);
  console.log('Size:', (stats.size / 1024).toFixed(0), 'KB');
  
  // Copy to Windows
  const winPath = 'C:\\Users\\roger\\passive-funnel\\freelance-to-passive-blueprint-PREMIUM.pdf';
  fs.copyFileSync(pdfPath, winPath);
  console.log('Copied to:', winPath);
}

generatePDF().catch(e => console.error('Error:', e));
