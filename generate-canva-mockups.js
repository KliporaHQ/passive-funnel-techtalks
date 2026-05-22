const { createCanvas, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

const outputDir = '/home/domainbuddy7/passive-funnel/canva-templates/mockups';
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const COLORS = {
  brand: '#533afd',
  brandDark: '#4434d4',
  brandLight: '#665efd',
  navy: '#0d1b3e',
  navyDark: '#0a0f2d',
  slate: '#64748d',
  success: '#15be53',
  successDark: '#108c3d',
  ruby: '#ea2261',
  magenta: '#f96bee',
  border: '#e5edf5',
  surface: '#f6f9fc',
  white: '#ffffff',
  dark: '#0f172a',
  cream: '#fef3c7',
  gold: '#d97706',
};

function drawRoundedRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  let currentY = y;
  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && i > 0) {
      ctx.fillText(line.trim(), x, currentY);
      line = words[i] + ' ';
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, currentY);
  return currentY;
}

// ==================== TEMPLATE 1: Sales Page A (Clean Minimal) ====================
function createTemplate1() {
  const canvas = createCanvas(1920, 1080);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = COLORS.white;
  ctx.fillRect(0, 0, 1920, 1080);
  
  // Top accent line
  ctx.fillStyle = COLORS.brand;
  ctx.fillRect(0, 0, 1920, 6);
  
  // Hero section
  ctx.fillStyle = COLORS.navy;
  ctx.font = 'bold 56px Arial';
  ctx.fillText('Turn Your Fiverr Skills Into', 120, 180);
  ctx.fillStyle = COLORS.brand;
  ctx.fillText('5 Passive Income Streams', 120, 250);
  
  ctx.fillStyle = COLORS.slate;
  ctx.font = '24px Arial';
  wrapText(ctx, 'The complete 80+ page blueprint to escape the freelancing trap and build automated income that pays you while you sleep.', 120, 310, 800, 36);
  
  // CTA Button
  drawRoundedRect(ctx, 120, 420, 280, 60, 8);
  ctx.fillStyle = COLORS.brand;
  ctx.fill();
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 22px Arial';
  ctx.fillText('Get the Blueprint — $37', 150, 458);
  
  // Benefits
  const benefits = [
    { icon: '📚', title: '80+ Page Blueprint', desc: 'Complete A-to-Z guide covering all 5 income streams' },
    { icon: '🧠', title: 'Notion Templates', desc: 'Income tracker, content calendar, funnel dashboard' },
    { icon: '⚡', title: 'Automation Scripts', desc: '5 ready-to-use Python scripts for passive income' },
  ];
  
  benefits.forEach((b, i) => {
    const x = 120 + i * 350;
    ctx.fillStyle = COLORS.surface;
    drawRoundedRect(ctx, x, 540, 320, 200, 12);
    ctx.fill();
    
    ctx.font = '32px Arial';
    ctx.fillText(b.icon, x + 20, 590);
    
    ctx.fillStyle = COLORS.navy;
    ctx.font = 'bold 20px Arial';
    ctx.fillText(b.title, x + 20, 630);
    
    ctx.fillStyle = COLORS.slate;
    ctx.font = '16px Arial';
    wrapText(ctx, b.desc, x + 20, 660, 280, 24);
  });
  
  // Testimonials
  ctx.fillStyle = COLORS.navy;
  ctx.font = 'bold 36px Arial';
  ctx.fillText('What Buyers Are Saying', 120, 820);
  
  const testimonials = [
    '"Made $1,200 in the first month after launching my first digital product."',
    '"The Notion template alone is worth the price. Game changer."',
    '"Finally, a passive income guide that\'s actually actionable."',
  ];
  
  testimonials.forEach((t, i) => {
    const x = 120 + i * 350;
    ctx.fillStyle = COLORS.surface;
    drawRoundedRect(ctx, x, 860, 320, 120, 12);
    ctx.fill();
    
    ctx.fillStyle = '#f59e0b';
    ctx.font = '18px Arial';
    ctx.fillText('★★★★★', x + 20, 895);
    
    ctx.fillStyle = COLORS.slate;
    ctx.font = 'italic 15px Arial';
    wrapText(ctx, t, x + 20, 925, 280, 22);
  });
  
  // Save
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(outputDir, '01-sales-page-clean.png'), buffer);
  console.log('Template 1 created');
}

