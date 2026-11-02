import { useEffect } from 'react';
import { Check, Clock3, Star, Users, X } from 'lucide-react';

export default function CourseModal({ course, enrolled, saved, onClose, onEnroll, onToggleSave }) {
  // Close with Escape and lock background scroll while open
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close course details"><X size={18} /></button>
        <div className={`modal-image ${course.color}`}>
          <img src={course.image} alt="" />
        </div>
        <div className="modal-body">
          <div className="course-category">{course.category} <span>•</span> {course.level}</div>
          <h2 id="modal-title">{course.title}</h2>
          <p className="instructor">by {course.instructor}</p>
          <div className="course-meta modal-meta">
            <span><Star size={14} fill="currentColor" /> {course.rating}</span>
            <span><Users size={14} /> {course.students} students</span>
            <span><Clock3 size={14} /> {course.duration}</span>
          </div>
          <p className="modal-desc">{course.description}</p>
          <h4>What you'll learn</h4>
          <ul className="learn-list">
            {course.learn.map((item) => (
              <li key={item}><Check size={15} /> {item}</li>
            ))}
          </ul>
          <div className="modal-actions">
            <div className="modal-price"><strong>{course.price}</strong><del>{course.oldPrice}</del></div>
            <button className="button button-dark" onClick={() => onEnroll(course)} disabled={enrolled}>
              {enrolled ? 'Enrolled ✓' : 'Enroll now'}
            </button>
            <button className="button button-outline" onClick={() => onToggleSave(course.id)}>
              {saved ? 'Saved' : 'Save for later'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
