import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: 'ATB.LU',
  description: "A 'biotope' is a place brimming with boundless vitality. Under the title 'Fold Biotope: The Boundless Interactive Perception Field', this exhibition—marking the graduation of students from the '2025–2026 Master of Science in Arts Technology and Business (MScATB)' programme at the School of Business, Lingnan University, Hong Kong—seeks to move beyond the static display conventions of traditional art galleries.",
  keywords: ['ATB.LU', 'design studio', 'digital art', 'photography', 'portfolio', 'creative'],
  authors: [{ name: 'biotope.atb.lu' }],
  generator: 'ATB.LU',
  icons: {
    icon: '/atb.png',
    shortcut: '/atb.png',
    apple: '/atb.png',
  },
  other: {
    'meta:description': "A 'biotope' is a place brimming with boundless vitality. Under the title 'Fold Biotope: The Boundless Interactive Perception Field', this exhibition—marking the graduation of students from the '2025–2026 Master of Science in Arts Technology and Business (MScATB)' programme at the School of Business, Lingnan University, Hong Kong—seeks to move beyond the static display conventions of traditional art galleries.",
    'og:title': 'FOLD BIOTOPE EXHIBITION|岭南大学MScATB毕业展',
    'og:site_name': 'biotope.atb.lu',
    'og:locale': 'en_US',
    'og:type': 'website',
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