// ==================== TEMPLATE 2: Sales Page B (Bold High-Converting) ====================
function createTemplate2() {
  const canvas = createCanvas(1920, 1080);
  const ctx = canvas.getContext('2d');
  
  // Dark background
  ctx.fillStyle = COLORS.dark;
  ctx.fillRect(0, 0, 1920, 1080);
  
  // Gradient accent
  const grad = ctx.createLinearGradient(0, 0, 1920, 0);
  grad.addColorStop(0, 'rgba(83,58,253,0.15)');
  grad.addColorStop(1, 'rgba(21,190,83,0.15)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1920, 1080);
  
  // Headline
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 64px Arial';
  ctx.fillText('Stop Trading Hours for Dollars.', 120, 200);
  
  ctx.fillStyle = COLORS.success;
  ctx.font = 'bold 48px Arial';
  ctx.fillText('Build Passive Income That Pays You While You Sleep.', 120, 280);
  
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.font = '24px Arial';
  wrapText(ctx, 'The Freelance-to-Passive Blueprint gives you the exact system to transform your freelance skills into 5 automated income streams.', 120, 350, 800, 36);
  
  // CTA
  drawRoundedRect(ctx, 120, 460, 320, 65, 32);
  ctx.fillStyle = COLORS.success;
  ctx.fill();
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 24px Arial';
  ctx.fillText('Get Instant Access — $37', 140, 500);
  
  // Features grid
  const features = [
    { icon: '📚', title: '80+ Pages', desc: 'Comprehensive blueprint' },
    { icon: '🧠', title: 'Notion Templates', desc: 'Track everything' },
    { icon: '🎨', title: '12 Canva Templates', desc: 'Ready to customize' },
    { icon: '⚡', title: '5 Scripts', desc: 'Automate your income' },
  ];
  
  features.forEach((f, i) => {
    const x = 120 + i * 260;
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    drawRoundedRect(ctx, x, 580, 240, 180, 12);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1;
    drawRoundedRect(ctx, x, 580, 240, 180, 12);
    ctx.stroke();
    
    ctx.font = '36px Arial';
    ctx.fillText(f.icon, x + 20, 630);
    
    ctx.fillStyle = COLORS.white;
    ctx.font = 'bold 20px Arial';
    ctx.fillText(f.title, x + 20, 670);
    
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = '16px Arial';
    ctx.fillText(f.desc, x + 20, 700);
  });
  
  // Social proof
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.font = '18px Arial';
  ctx.fillText('Trusted by 127+ freelancers worldwide', 120, 820);
  
  // Stars
  ctx.fillStyle = '#f59e0b';
  ctx.font = '24px Arial';
  ctx.fillText('★★★★★  4.9/5 rating', 120, 860);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(outputDir, '02-sales-page-bold.png'), buffer);
  console.log('Template 2 created');
}

