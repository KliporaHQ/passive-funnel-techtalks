const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const pdfPath = '/home/domainbuddy7/passive-funnel/ebook/premium-reference.pdf';
const outputDir = '/home/domainbuddy7/passive-funnel/ebook/preview';

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

async function renderPDF() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1200, height: 1700 });
  
  // Use Mozilla's PDF.js to render the PDF
  const pdfJsUrl = 'https://mozilla.github.io/pdf.js/web/viewer.html';
  
  // First, let's try to serve the PDF locally and render it
  // For now, let's use a different approach - convert PDF to images using pdf2image alternative
  
  // Actually, let's just use Playwright to open the PDF directly
  const fileUrl = 'file://' + pdfPath;
  
  try {
    await page.goto(fileUrl, { waitUntil: 'networkidle', timeout: 10000 });
    await page.waitForTimeout(2000);
    
    await page.screenshot({ 
      path: path.join(outputDir, 'pdf-page-1.png'),
      fullPage: false
    });
    console.log('Screenshot saved');
  } catch (e) {
    console.log('Direct PDF open failed:', e.message);
    
    // Try using Google Docs viewer
    try {
      const encodedPath = encodeURIComponent('file://' + pdfPath);
      await page.goto(`https://docs.google.com/viewer?url=${encodedPath}&embedded=true`, { 
        waitUntil: 'networkidle', 
        timeout: 15000 
      });
      await page.waitForTimeout(3000);
      
      await page.screenshot({ 
        path: path.join(outputDir, 'pdf-page-1.png'),
        fullPage: false
      });
      console.log('Screenshot via Google Docs saved');
    } catch (e2) {
      console.log('Google Docs viewer also failed:', e2.message);
    }
  }
  
  await browser.close();
}

renderPDF().catch(console.error);
