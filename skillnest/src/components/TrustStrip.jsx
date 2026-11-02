import { BookOpen } from 'lucide-react';
import { stats } from '../data/content.js';
import { iconMap } from './icons.js';

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="SkillNest at a glance">
      <span>LEARNING THAT MOVES YOU FORWARD</span>
      <div className="trust-items">
        {stats.map((s) => {
          const Icon = iconMap[s.icon] || BookOpen;
          return (
            <div key={s.label}>
              <Icon size={18} />
              <b>{s.value}</b>
              <small>{s.label}</small>
            </div>
          );
        })}
      </div>
    </section>
  );
}