// ==================== TEMPLATE 3: Sales Page C (Elegant Premium) ====================
function createTemplate3() {
  const canvas = createCanvas(1920, 1080);
  const ctx = canvas.getContext('2d');
  
  // Cream background
  ctx.fillStyle = COLORS.cream;
  ctx.fillRect(0, 0, 1920, 1080);
  
  // Gold accent line
  ctx.fillStyle = COLORS.gold;
  ctx.fillRect(0, 0, 1920, 6);
  
  // Elegant header
  ctx.fillStyle = COLORS.navy;
  ctx.font = 'italic 24px Georgia';
  ctx.fillText('The Premium Edition', 120, 100);
  
  ctx.fillStyle = COLORS.navy;
  ctx.font = 'bold 52px Georgia';
  ctx.fillText('Freelance to Passive', 120, 200);
  ctx.fillText('Blueprint', 120, 270);
  
  // Gold underline
  ctx.fillStyle = COLORS.gold;
  ctx.fillRect(120, 290, 400, 4);
  
  ctx.fillStyle = COLORS.navy;
  ctx.font = 'italic 22px Georgia';
  wrapText(ctx, 'A comprehensive guide to transforming your freelance expertise into lasting passive income.', 120, 340, 700, 34);
  
  // Benefits with elegant styling
  const benefits = [
    '80+ pages of actionable strategies',
    'Notion Second Brain template',
    '12 professional Canva templates',
    '5 automation scripts (Python)',
    '50+ affiliate programs directory',
  ];
  
  benefits.forEach((b, i) => {
    const y = 440 + i * 50;
    ctx.fillStyle = COLORS.gold;
    ctx.font = '20px Georgia';
    ctx.fillText('✦', 120, y);
    ctx.fillStyle = COLORS.navy;
    ctx.font = '20px Georgia';
    ctx.fillText(b, 160, y);
  });
  
  // Price box
  ctx.fillStyle = COLORS.navy;
  drawRoundedRect(ctx, 120, 720, 400, 150, 16);
  ctx.fill();
  
  ctx.fillStyle = COLORS.cream;
  ctx.font = 'italic 18px Georgia';
  ctx.fillText('One-Time Investment', 150, 770);
  ctx.font = 'bold 48px Georgia';
  ctx.fillText('$37', 150, 830);
  
  ctx.fillStyle = 'rgba(254,243,199,0.6)';
  ctx.font = '16px Georgia';
  ctx.fillText('Lifetime access • Free updates', 150, 860);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(outputDir, '03-sales-page-elegant.png'), buffer);
  console.log('Template 3 created');
}

// ==================== TEMPLATE 4: Instagram Post (Quote) ====================
function createTemplate4() {
  const canvas = createCanvas(1080, 1080);
  const ctx = canvas.getContext('2d');
  
  // Gradient background
  const grad = ctx.createLinearGradient(0, 0, 1080, 1080);
  grad.addColorStop(0, COLORS.navyDark);
  grad.addColorStop(1, COLORS.brandDark);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1080, 1080);
  
  // Quote marks
  ctx.fillStyle = 'rgba(255,255,255,0.1)';
  ctx.font = 'bold 200px Georgia';
  ctx.fillText('"', 80, 280);
  
  // Quote text
  ctx.fillStyle = COLORS.white;
  ctx.font = 'italic 36px Georgia';
  wrapText(ctx, 'The best time to build passive income was 5 years ago. The second best time is today.', 100, 350, 880, 50);
  
  // Author
  ctx.fillStyle = COLORS.brandLight;
  ctx.font = 'bold 22px Arial';
  ctx.fillText('— Freelance-to-Passive Blueprint', 100, 500);
  
  // Brand footer
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.fillRect(0, 900, 1080, 180);
  
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 28px Arial';
  ctx.fillText('Freelance-to-Passive Blueprint', 100, 970);
  ctx.font = '18px Arial';
  ctx.fillText('Turn Your Skills Into Automated Income', 100, 1010);
  
  // CTA
  ctx.fillStyle = COLORS.success;
  ctx.font = 'bold 20px Arial';
  ctx.fillText('🔗 Get the Blueprint — $37', 100, 1050);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(outputDir, '04-instagram-quote.png'), buffer);
  console.log('Template 4 created');
}

