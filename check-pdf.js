const fs = require('fs');
const pdfPath = '/home/domainbuddy7/passive-funnel/ebook/freelance-to-passive-blueprint-PREMIUM.pdf';
const buffer = fs.readFileSync(pdfPath);
const content = buffer.toString('latin1');

const pageCount = (content.match(/Type \/Page[^s]/g) || []).length;
const imageCount = (content.match(/Type \/XObject/g) || []).length;
const jpegCount = (content.match(/DCTDecode/g) || []).length;

console.log('PDF Stats:');
console.log('  Pages:', pageCount);
console.log('  XObjects:', imageCount);
console.log('  JPEG images:', jpegCount);
console.log('  File size:', (buffer.length / 1024).toFixed(0), 'KB');

const fonts = content.match(/BaseFont \/(\w+)/g) || [];
console.log('  Fonts:', [...new Set(fonts)].join(', '));
