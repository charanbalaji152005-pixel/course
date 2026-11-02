import { ArrowRight, Search, Sparkles } from 'lucide-react';
import { ALL, categories } from '../data/courses.js';
import CourseCard from './CourseCard.jsx';

const PREVIEW_COUNT = 3;

export default function Courses({
  courses, activeCategory, setActiveCategory, query, showAll, setShowAll,
  saved, onToggleSave, onOpen, onClearFilters, onNotify, total,
}) {
  const filtering = activeCategory !== ALL || query.trim() !== '';
  const visible = showAll || filtering ? courses : courses.slice(0, PREVIEW_COUNT);
  const canExpand = !filtering && courses.length > PREVIEW_COUNT;

  return (
    <section className="courses-section section-pad" id="courses">
      <div className="section-heading course-heading">
        <div><div className="eyebrow">HANDPICKED FOR YOUR GROWTH</div><h2>Popular courses<span className="heading-period">.</span></h2></div>
        {canExpand && (
          <button className="view-all" onClick={() => setShowAll(!showAll)} aria-expanded={showAll}>
            {showAll ? 'Show featured' : 'View all courses'} <ArrowRight size={16} />
          </button>
        )}
      </div>

      <div className="course-toolbar">
        <div className="filter-pills" role="tablist" aria-label="Filter by category">
          {categories.map((cat) => (
            <button
              key={cat.name}
              role="tab"
              aria-selected={activeCategory === cat.name}
              className={activeCategory === cat.name ? 'active' : ''}
              onClick={() => setActiveCategory(cat.name)}
            >
              {cat.name}
            </button>
          ))}
        </div>
        <div className="result-count" aria-live="polite">{courses.length} of {total} courses</div>
      </div>

      {courses.length > 0 ? (
        <div className="course-grid">
          {visible.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              saved={saved.includes(course.id)}
              onToggleSave={onToggleSave}
              onOpen={onOpen}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Search size={28} />
          <h3>No courses found</h3>
          <p>Try another search or choose a different category.</p>
          <button className="button button-dark" onClick={onClearFilters}>Clear filters</button>
        </div>
      )}

      <div className="course-footnote">
        <span><Sparkles size={15} /> Fresh courses added every week</span>
        <button onClick={() => onNotify("You're all caught up — more courses are on the way!")}>
          Discover your next skill <ArrowRight size={15} />
        </button>
      </div>
    </section>
  );
}