// ==================== TEMPLATE 5: Instagram Carousel (Slide 1) ====================
function createTemplate5() {
  const canvas = createCanvas(1080, 1080);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = COLORS.navyDark;
  ctx.fillRect(0, 0, 1080, 1080);
  
  // Accent
  ctx.fillStyle = COLORS.brand;
  ctx.fillRect(0, 0, 1080, 8);
  
  // Slide number
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.font = '18px Arial';
  ctx.fillText('01 / 10', 900, 60);
  
  // Title
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 52px Arial';
  ctx.fillText('5 Passive Income', 100, 300);
  ctx.fillStyle = COLORS.success;
  ctx.fillText('Streams for Freelancers', 100, 370);
  
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.font = '24px Arial';
  wrapText(ctx, 'The complete system to escape the freelancing trap and build automated income.', 100, 430, 880, 36);
  
  // Visual: 5 streams icons
  const streams = ['📚', '💰', '🎬', '👕', '⚙️'];
  const labels = ['Digital Products', 'Affiliate Marketing', 'Content', 'Print-on-Demand', 'SaaS'];
  
  streams.forEach((s, i) => {
    const x = 100 + i * 190;
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    drawRoundedRect(ctx, x, 550, 170, 200, 16);
    ctx.fill();
    
    ctx.font = '48px Arial';
    ctx.fillText(s, x + 55, 620);
    
    ctx.fillStyle = COLORS.white;
    ctx.font = 'bold 16px Arial';
    wrapText(ctx, labels[i], x + 15, 660, 140, 22);
  });
  
  // Swipe indicator
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.font = '20px Arial';
  ctx.fillText('→ Swipe to see each stream', 100, 850);
  
  // Brand
  ctx.fillStyle = 'rgba(255,255,255,0.2)';
  ctx.font = '16px Arial';
  ctx.fillText('Freelance-to-Passive Blueprint', 100, 1020);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(outputDir, '05-carousel-slide1.png'), buffer);
  console.log('Template 5 created');
}

// ==================== TEMPLATE 6: LinkedIn Post ====================
function createTemplate6() {
  const canvas = createCanvas(1200, 627);
  const ctx = canvas.getContext('2d');
  
  // White background
  ctx.fillStyle = COLORS.white;
  ctx.fillRect(0, 0, 1200, 627);
  
  // Left accent bar
  ctx.fillStyle = COLORS.brand;
  ctx.fillRect(0, 0, 8, 627);
  
  // Content
  ctx.fillStyle = COLORS.navy;
  ctx.font = 'bold 32px Arial';
  ctx.fillText('I was stuck in the freelancing trap.', 60, 100);
  ctx.fillText('Then I discovered this framework.', 60, 150);
  
  ctx.fillStyle = COLORS.slate;
  ctx.font = '20px Arial';
  wrapText(ctx, 'After 3 years of trading hours for dollars, I built a system that generates passive income from 5 different streams. Here\'s what I learned...', 60, 210, 1080, 32);
  
  // Key insight box
  ctx.fillStyle = COLORS.surface;
  drawRoundedRect(ctx, 60, 320, 1080, 120, 12);
  ctx.fill();
  
  ctx.fillStyle = COLORS.brand;
  ctx.font = 'bold 22px Arial';
  ctx.fillText('💡 Key Insight:', 90, 365);
  
  ctx.fillStyle = COLORS.navy;
  ctx.font = '20px Arial';
  wrapText(ctx, 'The difference between freelancing and passive income is leverage. Create once, sell forever. Your time is no longer the bottleneck.', 90, 400, 1020, 30);
  
  // CTA
  ctx.fillStyle = COLORS.brand;
  ctx.font = 'bold 18px Arial';
  ctx.fillText('🔗 Get the complete blueprint → freelance-to-passive.com', 60, 500);
  
  // Brand
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.font = '14px Arial';
  ctx.fillText('Freelance-to-Passive Blueprint • $37', 60, 580);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(outputDir, '06-linkedin-post.png'), buffer);
  console.log('Template 6 created');
}

