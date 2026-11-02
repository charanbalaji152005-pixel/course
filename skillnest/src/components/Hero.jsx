import { ArrowRight, Play, Search, Check } from 'lucide-react';

export default function Hero({ query, setQuery, onFind }) {
  const onSubmit = (e) => {
    e.preventDefault();
    onFind();
  };

  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT CHAPTER STARTS HERE</div>
        <h1>Learn a skill.<br /><span>Change your</span> world.</h1>
        <p className="hero-description">
          Big goals start with one small lesson. Learn from people who do the work, build skills that matter, and make your next move count.
        </p>
        <form className="hero-search" onSubmit={onSubmit} role="search">
          <Search size={19} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What do you want to learn?"
            aria-label="Search courses"
          />
          <button type="submit">Find a course <ArrowRight size={16} /></button>
        </form>
        <div className="hero-proof">
          <div className="avatar-stack">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces" alt="" />
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces" alt="" />
            <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&h=80&fit=crop&crop=faces" alt="" />
            <span>+</span>
          </div>
          <div><strong>Join 2.4M+ learners</strong><small>building their future with us</small></div>
        </div>
      </div>
      <div className="hero-art">
        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=90"
            alt="Students collaborating and learning together"
          />
          <div className="image-shade" />
          <div className="floating-note note-top">
            <span className="note-icon"><Play size={13} fill="currentColor" /></span>
            <span><b>Learn at your pace</b><small>Anytime, anywhere</small></span>
          </div>
          <div className="floating-note note-bottom">
            <span className="note-icon note-green"><Check size={15} /></span>
            <span><b>Skill unlocked!</b><small>One lesson at a time</small></span>
          </div>
          <div className="hero-sticker"><span>MAKE</span><strong>IT<br />HAPPEN.</strong><ArrowRight size={20} /></div>
        </div>
        <div className="hero-scribble" aria-hidden="true">✳</div>
      </div>
    </section>
  );
}
