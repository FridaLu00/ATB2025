import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: 'FOLD BIOTOPE EXHIBITION|岭南大学MScATB毕业展',
  description: "A 'biotope' is a place brimming with boundless vitality. Under the title 'Fold Biotope: The Boundless Interactive Perception Field', this exhibition—marking the graduation of students from the '2025–2026 Master of Science in Arts Technology and Business (MScATB)' programme at the School of Business, Lingnan University, Hong Kong—seeks to move beyond the static display conventions of traditional art galleries.",
  keywords: ['Fold Biotope', 'MScATB', 'ATB.LU', 'Lingnan University', 'graduation exhibition', 'digital art', 'creative design'],
  authors: [{ name: 'MScATB, Lingnan University' }],
  generator: 'ATB.LU',
  icons: {
    icon: '/atb.png',
    shortcut: '/atb.png',
    apple: '/atb.png',
  },
  openGraph: {
    title: 'FOLD BIOTOPE EXHIBITION|岭南大学MScATB毕业展',
    description: "A 'biotope' is a place brimming with boundless vitality. Under the title 'Fold Biotope: The Boundless Interactive Perception Field', this exhibition—marking the graduation of students from the '2025–2026 Master of Science in Arts Technology and Business (MScATB)' programme at the School of Business, Lingnan University, Hong Kong—seeks to move beyond the static display conventions of traditional art galleries.",
    siteName: 'biotope.atb.lu',
    images: [
      {
        url: '/atb.png',
        width: 1200,
        height: 630,
        alt: 'FOLD BIOTOPE EXHIBITION',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="en">
      <body className="antialiased">
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