// ==================== TEMPLATE 7: Pinterest Pin (Blog Post) ====================
function createTemplate7() {
  const canvas = createCanvas(1000, 1500);
  const ctx = canvas.getContext('2d');
  
  // Background
  const grad = ctx.createLinearGradient(0, 0, 0, 1500);
  grad.addColorStop(0, COLORS.brand);
  grad.addColorStop(1, COLORS.brandDark);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1000, 1500);
  
  // Title
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 56px Arial';
  wrapText(ctx, 'How to Turn Fiverr Skills Into 5 Passive Income Streams', 80, 200, 840, 70);
  
  // Subtitle
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.font = 'italic 28px Georgia';
  wrapText(ctx, 'The complete blueprint for freelancers who want to escape the hourly grind.', 80, 350, 840, 40);
  
  // Visual element
  ctx.fillStyle = 'rgba(255,255,255,0.1)';
  drawRoundedRect(ctx, 80, 450, 840, 400, 20);
  ctx.fill();
  
  // 5 streams visual
  const streams = ['📚', '💰', '🎬', '👕', '⚙️'];
  streams.forEach((s, i) => {
    const x = 120 + i * 160;
    ctx.font = '48px Arial';
    ctx.fillText(s, x, 550);
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Stream ' + (i + 1), x - 5, 600);
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
  });
  
  // CTA
  ctx.fillStyle = COLORS.success;
  drawRoundedRect(ctx, 250, 900, 500, 80, 40);
  ctx.fill();
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 28px Arial';
  ctx.fillText('Read the Full Guide →', 310, 950);
  
  // Brand
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.font = '18px Arial';
  ctx.fillText('Freelance-to-Passive Blueprint', 80, 1100);
  ctx.fillText('TechTalks / KliporaHQ', 80, 1140);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(outputDir, '07-pinterest-blog.png'), buffer);
  console.log('Template 7 created');
}

// ==================== TEMPLATE 8: Welcome Email ====================
function createTemplate8() {
  const canvas = createCanvas(600, 800);
  const ctx = canvas.getContext('2d');
  
  // White background
  ctx.fillStyle = COLORS.white;
  ctx.fillRect(0, 0, 600, 800);
  
  // Header accent
  ctx.fillStyle = COLORS.brand;
  ctx.fillRect(0, 0, 600, 6);
  
  // Logo area
  ctx.fillStyle = COLORS.navy;
  ctx.font = 'bold 24px Arial';
  ctx.fillText('Freelance-to-Passive', 40, 60);
  
  // Greeting
  ctx.fillStyle = COLORS.navy;
  ctx.font = 'bold 28px Arial';
  ctx.fillText('Welcome! Here\'s your blueprint 🎁', 40, 130);
  
  // Body
  ctx.fillStyle = COLORS.slate;
  ctx.font = '16px Arial';
  wrapText(ctx, 'Thank you for purchasing the Freelance-to-Passive Blueprint! You now have everything you need to transform your freelance skills into 5 automated income streams.', 40, 180, 520, 26);
  
  // What's included box
  ctx.fillStyle = COLORS.surface;
  drawRoundedRect(ctx, 40, 280, 520, 200, 12);
  ctx.fill();
  
  ctx.fillStyle = COLORS.navy;
  ctx.font = 'bold 18px Arial';
  ctx.fillText('📦 What\'s Included:', 60, 320);
  
  const items = ['80+ page PDF ebook', 'Notion Second Brain template', '12 Canva templates', '5 Python automation scripts', '50+ affiliate programs directory', '90-day content calendar'];
  ctx.font = '15px Arial';
  items.forEach((item, i) => {
    ctx.fillStyle = COLORS.success;
    ctx.fillText('✓', 60, 355 + i * 25);
    ctx.fillStyle = COLORS.slate;
    ctx.fillText(item, 85, 355 + i * 25);
  });
  
  // CTA Button
  ctx.fillStyle = COLORS.brand;
  drawRoundedRect(ctx, 150, 520, 300, 50, 25);
  ctx.fill();
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 18px Arial';
  ctx.fillText('Download Your Bundle', 190, 552);
  
  // Footer
  ctx.fillStyle = 'rgba(0,0,0,0.3)';
  ctx.font = '12px Arial';
  ctx.fillText('Questions? Reply to this email or contact kliporahq@gmail.com', 40, 650);
  ctx.fillText('© 2026 TechTalks / KliporaHQ', 40, 680);
  ctx.fillText('Unsubscribe | Privacy Policy', 40, 710);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(outputDir, '08-welcome-email.png'), buffer);
  console.log('Template 8 created');
}

