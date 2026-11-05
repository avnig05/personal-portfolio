'use client';

const projects = [
  { number: '01', title: 'VoteSmart', description: 'An AI civic-engagement platform with personalized policy dashboards, built by a four-person team in 36 hours.', tags: 'Python / FastAPI / React / 1st place, CruzHacks 2025' },
  { number: '02', title: 'Calendarize', description: 'An AI scheduling platform that converts natural-language requests into structured calendar events for 200+ active users.', tags: 'Python / FastAPI / NLP / OpenAI API' },
  { number: '03', title: 'PennyWise', description: 'A full-stack financial education platform with personalized resources, progress tracking, and an AI assistant.', tags: 'React / Supabase / Gemini API / FastAPI' },
];

type IconName = 'github' | 'linkedin' | 'mail';

function Icon({ name }: { name: IconName }) {
  if (name === 'github') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 7.99c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>;
  }

  if (name === 'linkedin') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9.7h3.8V21H3.3V9.7Zm6.2 0h3.6v1.55h.05c.5-.95 1.72-1.95 3.55-1.95 3.8 0 4.5 2.5 4.5 5.75V21h-3.8v-5.27c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.38-2.03 2.79V21H9.5V9.7Z" /></svg>;
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 5.5h17v13h-17v-13Zm.7.8 7.8 6 7.8-6M4.2 17.7l5.5-5.1m10.1 5.1-5.5-5.1" /></svg>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="logo" href="#top">AVNI<span>GANDHI</span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#leadership">Leadership</a><a href="#about">About</a></div>
        <a className="nav-contact" href="#contact">Let&apos;s connect <span>↗</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-photo" aria-label="Placeholder for Avni Gandhi portrait"><span>PHOTO / 01</span><strong>Your portrait<br />goes here.</strong><small>Replace this frame with a photo of you.</small></div>
        <div className="hero-copy shell">
          <div className="hero-kicker"><span className="pulse" /> Computer engineering / AI systems</div>
          <h1><span>hello, I&apos;m</span>Avni Gandhi<svg className="name-squiggle" viewBox="0 0 620 55" role="presentation"><path d="M6 27 C 55 2, 85 52, 135 27 S 215 2, 265 27 S 345 52, 395 27 S 475 2, 525 27 S 575 45, 614 18" /></svg></h1>
          <p>An engineer passionate about machine learning and applied AI, always curious to learn new technologies, explore new ideas, and see what I can build.</p>
          <div className="hero-actions"><a className="primary-button" href="#work">Explore the work <span>↓</span></a><a className="quiet-link" href="#contact">Start a conversation <span>↗</span></a></div>
        </div>
        <div className="hero-scroll">Scroll to explore <span>↓</span></div>
      </section>

      <section className="intro shell"><div className="section-label">00 / What I build</div><div><p className="intro-lead">I build at the intersection of machine learning, software infrastructure, and human-centered products.</p><p className="intro-detail">Currently studying Computer Engineering at UC Santa Cruz, with minors in Computer Science and Statistics.</p><div className="capability-grid"><div><span>01</span><h3>Applied AI</h3><p>LLM evaluation, computer vision, NLP, and systems that turn models into useful tools.</p></div><div><span>02</span><h3>Software</h3><p>FastAPI, React, Next.js, observability, and reliable infrastructure for real users.</p></div><div><span>03</span><h3>Leadership</h3><p>Cross-functional teams, clear roadmaps, and community-focused products at UCSC Blueprint.</p></div></div></div></section>

      <section className="section shell" id="work"><div className="section-top"><span>01 / Selected work</span><span>Proof of life</span></div><div className="project-list">{projects.map((project) => <article className="project" key={project.number}><span className="project-number">{project.number}</span><div><h2>{project.title}</h2><p>{project.description}</p><span className="project-tags">{project.tags}</span></div><span className="project-arrow">↗</span></article>)}</div></section>

      <section className="section shell" id="experience"><div className="section-top"><span>02 / Experience</span><span>Selected timeline</span></div><div className="timeline"><div><span>Jun — Aug 2026</span><h3>Applied Scientist Intern · Microsoft Security AI</h3><p>Evaluated 10+ frontier LLMs across six cybersecurity benchmarks and began an automated evaluation pipeline targeting 5,000+ evaluations.</p></div><div><span>Jun — Sep 2025</span><h3>Software Engineering Intern · Palo Alto Networks</h3><p>Built a production LLM observability copilot and improved token usage by 60%, latency by 40%, and incident detection speed by 30%.</p></div><div><span>Jun — Sep 2024</span><h3>Software Engineering Intern · Scenera</h3><p>Built real-time computer vision and multimodal AI systems, increasing spill-detection accuracy by 75% and reducing false positives by 35%.</p></div></div></section>

      <section className="section shell" id="leadership"><div className="section-top"><span>03 / Leadership</span><span>Community and ownership</span></div><div className="leadership"><div className="leadership-intro"><h2>Build teams<br /><i>that build boldly.</i></h2><p>At UCSC Blueprint, I lead cross-functional teams and nonprofit partners from requirements and roadmapping through delivery.</p></div><div className="leadership-grid"><article><span>01 / President</span><h3>UCSC Blueprint</h3><p>Lead a student organization building community-focused software products for nonprofit partners.</p></article><article><span>02 / Product delivery</span><h3>100+ users served</h3><p>Helped ship web and mobile applications with React, Next.js, React Native, Supabase, and Firebase.</p></article><article><span>03 / Team growth</span><h3>Former VP of Projects</h3><p>Developed project teams and improved beta usability by 40% through clearer requirements and iteration.</p></article></div></div></section>

      <section className="about shell" id="about"><div className="section-label">04 / About me</div><div><h2>Curious about how systems become <i>useful.</i></h2><p>I’m a Computer Engineering student at the University of California, Santa Cruz, pursuing minors in Computer Science and Statistics with a 3.70 GPA.</p><p className="muted">My work spans machine learning, computer vision, LLM evaluation, backend systems, and product development. I’m especially interested in the point where rigorous engineering becomes something people can actually use.</p></div></section>

      <footer className="footer shell" id="contact"><div className="section-label">05 / Contact</div><h2>Have a good question?<br /><i>Let&apos;s build something useful.</i></h2><a className="email" href="mailto:avnigandhi05@gmail.com"><Icon name="mail" /> avnigandhi05@gmail.com <span>↗</span></a><div className="footer-bottom"><span>© 2026 Avni Gandhi</span><div className="social-links"><a href="#top">Back to top ↑</a><a className="social-link" href="https://github.com/avnig05" aria-label="Avni Gandhi on GitHub"><Icon name="github" /><span>GitHub</span></a><a className="social-link" href="https://www.linkedin.com/in/avni-gandhi/" aria-label="Avni Gandhi on LinkedIn"><Icon name="linkedin" /><span>LinkedIn</span></a></div></div></footer>
    </main>
  );
}
