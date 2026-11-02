import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/content.js';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section section-pad" id="faq">
      <div className="section-heading">
        <div><div className="eyebrow">GOOD QUESTIONS</div><h2>Before you start.</h2></div>
        <p>Quick answers to the things learners ask us most.</p>
      </div>
      <div className="faq-list">
        {faqs.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={item.q} className={`faq-item ${open ? 'open' : ''}`}>
              <button
                className="faq-question"
                aria-expanded={open}
                aria-controls={`faq-answer-${i}`}
                onClick={() => setOpenIndex(open ? -1 : i)}
              >
                <span>{item.q}</span>
                <ChevronDown size={18} />
              </button>
              <div id={`faq-answer-${i}`} className="faq-answer" hidden={!open}>
                <p>{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
