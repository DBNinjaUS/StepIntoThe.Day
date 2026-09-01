import { ArrowRight, Check, Coffee, Moon, Sparkles, Sun } from 'lucide-react';

const steps = [
  { icon: Sun, label: 'Morning', title: 'Choose your direction', copy: 'Name the one thing that would make today feel meaningful.' },
  { icon: Coffee, label: 'Midday', title: 'Protect your attention', copy: 'Make space for focused work, a real break, and the people who matter.' },
  { icon: Moon, label: 'Evening', title: 'Close the loop', copy: 'Notice what moved forward and let the rest wait for tomorrow.' },
];

export default function Home() {
  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="StepIntoThe.Day home"><span className="brand-mark"><Sun size={19} strokeWidth={2.4} /></span><span>StepIntoThe.Day</span></a>
        <a className="nav-link" href="#practice">The practice</a>
      </nav>
      <section id="top" className="hero">
        <div className="sun-glow" aria-hidden="true" />
        <div className="eyebrow"><Sparkles size={15} /> A gentler way to begin</div>
        <h1>Don’t just start the day.<br /><em>Step into it.</em></h1>
        <p className="hero-copy">A simple daily rhythm for choosing what matters, moving with intention, and ending the day with a little more peace.</p>
        <a className="primary-button" href="#practice">Begin today <ArrowRight size={18} /></a>
        <div className="daily-card" aria-label="Today's intention">
          <div className="card-topline"><span>Today’s intention</span><span className="date">One day at a time</span></div>
          <p>“Move slowly enough to notice where you’re going.”</p>
          <div className="check-line"><span><Check size={14} /></span> Make room for what matters</div>
        </div>
      </section>
      <section id="practice" className="practice">
        <div className="section-heading"><span className="kicker">A three-part rhythm</span><h2>Meet the day where it is.</h2><p>No rigid system. Just three small moments to help you move through the day on purpose.</p></div>
        <div className="steps-grid">
          {steps.map(({ icon: Icon, label, title, copy }, index) => (
            <article className="step-card" key={label}><div className="step-number">0{index + 1}</div><div className="step-icon"><Icon size={22} /></div><span>{label}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>
      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark"><Sun size={17} /></span>StepIntoThe.Day</a><p>Start where you are. Take the next kind step.</p></footer>
    </main>
  );
}
