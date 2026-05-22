const fs = require('fs');
const path = require('path');

const htmlPath = '/home/domainbuddy7/passive-funnel/ebook/ebook.html';
const html = fs.readFileSync(htmlPath, 'utf8');

console.log('HTML size:', (html.length / 1024).toFixed(0), 'KB');

const pageCount = (html.match(/class="page /g) || []).length;
console.log('Page divs found:', pageCount);

const hasEnd = html.includes('</body>');
console.log('Has closing body tag:', hasEnd);

console.log('Last 500 chars:', html.slice(-500));
