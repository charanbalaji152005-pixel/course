import { ArrowRight, ChevronRight } from 'lucide-react';
import { steps } from '../data/content.js';

export default function HowItWorks({ onExplore }) {
  return (
    <section className="learning-banner section-pad" id="how-it-works">
      <div className="banner-content">
        <div className="eyebrow light">A BETTER WAY TO GROW</div>
        <h2>Your goals.<br />Your rhythm.<br /><em>Your future.</em></h2>
        <p>Short lessons, practical projects, and instructors who make the complicated feel simple. Learning should fit your life — not the other way around.</p>
        <button className="button button-light" onClick={onExplore}>Find your first course <ArrowRight size={16} /></button>
      </div>
      <div className="banner-steps">
        {steps.map((step, i) => (
          <div className="step-item" key={step.title}>
            <span>0{i + 1}</span>
            <div><b>{step.title}</b><small>{step.text}</small></div>
            <ChevronRight />
          </div>
        ))}
        <div className="banner-orbit" aria-hidden="true">✳</div>
      </div>
    </section>
  );
}
