import { GraduationCap } from 'lucide-react';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <a className="brand" href="#top">
            <span className="brand-mark"><GraduationCap size={21} /></span>
            <span>skill<span className="brand-accent">nest</span></span>
          </a>
          <p>Make learning part of your story.</p>
        </div>
        <div>
          <h4>Learn</h4>
          <a href="#courses">Courses</a>
          <a href="#categories">Categories</a>
          <a href="#how-it-works">How it works</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#reviews">Stories</a>
          <a href="#faq">FAQ</a>
          <a href="mailto:hello@skillnest.example">Contact</a>
        </div>
        <div>
          <h4>Follow</h4>
          <a href="#top">Instagram</a>
          <a href="#top">LinkedIn</a>
          <a href="#top">YouTube</a>
        </div>
      </div>
      <small className="footer-bottom">© {year} SkillNest Learning. Made for curious minds.</small>
    </footer>
  );
}
