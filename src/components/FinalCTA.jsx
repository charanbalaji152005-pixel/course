import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function FinalCTA({ onExplore, onNotify }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setEmail('');
    onNotify("You're in! We'll send course picks and offers to your inbox.");
  };

  return (
    <section className="final-cta section-pad">
      <div className="cta-spark" aria-hidden="true">✳</div>
      <div className="eyebrow">THE BEST TIME TO START IS NOW</div>
      <h2>Ready when<br /><span>you are.</span></h2>
      <p>Your next skill is closer than you think. Take the first step today.</p>
      <button className="button button-dark" onClick={onExplore}>Explore all courses <ArrowRight size={16} /></button>

      <form className="newsletter" onSubmit={onSubmit} noValidate>
        <label htmlFor="newsletter-email">Get course picks and offers each week</label>
        <div className="newsletter-row">
          <input
            id="newsletter-email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={!!error}
            aria-describedby={error ? 'newsletter-error' : undefined}
          />
          <button type="submit" className="button button-dark">Subscribe</button>
        </div>
        {error && <p id="newsletter-error" className="form-error">{error}</p>}
      </form>
      <small>No pressure. Just possibilities.</small>
    </section>
  );
}