// ==================== TEMPLATE 9: Nurture Email ====================
function createTemplate9() {
  const canvas = createCanvas(600, 700);
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = COLORS.white;
  ctx.fillRect(0, 0, 600, 700);
  
  ctx.fillStyle = COLORS.brand;
  ctx.fillRect(0, 0, 600, 6);
  
  ctx.fillStyle = COLORS.navy;
  ctx.font = 'bold 24px Arial';
  ctx.fillText('A quick story for you...', 40, 60);
  
  ctx.fillStyle = COLORS.slate;
  ctx.font = '16px Arial';
  wrapText(ctx, 'Two years ago, I was exactly where you are now. Working 60-hour weeks on Fiverr, chasing clients, and burning out. I knew there had to be a better way.', 40, 110, 520, 26);
  
  wrapText(ctx, 'Then I discovered something that changed everything: the skills I was selling for $50/hour could be packaged into products that sell while I sleep.', 40, 200, 520, 26);
  
  // Highlight
  ctx.fillStyle = COLORS.surface;
  drawRoundedRect(ctx, 40, 290, 520, 80, 12);
  ctx.fill();
  ctx.fillStyle = COLORS.navy;
  ctx.font = 'italic 16px Georgia';
  wrapText(ctx, '"The best time to build passive income was 5 years ago. The second best time is today."', 60, 320, 480, 26);
  
  ctx.fillStyle = COLORS.slate;
  ctx.font = '16px Arial';
  wrapText(ctx, 'That\'s why I created this blueprint — to give you the exact system I wish I had when I started. No fluff, no hype. Just actionable strategies that work.', 40, 410, 520, 26);
  
  // Soft CTA
  ctx.fillStyle = COLORS.brand;
  ctx.font = 'bold 16px Arial';
  ctx.fillText('→ Check out the blueprint if you haven\'t already', 40, 520);
  
  // Signature
  ctx.fillStyle = COLORS.navy;
  ctx.font = '16px Arial';
  ctx.fillText('— Roger', 40, 580);
  ctx.font = 'italic 14px Arial';
  ctx.fillText('Creator, Freelance-to-Passive Blueprint', 40, 605);
  
  // P.S.
  ctx.fillStyle = COLORS.slate;
  ctx.font = 'italic 14px Arial';
  ctx.fillText('P.S. The $37 price is a launch special. It goes up to $97 soon.', 40, 650);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(outputDir, '09-nurture-email.png'), buffer);
  console.log('Template 9 created');
}

