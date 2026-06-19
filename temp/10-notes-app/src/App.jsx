import { useState } from "react";
const accentColors = [
    "var(--accent-teal)",
    "var(--accent-purple)",
    "var(--accent-amber)",
    "var(--accent-coral)",
    "var(--accent-blue)",
    "var(--accent-pink)",
    "var(--accent-lime)",
    "var(--accent-yellow)",
    "var(--accent-cyan)",
    "var(--accent-peach)"
  ];
function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Welcome to ThoughtLasso",
      content: "This note is hardcoded directly inside the App.jsx file.",
      date: "19 Jun 2026, 07:04 pm",
      accent: "var(--accent-coral)"
    }
  ]);

  const [noteTitle, setnoteTitle] = useState("");
  const [content, setcontent] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (!noteTitle.trim() || !content.trim()) return;
    const randomColor = accentColors[Math.floor(Math.random() * accentColors.length)];

    const newNote = {
      id: Date.now(), // Generates a unique ID
      title: noteTitle,
      content: content,
      date: new Date().toLocaleString('en-GB', { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true // Changes it to 12-hour format with AM/PM
      }),
      accent: randomColor
    };

    setNotes([newNote, ...notes]);
    
    setnoteTitle("");
    setcontent("");
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <span className="app-logo"><i className="fa-solid fa-note-sticky fa-2xl"></i></span>
        <h1 className="main-heading">ThoughtLasso</h1>
        <p className="main-subheading">Capture your thoughts, simply.</p>
      </header>

      <main className="app-body">
        {/* LEFT — Note Editor */}
        <section className="note-take">
          <div className="section-label">
            <span className="label-dot" style={{ background: "var(--accent-teal)" }}></span>
            New Note
          </div>
          <h2 className="note-take-heading">What's on your mind?</h2>

          <form className="note-form" onSubmit={submitHandler}>
            <div className="field-group">
              <label className="field-label" htmlFor="note-title">Title</label>
              <input
                id="note-title"
                type="text"
                className="note-heading-input"
                placeholder="Give your note a title..."
                value={noteTitle}
                onChange={(event) => setnoteTitle(event.target.value)}
              />
            </div>

            <div className="field-group">
              <label className="field-label" htmlFor="note-body">Content</label>
              <textarea
                id="note-body"
                className="note-content-input"
                placeholder="Start writing here..."
                rows="10"
                value={content}
                onChange={(event) => setcontent(event.target.value)}
              ></textarea>
            </div>

            <div className="form-footer">
              <span className="char-hint">Keep it clear, keep it useful.</span>
              <button type="submit" className="submit-note-btn">
                Save Note <span className="btn-arrow">→</span>
              </button>
            </div>
          </form>
        </section>

        {/* RIGHT — Saved Notes Sidebar */}
        <aside className="note-view">
          <div className="section-label">
            <span className="label-dot" style={{ background: "var(--accent-coral)" }}></span>
            Saved Notes
          </div>
          <p className="note-count">{notes.length} notes</p>

          <div className="notes-list">
            {notes.map((note, index) => (
              <div className="note-card" key={note.id}>
                <div className="note-card-accent" style={{ background: note.accent }}></div>
                <div className="note-card-body">
                  <div className="note-card-meta">
                    {/* Number notes dynamically based on their position */}
                    <span className="note-card-num">0{notes.length - index}</span>
                    <span className="note-card-date">{note.date}</span>
                  </div>
                  <h3 className="note-card-title">{note.title}</h3>
                  <p className="note-card-preview">{note.content}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;