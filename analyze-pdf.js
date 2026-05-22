const fs = require('fs');
const pdfPath = '/home/domainbuddy7/passive-funnel/ebook/premium-reference.pdf';

const buffer = fs.readFileSync(pdfPath);
const content = buffer.toString('latin1');

// Find text streams
const textMatches = content.match(/\(([^)]{5,})\)/g) || [];
const texts = textMatches
  .map(t => t.slice(1, -1))
  .filter(t => t.length > 3 && /[a-zA-Z]/.test(t));

console.log('Sample text content from PDF (first 50):');
texts.forEach((t, i) => {
  if (i < 50) console.log(`  ${i + 1}. ${t.substring(0, 100)}`);
});

// Check for images
const imageCount = (content.match(/Type \/XObject/g) || []).length;
const jpegCount = (content.match(/DCTDecode/g) || []).length;
const pageCount = (content.match(/Type \/Page[^s]/g) || []).length;

console.log(`\nPDF Stats:`);
console.log(`  Pages: ${pageCount}`);
console.log(`  XObjects (images): ${imageCount}`);
console.log(`  JPEG images: ${jpegCount}`);
console.log(`  File size: ${(buffer.length / 1024 / 1024).toFixed(1)} MB`);

// Look for font info
const fonts = content.match(/BaseFont \/(\w+)/g) || [];
console.log(`\nFonts used:`);
fonts.forEach(f => console.log(`  ${f}`));

// Look for color info
const colors = content.match(/(\d+\.?\d*) (\d+\.?\d*) (\d+\.?\d*) (rg|RG|sc|SC)/g) || [];
console.log(`\nColor commands (first 20):`);
colors.slice(0, 20).forEach(c => console.log(`  ${c}`));
