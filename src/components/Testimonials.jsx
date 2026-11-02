import { testimonials } from '../data/content.js';

export default function Testimonials() {
  return (
    <section className="testimonial-section section-pad" id="reviews">
      <div className="testimonial-top">
        <div><div className="eyebrow">REAL PEOPLE. REAL PROGRESS.</div><h2>Small lessons.<br />Big <span>plot twists.</span></h2></div>
        <div className="rating-block">
          <div className="rating-stars" aria-label="Rated 4.8 out of 5">★★★★★</div>
          <strong>4.8 out of 5</strong>
          <small>Based on 48,000+ learner reviews</small>
        </div>
      </div>
      <div className="quote-grid">
        {testimonials.map((t) => (
          <figure className="testimonial-card" key={t.name}>
            <div className="quote-mark" aria-hidden="true">“</div>
            <blockquote>{t.quote}</blockquote>
            <figcaption className="testimonial-person">
              {t.avatar ? (
                <img src={t.avatar} alt="" />
              ) : (
                <span className="avatar-initials" aria-hidden="true">{t.name.charAt(0)}</span>
              )}
              <div><b>{t.name}</b><small>{t.role}</small></div>
              <span className="testimonial-label">{t.label}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
