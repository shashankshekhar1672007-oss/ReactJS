import { useState } from "react";
import "./Card.css";

const expSegments = [
  "#E74C3C", "#E67E22", "#F1C40F", "#2ECC71",
  "#1ABC9C", "#3498DB", "#9B59B6", "#E91E63",
  "#FF5722", "#4CAF50", "#00BCD4", "#673AB7",
];

export default function Card({
  name,
  tagline,
  likes,
  posts,
  views,
  experience = 0 
}) {
  const [followed, setFollowed] = useState(false);
  
  // Calculate ticks to maintain a consistent progress bar width
  const totalTicks = 18; 
  const filledTicks = Math.min(Math.max(0, experience), totalTicks);
  const emptyTicks = totalTicks - filledTicks;

  return (
    <div className="card">
      {/* Banner */}
      <div className="card__banner">
        <button
          className={`card__follow-btn ${followed ? "card__follow-btn--active" : ""}`}
          onClick={() => setFollowed((f) => !f)}
        >
          {followed ? "Following ✓" : "Follow +"}
        </button>
      </div>

      {/* Avatar + XP row */}
      <div className="card__avatar-row">
        <div className="card__avatar-wrap">
          <div className="card__avatar-placeholder">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <circle cx="40" cy="40" r="40" fill="#d1dce8"/>
              <circle cx="40" cy="32" r="14" fill="#a0b4c8"/>
              <ellipse cx="40" cy="68" rx="22" ry="16" fill="#a0b4c8"/>
            </svg>
          </div>
        </div>
        <div className="card__xp">
          <span className="card__xp-label">exp.</span>
          <div className="card__xp-bar">
            {Array.from({ length: filledTicks }).map((_, i) => (
              <span 
                key={`c-${i}`} 
                className="card__xp-tick" 
                style={{ backgroundColor: expSegments[i % expSegments.length] }} 
              />
            ))}
            {Array.from({ length: emptyTicks }).map((_, i) => (
              <span key={`g-${i}`} className="card__xp-tick card__xp-tick--gray" />
            ))}
          </div>
        </div>
      </div>

      {/* Name & bio */}
      <div className="card__bio">
        <h2 className="card__name">{name}</h2>
        <p className="card__tagline">{tagline}</p>
      </div>

      {/* Stats */}
      <div className="card__stats">
        <div className="card__stat">
          <span className="card__stat-value">{likes}</span>
          <span className="card__stat-label">Likes</span>
        </div>
        <div className="card__stat">
          <span className="card__stat-value">{posts}</span>
          <span className="card__stat-label">Posts</span>
        </div>
        <div className="card__stat">
          <span className="card__stat-value">{views}</span>
          <span className="card__stat-label">Views</span>
        </div>
      </div>

      {/* Social links */}
      <div className="card__socials">
        <a href="#" className="card__social-btn" aria-label="Instagram">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></svg>
        </a>
        <a href="#" className="card__social-btn" aria-label="X (Twitter)">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.402 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="#" className="card__social-btn" aria-label="Threads">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/><path d="M16 10c-.5-2-2-3-4-3-2.5 0-4 1.8-4 4s1.5 4 4 4c2 0 3.5-1 3.8-3"/><path d="M12 9v6"/></svg>
        </a>
      </div>
    </div>
  );
}
