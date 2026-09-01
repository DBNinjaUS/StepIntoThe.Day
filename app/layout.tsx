import type { Metadata } from 'next';
import { DM_Sans, Lora } from 'next/font/google';
import './globals.css';

const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'] });
const serif = Lora({ variable: '--font-serif', subsets: ['latin'], style: ['normal', 'italic'] });

export const metadata: Metadata = {
  title: 'Step Into The Day | Alcoholics Anonymous Group',
  description: 'A welcoming Alcoholics Anonymous group sharing experience, strength, and hope—one day at a time.',
  openGraph: {
    title: 'Step Into The Day | AA Group',
    description: 'Recovery happens one day at a time.',
    images: ['https://raw.githubusercontent.com/DBNinjaUS/StepIntoThe.Day/main/public/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Step Into The Day | AA Group',
    description: 'Recovery happens one day at a time.',
    images: ['https://raw.githubusercontent.com/DBNinjaUS/StepIntoThe.Day/main/public/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
