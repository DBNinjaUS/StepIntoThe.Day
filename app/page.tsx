import { ArrowRight, Coffee, ExternalLink, Heart, MapPin, ShieldCheck, Sun, Users } from 'lucide-react';

const welcomePoints = [
  {
    icon: Heart,
    title: 'Come as you are',
    copy: 'There is no judgment and no requirement to have everything figured out. The only requirement for membership is a desire to stop drinking.',
  },
  {
    icon: Users,
    title: 'Share or simply listen',
    copy: 'You are welcome to introduce yourself, share what is on your mind, or quietly listen. There is no pressure to speak.',
  },
  {
    icon: ShieldCheck,
    title: 'Anonymity and respect',
    copy: 'Who you see and what you hear stays with the group. We protect one another’s privacy and make room for every voice.',
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Step Into The Day home">
          <span className="brand-mark"><Sun size={19} strokeWidth={2.4} /></span>
          <span>Step Into The Day</span>
        </a>
        <div className="nav-links">
          <a href="#welcome">Welcome</a>
          <a href="#location">Location</a>
          <a href="#newcomers">Newcomers</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="sun-glow" aria-hidden="true" />
        <div className="eyebrow"><Coffee size={15} /> An Alcoholics Anonymous group</div>
        <h1>Recovery happens<br /><em>one day at a time.</em></h1>
        <p className="hero-copy">
          Step Into The Day is a welcoming AA group where we gather in fellowship,
          share experience, strength, and hope, and help one another stay sober today.
        </p>
        <a className="primary-button" href="#newcomers">New here? Start here <ArrowRight size={18} /></a>

        <div className="daily-card" aria-label="Just for today">
          <div className="card-topline"><span>Just for today</span><span className="date">Progress, not perfection</span></div>
          <p>“I don’t have to do this alone.”</p>
          <div className="card-note">A shared path. A new beginning. Twenty-four hours at a time.</div>
        </div>
      </section>

      <section id="welcome" className="welcome-band">
        <div>
          <span className="kicker">You are welcome here</span>
          <h2>A place to begin the day in fellowship.</h2>
        </div>
        <p>
          Whether this is your first meeting, your first day back, or one more day in a long recovery,
          there is a seat for you. We meet as equals and support each other in living sober.
        </p>
      </section>

      <section id="location" className="location-section">
        <div className="location-icon"><MapPin size={25} /></div>
        <div className="location-copy">
          <span className="kicker">Meeting location</span>
          <h2>Meet us at The HOW Place.</h2>
          <p>5881 Old Bascomb Road<br />Acworth, GA 30102</p>
        </div>
        <a
          className="map-button"
          href="https://www.google.com/maps/search/?api=1&query=The+HOW+Place%2C+5881+Old+Bascomb+Road%2C+Acworth%2C+GA+30102"
          target="_blank"
          rel="noreferrer"
        >
          Open in Google Maps <ExternalLink size={17} />
        </a>
      </section>

      <section id="newcomers" className="newcomers">
        <div className="section-heading">
          <span className="kicker">Your first meeting</span>
          <h2>What you can expect.</h2>
          <p>You do not need to register, pay dues, or bring anything. Just show up.</p>
        </div>
        <div className="steps-grid">
          {welcomePoints.map(({ icon: Icon, title, copy }, index) => (
            <article className="step-card" key={title}>
              <div className="step-number">0{index + 1}</div>
              <div className="step-icon"><Icon size={22} /></div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="closing">
        <Sun size={28} />
        <h2>You never have to take the next step alone.</h2>
        <p>If you think you may have a problem with alcohol, you are welcome at an AA meeting.</p>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark"><Sun size={17} /></span>Step Into The Day</a>
        <p>An independent Alcoholics Anonymous group.</p>
      </footer>
    </main>
  );
}
