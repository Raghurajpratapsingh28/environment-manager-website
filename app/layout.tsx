import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Environment Manager - Environment Variable Manager',
  description: 'Download Environment Manager, a cross-platform desktop app to manage environment variables securely. Simple. Secure. Cross-Platform.',
  keywords: ['environment variables', 'desktop app', 'cross-platform', 'developer tools', 'electron'],
  authors: [{ name: 'Environment Manager Team' }],
  openGraph: {
    title: 'Environment Manager - Environment Variable Manager',
    description: 'Master your environment variables with Environment Manager. Simple. Secure. Cross-Platform.',
    url: 'https://Environment Manager.app',
    siteName: 'Environment Manager',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Environment Manager - Environment Variable Manager',
    description: 'Master your environment variables with Environment Manager. Simple. Secure. Cross-Platform.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}