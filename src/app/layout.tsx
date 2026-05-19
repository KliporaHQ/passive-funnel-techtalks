import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://passive.techtalks.uk'),
  title: 'Freelance-to-Passive Blueprint | Turn Fiverr Skills into 5 Automated Income Streams',
  description: 'The complete 80+ page blueprint to transform your freelance skills into 5 passive income streams. $37 one-time.',
  keywords: ['passive income', 'fiverr', 'freelancing', 'digital products', 'automated income'],
  openGraph: {
    title: 'Freelance-to-Passive Blueprint',
    description: 'Turn Fiverr Skills into 5 Automated Passive Income Streams in 2026',
    type: 'website',
    url: 'https://passive.techtalks.uk',
    siteName: 'Freelance-to-Passive Blueprint',
  },
  alternates: { canonical: 'https://passive.techtalks.uk' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
