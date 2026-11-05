import Link from 'next/link';

const interests = ['Machine learning', 'Applied AI', 'Computer vision', 'LLM evaluation', 'Backend systems', 'Product development'];

export default function AboutPage() {
  return (
    <main className="about-page">
      <nav className="nav shell about-nav">
        <Link className="logo" href="/">AVNI<span>GANDHI</span></Link>
        <div className="nav-links"><Link href="/#work">Work</Link><Link href="/#experience">Experience</Link><Link href="/#leadership">Leadership</Link><Link href="/about">About</Link></div>
        <Link className="nav-contact" href="/#contact">Let&apos;s connect <span>↗</span></Link>
      </nav>

      <section className="about-hero shell">
        <div className="section-label">About me / 04</div>
        <div className="about-hero-grid">
          <h1>Curious about how systems become <i>useful.</i></h1>
          <div className="about-lede"><p>I&apos;m Avni Gandhi — an engineer passionate about machine learning and applied AI, always curious to learn new technologies, explore new ideas, and see what I can build.</p><p className="muted">I care about the point where rigorous engineering becomes something people can actually use.</p></div>
        </div>
      </section>

      <section className="about-story shell">
        <div className="about-photo"><span>PHOTO / 02</span><strong>A little<br />more context.</strong><small>A portrait can live here later.</small></div>
        <div className="about-story-copy"><div className="section-label">The short version</div><p className="about-big-copy">I like taking complex technical ideas and making them feel clear, practical, and human.</p><p>My work has taken me from computer vision pipelines to production LLM observability, from cybersecurity benchmarks to civic engagement and financial education. Across each project, I&apos;m looking for the same thing: a useful idea, a thoughtful system, and a person on the other side of it.</p><p>Outside of work, I&apos;m usually exploring a new technology, building something with friends, or looking for a better question to ask.</p></div>
      </section>

      <section className="about-details shell"><div><div className="section-label">Education</div><h2>University of California, Santa Cruz</h2><p>B.S. Computer Engineering<br />Minors in Computer Science and Statistics<br />Expected June 2027 · GPA 3.70 / 4.00</p></div><div><div className="section-label">Interested in</div><div className="interest-list">{interests.map((interest, index) => <span key={interest}><b>0{index + 1}</b>{interest}</span>)}</div></div></section>

      <footer className="about-footer shell"><Link href="/">← Back home</Link><Link href="/#contact">Get in touch ↗</Link></footer>
    </main>
  );
}
