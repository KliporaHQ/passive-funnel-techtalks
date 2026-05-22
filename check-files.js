const fs = require('fs');

const htmlPath = '/mnt/e/Downloads/freelance_blueprint_fixed_breaks.html';
const html = fs.readFileSync(htmlPath, 'utf8');
console.log('HTML file size:', (html.length / 1024).toFixed(0), 'KB');
console.log('HTML lines:', html.split('\n').length);
console.log('Has page breaks:', html.includes('page-break-after'));
console.log('Has cover:', html.includes('class="cover"'));
console.log('Has dark theme:', html.includes('#030712'));
console.log('Has gradients:', html.includes('linear-gradient'));
console.log('Has @page margins:', html.includes('@page'));

const pdf1 = 'E:\\Downloads\\freelance-to-passive-blueprint-v3 (1).pdf';
const pdf2 = 'E:\\Downloads\\freelance-to-passive-blueprint-v3.pdf';

try { const s = fs.statSync(pdf1); console.log('\nPDF v3 (1):', (s.size/1024).toFixed(0), 'KB'); } catch(e) { console.log('PDF v3 (1) not found'); }
try { const s = fs.statSync(pdf2); console.log('PDF v3:', (s.size/1024).toFixed(0), 'KB'); } catch(e) { console.log('PDF v3 not found'); }

const ourPdf = '/home/domainbuddy7/passive-funnel/ebook/freelance-to-passive-blueprint-PREMIUM.pdf';
try { const s = fs.statSync(ourPdf); console.log('Our PDF:', (s.size/1024).toFixed(0), 'KB'); } catch(e) { console.log('Our PDF not found'); }
