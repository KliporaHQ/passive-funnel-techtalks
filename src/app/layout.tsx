import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Freelance-to-Passive Blueprint',
  description: 'Turn Fiverr Skills into 5 Automated Passive Income Streams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f172a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: 'Freelance-to-Passive Blueprint',
              description: 'The complete 80+ page blueprint to transform freelance skills into 5 passive income streams',
              brand: { '@type': 'Brand', name: 'TechTalks' },
              offers: {
                '@type': 'Offer',
                price: '37',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '127',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
