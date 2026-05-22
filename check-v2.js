const fs = require('fs');
const pdfPath = '/home/domainbuddy7/passive-funnel/ebook/freelance-to-passive-blueprint-FINAL-v2.pdf';
const buffer = fs.readFileSync(pdfPath);
const content = buffer.toString('latin1');
const pageCount = (content.match(/Type \/Page[^s]/g) || []).length;
console.log('Pages:', pageCount);
console.log('Size:', (buffer.length / 1024).toFixed(0), 'KB');
