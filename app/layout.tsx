import type { Metadata } from 'next';
import { DM_Sans, Lora } from 'next/font/google';
import './globals.css';

const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'] });
const serif = Lora({ variable: '--font-serif', subsets: ['latin'], style: ['normal', 'italic'] });

export const metadata: Metadata = {
  title: 'StepIntoThe.Day',
  description: 'A simple daily rhythm for moving through your day with intention.',
  openGraph: {
    title: 'StepIntoThe.Day',
    description: 'Step into today with intention.',
    images: ['https://raw.githubusercontent.com/DBNinjaUS/StepIntoThe.Day/main/public/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StepIntoThe.Day',
    description: 'Step into today with intention.',
    images: ['https://raw.githubusercontent.com/DBNinjaUS/StepIntoThe.Day/main/public/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
