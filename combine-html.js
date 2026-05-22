const fs = require('fs');
const path = require('path');

const head = fs.readFileSync('/home/domainbuddy7/passive-funnel/ebook/premium-head.html', 'utf8');
const body = fs.readFileSync('/home/domainbuddy7/passive-funnel/ebook/premium-body.html', 'utf8');

const fullHtml = head + body;
const outputPath = '/home/domainbuddy7/passive-funnel/ebook/premium-ebook.html';

fs.writeFileSync(outputPath, fullHtml);
console.log('Combined HTML created:', (fullHtml.length / 1024).toFixed(0), 'KB');