// ==================== TEMPLATE 10: Sales Email ====================
function createTemplate10() {
  const canvas = createCanvas(600, 900);
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = COLORS.white;
  ctx.fillRect(0, 0, 600, 900);
  
  // Urgency banner
  ctx.fillStyle = COLORS.ruby;
  ctx.fillRect(0, 0, 600, 40);
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 16px Arial';
  ctx.fillText('⏰ LAUNCH SPECIAL ENDS SOON — $37 → $97', 100, 26);
  
  // Headline
  ctx.fillStyle = COLORS.navy;
  ctx.font = 'bold 32px Arial';
  ctx.fillText('Your freelance skills are worth', 40, 100);
  ctx.fillStyle = COLORS.brand;
  ctx.fillText('so much more than $50/hour', 40, 145);
  
  // Body
  ctx.fillStyle = COLORS.slate;
  ctx.font = '16px Arial';
  wrapText(ctx, 'Every hour you spend freelancing is an hour you could spend building something that pays you forever. The Freelance-to-Passive Blueprint shows you exactly how.', 40, 200, 520, 26);
  
  // Benefits
  const benefits = ['📚 80+ page comprehensive guide', '🧠 Notion templates included', '🎨 12 Canva templates', '⚡ 5 automation scripts'];
  benefits.forEach((b, i) => {
    ctx.fillStyle = COLORS.navy;
    ctx.font = '16px Arial';
    ctx.fillText(b, 40, 320 + i * 30);
  });
  
  // Price comparison
  ctx.fillStyle = COLORS.surface;
  drawRoundedRect(ctx, 40, 460, 520, 100, 12);
  ctx.fill();
  
  ctx.fillStyle = COLORS.slate;
  ctx.font = '16px Arial';
  ctx.fillText('Launch Price:', 60, 500);
  ctx.fillStyle = COLORS.success;
  ctx.font = 'bold 28px Arial';
  ctx.fillText('$37', 60, 540);
  
  ctx.fillStyle = COLORS.slate;
  ctx.font = '16px Arial';
  ctx.fillText('Regular Price:', 250, 500);
  ctx.fillStyle = COLORS.ruby;
  ctx.font = 'bold 28px Arial';
  ctx.fillText('$97', 250, 540);
  
  // CTA
  ctx.fillStyle = COLORS.brand;
  drawRoundedRect(ctx, 150, 600, 300, 55, 27);
  ctx.fill();
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 20px Arial';
  ctx.fillText('Get the Blueprint Now', 185, 635);
  
  // Testimonial
  ctx.fillStyle = COLORS.surface;
  drawRoundedRect(ctx, 40, 700, 520, 100, 12);
  ctx.fill();
  ctx.fillStyle = '#f59e0b';
  ctx.font = '16px Arial';
  ctx.fillText('★★★★★', 60, 735);
  ctx.fillStyle = COLORS.slate;
  ctx.font = 'italic 14px Arial';
  wrapText(ctx, '"Made $1,200 in the first month after launching my first digital product using this blueprint." — Sarah K., Fiverr Top Rated', 60, 760, 480, 22);
  
  // Footer
  ctx.fillStyle = 'rgba(0,0,0,0.3)';
  ctx.font = '12px Arial';
  ctx.fillText('© 2026 TechTalks / KliporaHQ', 40, 850);
  ctx.fillText('Unsubscribe', 40, 875);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(outputDir, '10-sales-email.png'), buffer);
  console.log('Template 10 created');
}

// ==================== TEMPLATE 11: Pinterest Pin (Product) ====================
function createTemplate11() {
  const canvas = createCanvas(1000, 1500);
  const ctx = canvas.getContext('2d');
  
  // White background
  ctx.fillStyle = COLORS.white;
  ctx.fillRect(0, 0, 1000, 1500);
  
  // Product image area (simulated with gradient)
  const grad = ctx.createLinearGradient(0, 0, 1000, 600);
  grad.addColorStop(0, COLORS.navyDark);
  grad.addColorStop(1, COLORS.brandDark);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1000, 600);
  
  // Product title on image
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 48px Arial';
  ctx.fillText('Freelance-to-Passive', 100, 250);
  ctx.fillStyle = COLORS.success;
  ctx.fillText('Blueprint', 100, 320);
  
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.font = '24px Arial';
  ctx.fillText('Premium Edition 2026', 100, 380);
  
  // Price badge
  ctx.fillStyle = COLORS.success;
  drawRoundedRect(ctx, 700, 400, 200, 80, 40);
  ctx.fill();
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 36px Arial';
  ctx.fillText('$37', 770, 450);
  
  // Content below image
  ctx.fillStyle = COLORS.navy;
  ctx.font = 'bold 32px Arial';
  ctx.fillText('Everything You Need to Build', 80, 680);
  ctx.fillText('Passive Income in 2026', 80, 730);
  
  // Features
  const features = ['📚 80+ page comprehensive guide', '🧠 Notion Second Brain template', '🎨 12 professional Canva templates', '⚡ 5 Python automation scripts', '💰 50+ affiliate programs directory', '📅 90-day content calendar'];
  
  features.forEach((f, i) => {
    ctx.fillStyle = COLORS.surface;
    drawRoundedRect(ctx, 80, 780 + i * 70, 840, 55, 10);
    ctx.fill();
    ctx.fillStyle = COLORS.navy;
    ctx.font = '18px Arial';
    ctx.fillText(f, 100, 815 + i * 70);
  });
  
  // CTA
  ctx.fillStyle = COLORS.brand;
  drawRoundedRect(ctx, 250, 1230, 500, 70, 35);
  ctx.fill();
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 24px Arial';
  ctx.fillText('Get Instant Access →', 310, 1275);
  
  // Star rating
  ctx.fillStyle = '#f59e0b';
  ctx.font = '24px Arial';
  ctx.fillText('★★★★★  4.9/5 (127+ buyers)', 300, 1360);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(outputDir, '11-pinterest-product.png'), buffer);
  console.log('Template 11 created');
}

