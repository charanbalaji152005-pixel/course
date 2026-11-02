import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TrustStrip from './components/TrustStrip.jsx';
import Categories from './components/Categories.jsx';
import Courses from './components/Courses.jsx';
import CourseModal from './components/CourseModal.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import FinalCTA from './components/FinalCTA.jsx';
import Footer from './components/Footer.jsx';
import { ALL, courses } from './data/courses.js';

const SAVED_KEY = 'skillnest-saved';
const ENROLLED_KEY = 'skillnest-enrolled';

// Read a list of ids from localStorage, falling back safely if storage is unavailable.
function readList(key) {
  try {
    const value = JSON.parse(window.localStorage.getItem(key));
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function writeList(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage may be blocked; the feature still works for this visit */
  }
}

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function App() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [saved, setSaved] = useState(() => readList(SAVED_KEY));
  const [enrolled, setEnrolled] = useState(() => readList(ENROLLED_KEY));
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [toast, setToast] = useState('');
  const toastTimer = useRef(null);

  useEffect(() => writeList(SAVED_KEY, saved), [saved]);
  useEffect(() => writeList(ENROLLED_KEY, enrolled), [enrolled]);
  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const notify = useCallback((message) => {
    setToast(message);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 2600);
  }, []);

  const filteredCourses = useMemo(() => {
    const term = query.trim().toLowerCase();
    return courses.filter((course) => {
      const inCategory = activeCategory === ALL || course.category === activeCategory;
      const text = `${course.title} ${course.instructor} ${course.category}`.toLowerCase();
      return inCategory && text.includes(term);
    });
  }, [query, activeCategory]);

  const toggleSaved = useCallback((id) => {
    const isSaved = saved.includes(id);
    setSaved((current) => (isSaved ? current.filter((x) => x !== id) : [...current, id]));
    notify(isSaved ? 'Removed from your wishlist' : 'Saved to your wishlist');
  }, [saved, notify]);

  const enroll = useCallback((course) => {
    if (enrolled.includes(course.id)) return;
    setEnrolled((current) => [...current, course.id]);
    notify(`Enrolled in "${course.title}"`);
  }, [enrolled, notify]);

  const clearFilters = () => {
    setQuery('');
    setActiveCategory(ALL);
  };

  const selectCategory = (name) => {
    setActiveCategory(name);
    scrollToId('courses');
  };

  const onFind = () => scrollToId('courses');

  return (
    <div className="app-shell">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} onNotify={notify} />

      <main>
        <Hero query={query} setQuery={setQuery} onFind={onFind} />
        <TrustStrip />
        <Categories activeCategory={activeCategory} onSelect={selectCategory} />
        <Courses
          courses={filteredCourses}
          total={courses.length}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          query={query}
          showAll={showAll}
          setShowAll={setShowAll}
          saved={saved}
          onToggleSave={toggleSaved}
          onOpen={setSelectedCourse}
          onClearFilters={clearFilters}
          onNotify={notify}
        />
        <HowItWorks onExplore={onFind} />
        <Testimonials />
        <FAQ />
        <FinalCTA onExplore={onFind} onNotify={notify} />
      </main>

      <Footer />

      {selectedCourse && (
        <CourseModal
          course={selectedCourse}
          enrolled={enrolled.includes(selectedCourse.id)}
          saved={saved.includes(selectedCourse.id)}
          onClose={() => setSelectedCourse(null)}
          onEnroll={enroll}
          onToggleSave={toggleSaved}
        />
      )}

      {toast && (
        <div className="toast" role="status" aria-live="polite">
          <Check size={17} />{toast}
        </div>
      )}
    </div>
  );
}
