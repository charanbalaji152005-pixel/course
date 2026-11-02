import { ArrowRight } from 'lucide-react';
import { categories } from '../data/courses.js';
import { iconMap } from './icons.js';

export default function Categories({ activeCategory, onSelect }) {
  return (
    <section className="categories-section section-pad" id="categories">
      <div className="section-heading">
        <div><div className="eyebrow">FIND YOUR THING</div><h2>Curiosity looks good on you.</h2></div>
        <p>Whatever you're dreaming of doing next, there's a place to start.</p>
      </div>
      <div className="category-grid">
        {categories.map((cat, index) => {
          const Icon = iconMap[cat.icon];
          return (
            <button
              key={cat.name}
              className={`category-card category-${index} ${activeCategory === cat.name ? 'selected' : ''}`}
              onClick={() => onSelect(cat.name)}
            >
              <span className="category-icon"><Icon size={22} /></span>
              <span className="category-text"><b>{cat.name}</b><small>{cat.count} courses</small></span>
              <ArrowRight className="category-arrow" size={18} />
            </button>
          );
        })}
      </div>
    </section>
  );
}