// ==================== TEMPLATE 12: Pinterest Pin (Lead Magnet) ====================
function createTemplate12() {
  const canvas = createCanvas(1000, 1500);
  const ctx = canvas.getContext('2d');
  
  // Bright background
  const grad = ctx.createLinearGradient(0, 0, 1000, 1500);
  grad.addColorStop(0, '#1e40af');
  grad.addColorStop(1, '#7c3aed');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1000, 1500);
  
  // Free badge
  ctx.fillStyle = COLORS.success;
  drawRoundedRect(ctx, 350, 60, 300, 50, 25);
  ctx.fill();
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 24px Arial';
  ctx.fillText('🎁 FREE DOWNLOAD', 380, 92);
  
  // Title
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 52px Arial';
  wrapText(ctx, 'The Freelancer\'s Checklist to Passive Income', 80, 200, 840, 65);
  
  // Subtitle
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.font = 'italic 24px Georgia';
  wrapText(ctx, 'A step-by-step checklist to transform your freelance skills into automated income streams.', 80, 350, 840, 36);
  
  // Checklist preview
  ctx.fillStyle = 'rgba(255,255,255,0.1)';
  drawRoundedRect(ctx, 80, 430, 840, 500, 20);
  ctx.fill();
  
  const checklist = [
    'Identify your most profitable freelance skill',
    'Choose your first passive income stream',
    'Validate demand before creating',
    'Create your first digital product',
    'Set up your Payhip store',
    'Write your 7-day email sequence',
    'Launch and get your first sale',
    'Scale to $1,000/month',
    'Add affiliate marketing',
    'Build the complete 5-stream system'
  ];
  
  checklist.forEach((item, i) => {
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    drawRoundedRect(ctx, 110, 460 + i * 45, 780, 38, 8);
    ctx.fill();
    ctx.fillStyle = COLORS.success;
    ctx.font = '20px Arial';
    ctx.fillText('☐', 120, 485 + i * 45);
    ctx.fillStyle = COLORS.white;
    ctx.font = '18px Arial';
    ctx.fillText(item, 155, 485 + i * 45);
  });
  
  // CTA
  ctx.fillStyle = COLORS.success;
  drawRoundedRect(ctx, 200, 980, 600, 80, 40);
  ctx.fill();
  ctx.fillStyle = COLORS.white;
  ctx.font = 'bold 28px Arial';
  ctx.fillText('Download Free Checklist →', 240, 1030);
  
  // Brand
  ctx.fillStyle = 'rgba(255,255,255,0.4)';
  ctx.font = '18px Arial';
  ctx.fillText('Freelance-to-Passive Blueprint', 80, 1150);
  ctx.fillText('by TechTalks / KliporaHQ', 80, 1190);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(outputDir, '12-pinterest-checklist.png'), buffer);
  console.log('Template 12 created');
}

// Generate all templates
createTemplate1();
createTemplate2();
createTemplate3();
createTemplate4();
createTemplate5();
createTemplate6();
createTemplate7();
createTemplate8();
createTemplate9();
createTemplate10();
createTemplate11();
createTemplate12();

console.log('\n✅ All 12 Canva template mockups created!');
console.log('Output directory:', outputDir);
