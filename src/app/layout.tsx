import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nimmagadda Harish — AI Systems Engineer | Healthcare AI Developer',
  description:
    'AI Systems Engineer specializing in Deep Learning healthcare models, Data Intelligence, and Full Stack development. Built Alzheimer\'s detection and Diabetic Retinopathy systems.',
  keywords: [
    'AI Engineer',
    'Healthcare AI',
    'Deep Learning',
    'Alzheimer Detection',
    'Diabetic Retinopathy',
    'Machine Learning',
    'Full Stack Developer',
    'Python',
    'TensorFlow',
    'Data Analyst',
    'Nimmagadda Harish',
  ],
  authors: [{ name: 'Nimmagadda Harish' }],
  creator: 'Nimmagadda Harish',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Nimmagadda Harish — AI Systems Engineer',
    description:
      'Building intelligent systems that detect diseases before symptoms escalate.',
    siteName: 'Harish Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nimmagadda Harish — AI Systems Engineer',
    description:
      'Building intelligent systems that detect diseases before symptoms escalate.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="page-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
