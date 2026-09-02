import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ExternalLink, Sun } from 'lucide-react';
import { SiteNav } from '@/components/site-nav';

const pages = {
  welcome: {
    kicker: 'You are welcome here',
    title: 'Welcome',
    intro: 'There is a seat for you at Step Into The Day.',
    heading: 'Begin the day in fellowship.',
    body: 'Whether this is your first meeting, your first day back, or one more day in a long recovery, you are welcome. We meet as equals and support one another in living sober—one day at a time.',
  },
  location: {
    kicker: 'Meeting location',
    title: 'Find the Meeting',
    intro: 'Join us at 6:30 AM, Monday through Friday.',
    heading: 'The HOW Place',
    body: '5881 Old Bascomb Road, Acworth, GA 30102. Come as you are; no registration is required.',
  },
  newcomers: {
    kicker: 'Your first meeting',
    title: 'Newcomers',
    intro: 'You do not need to have everything figured out before you arrive.',
    heading: 'What you can expect.',
    body: 'There are no dues, fees, or registration. You may introduce yourself, share what is on your mind, or simply listen. Anonymity and mutual respect help make the meeting a safe place for everyone.',
  },
  'sponsor-area': {
    kicker: 'Recovery together',
    title: 'Sponsor Area',
    intro: 'Resources and encouragement for members who sponsor others.',
    heading: 'Supporting the next step.',
    body: 'This area is being prepared for group-approved sponsorship resources, shared experience, and practical guidance. More information will be added soon.',
  },
  'sponsee-area': {
    kicker: 'Recovery together',
    title: 'Sponsee Area',
    intro: 'A place for members working the program with a sponsor.',
    heading: 'One step at a time.',
    body: 'This area is being prepared for group-approved recovery resources and helpful materials. More information will be added soon.',
  },
  messaging: {
    kicker: 'Stay connected',
    title: 'Messaging',
    intro: 'Group communication information will live here.',
    heading: 'Connection between meetings.',
    body: 'The group is evaluating safe, respectful ways for members to communicate. Messaging details and participation guidance will be posted here when they are ready.',
  },
  'community-social-area': {
    kicker: 'Fellowship',
    title: 'Community & Social Area',
    intro: 'Recovery includes sharing life, laughter, and fellowship.',
    heading: 'Together beyond the meeting.',
    body: 'Upcoming fellowship opportunities and community activities will be shared here as they are planned.',
  },
  'group-calendar': {
    kicker: 'Stay connected',
    title: 'Group Calendar',
    intro: 'Keep up with meetings and upcoming group events.',
    heading: 'What’s happening.',
    body: '',
  },
  'group-conscious-documents': {
    kicker: 'Group service',
    title: 'Group Conscience Documents',
    intro: 'A home for group-approved records and service information.',
    heading: 'Our shared decisions.',
    body: 'Group conscience documents and other approved materials will be organized here as they become available.',
  },
} as const;

type Slug = keyof typeof pages;

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug as Slug];
  if (!page) return {};
  return { title: `${page.title} | Step Into The Day`, description: page.intro };
}

export default async function SectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug as Slug];
  if (!page) notFound();

  return (
    <main className="inner-page">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Step Into The Day home">
          <span className="brand-mark"><Sun size={19} strokeWidth={2.4} /></span>
          <span>Step Into The Day</span>
        </a>
        <SiteNav />
      </nav>
      <section className="page-hero">
        <div className="sun-glow" aria-hidden="true" />
        <span className="kicker">{page.kicker}</span>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </section>
      <section className={`page-content ${slug === 'group-calendar' ? 'page-calendar' : ''}`}>
        <div className="page-card">
          <h2>{page.heading}</h2>
          {page.body && <p>{page.body}</p>}
          {slug === 'location' && (
            <a className="map-button" href="https://www.google.com/maps/search/?api=1&query=The+HOW+Place%2C+5881+Old+Bascomb+Road%2C+Acworth%2C+GA+30102" target="_blank" rel="noreferrer">
              Open in Google Maps <ExternalLink size={17} />
            </a>
          )}
          {slug === 'group-calendar' && (
            <iframe className="calendar-frame" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&src=ODNlZjUwMjhjODNjMDI1Y2U2NGQwNWMxMDJjN2E5ODZhZjc4ZGQyNGVkMWFiZDg3MTAzNjg3MTJhY2QyYzgwNkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23f6bf26" title="Step Into The Day group calendar" width="800" height="600" frameBorder="0" scrolling="no" />
          )}
        </div>
      </section>
      <footer>
        <a className="brand footer-brand" href="/"><span className="brand-mark"><Sun size={17} /></span>Step Into The Day</a>
        <p>An independent Alcoholics Anonymous group.</p>
      </footer>
    </main>
  );
}
