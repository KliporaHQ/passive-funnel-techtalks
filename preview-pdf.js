const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const pdfPath = 'E:\\Downloads\\Freelance-to-Passive-Blueprint-PREMIUM-Edition.pdf';
const outputDir = 'C:\\Users\\roger\\passive-funnel\\pdf-preview';

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

async function screenshotPDF() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport to A4 proportions
  await page.setViewportSize({ width: 1200, height: 1697 });
  
  // Load PDF using Google Docs viewer
  const pdfUrl = `https://docs.google.com/viewer?url=${encodeURIComponent('file:///' + pdfPath.replace(/\\/g, '/'))}&embedded=true`;
  
  try {
    await page.goto(pdfUrl, { timeout: 30000 });
    await page.waitForTimeout(3000);
    
    // Take screenshot
    await page.screenshot({ 
      path: path.join(outputDir, 'pdf-page-1.png'),
      fullPage: false
    });
    
    console.log('Screenshot saved to:', path.join(outputDir, 'pdf-page-1.png'));
  } catch (e) {
    console.error('Error:', e.message);
  }
  
  await browser.close();
}

screenshotPDF();
