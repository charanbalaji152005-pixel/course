import { useState } from 'react';
import { ArrowRight, Bookmark, Clock3, Star, Users } from 'lucide-react';

export default function CourseCard({ course, saved, onToggleSave, onOpen }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="course-card">
      <div className={`course-image ${course.color}`}>
        {!imageFailed && (
          <img src={course.image} alt={course.title} loading="lazy" onError={() => setImageFailed(true)} />
        )}
        <span className="course-tag">{course.tag}</span>
        <button
          className={`save-button ${saved ? 'saved' : ''}`}
          onClick={() => onToggleSave(course.id)}
          aria-label={saved ? `Remove ${course.title} from wishlist` : `Save ${course.title} to wishlist`}
          aria-pressed={saved}
        >
          <Bookmark size={17} fill={saved ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="course-info">
        <div className="course-category">{course.category} <span>•</span> {course.level}</div>
        <h3>{course.title}</h3>
        <p className="instructor">by {course.instructor}</p>
        <div className="course-meta">
          <span><Star size={14} fill="currentColor" /> {course.rating}</span>
          <span><Users size={14} /> {course.students}</span>
          <span><Clock3 size={14} /> {course.duration}</span>
        </div>
        <div className="course-bottom">
          <div><strong>{course.price}</strong><del>{course.oldPrice}</del></div>
          <button onClick={() => onOpen(course)} aria-label={`View details for ${course.title}`}>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}
