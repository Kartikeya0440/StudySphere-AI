"use client";

import { useMemo, useState } from "react";

type Section = "Overview" | "AI Tutor" | "My Library" | "Quiz Lab" | "Flashcards" | "Study Planner" | "My Progress";
const sections: { name: Section; icon: string }[] = [
  { name: "Overview", icon: "✦" },
  { name: "AI Tutor", icon: "🤖" },
  { name: "My Library", icon: "📚" },
  { name: "Quiz Lab", icon: "🧩" },
  { name: "Flashcards", icon: "🗂️" },
  { name: "Study Planner", icon: "🗓️" },
  { name: "My Progress", icon: "📈" },
];

const subjects = [
  { name: "Mathematics", detail: "Algebra • Geometry", progress: 68, color: "purple", emoji: "📐" },
  { name: "Science", detail: "Physics • Chemistry • Biology", progress: 82, color: "mint", emoji: "🧪" },
  { name: "English", detail: "Reading • Grammar • Writing", progress: 54, color: "peach", emoji: "✍️" },
];

const tasks = [
  { time: "4:00 PM", title: "Revise: Linear equations", subject: "Mathematics", color: "purple" },
  { time: "4:45 PM", title: "Read: The cell", subject: "Science", color: "mint" },
  { time: "5:30 PM", title: "10-minute vocabulary sprint", subject: "English", color: "peach" },
];

export default function StudySphere() {
  const [active, setActive] = useState<Section>("Overview");
  const [query, setQuery] = useState("");
  const [asked, setAsked] = useState("");
  const [answer, setAnswer] = useState("");
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const filteredSubjects = useMemo(
    () => subjects.filter((s) => s.name.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  function askTutor() {
    const q = query.trim();
    if (!q) return;
    setAsked(q);
    setAnswer("This is a preview response so you can explore the interface. When we connect a secure AI provider, StudySphere will explain this topic at your learning level, show examples, cite your uploaded study material when available, and ask a short check-your-understanding question.");
    setQuery("");
    setActive("AI Tutor");
  }

  function toggleTask(title: string) {
    setDone((current) => current.includes(title) ? current.filter((x) => x !== title) : [...current, title]);
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">S<span>✦</span></div>
          <div><strong>StudySphere</strong><small>YOUR LEARNING UNIVERSE</small></div>
        </div>
        <div className="workspace-label">WORKSPACE</div>
        <nav className="nav-list" aria-label="Main navigation">
          {sections.map((item) => (
            <button key={item.name} className={`nav-item ${active === item.name ? "active" : ""}`} onClick={() => setActive(item.name)}>
              <span className="nav-icon">{item.icon}</span><span>{item.name}</span>
              {item.name === "AI Tutor" && <span className="nav-new">NEW</span>}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <div className="streak-card">
            <div className="streak-emoji">🔥</div>
            <div><strong>4 day streak!</strong><small>Keep your learning spark alive.</small></div>
          </div>
          <button className="profile-row" onClick={() => alert("Profile settings will be added in a later milestone.")}>
            <div className="avatar">S</div><div><strong>Student profile</strong><small>Curious learner</small></div><span className="dots">•••</span>
          </button>
        </div>
      </aside>

      <section className="main-area">
        <header className="topbar">
          <div className="breadcrumb">My workspace <span>/</span> {active}</div>
          <div className="top-actions">
            <span className="today-pill">☀️ Tuesday, let's learn!</span>
            <button className="icon-button" aria-label="Notifications" onClick={() => alert("You're all caught up!")}>♧</button>
            <div className="mini-avatar">S</div>
          </div>
        </header>

        <div className="content">
          {active === "Overview" && (
            <>
              <section className="welcome-row">
                <div>
                  <div className="eyebrow">TUESDAY, YOUR DAY TO SHINE ✨</div>
                  <h1>Hey, learner! <span className="wave">👋</span></h1>
                  <p className="subheading">Small steps every day make brilliant things happen.</p>
                </div>
                <div className="level-chip"><span>🌱</span><div><b>Level 3 · Explorer</b><small>Keep growing your skills</small></div></div>
              </section>

              <section className="hero-card">
                <div className="hero-copy">
                  <div className="hero-tag">✦ YOUR PERSONAL LEARNING SIDEKICK</div>
                  <h2>What are we<br/>curious about today?</h2>
                  <p>Ask a question, explore a tricky topic, or get a little help with your study plan.</p>
                  <div className="ask-box">
                    <span>✨</span>
                    <input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && askTutor()} placeholder="Ask StudySphere anything..." aria-label="Ask StudySphere anything"/>
                    <button onClick={askTutor}>Ask AI <span>↗</span></button>
                  </div>
                  <div className="prompt-chips">
                    <button onClick={() => {setQuery("Explain photosynthesis simply");}}>🌿 Explain a topic</button>
                    <button onClick={() => {setQuery("Make me a quick practice quiz");}}>🧠 Make a quiz</button>
                  </div>
                </div>
                <div className="hero-art" aria-hidden="true">
                  <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
                  <div className="planet">📖</div><div className="spark spark-a">✦</div><div className="spark spark-b">✧</div>
                  <div className="float-note note-one">Think big! 💡</div><div className="float-note note-two">You got this ⭐</div>
                </div>
              </section>

              <section className="stat-grid">
                <div className="stat-card lilac"><div className="stat-top"><span>📚</span><span className="stat-label">LEARNING TIME</span></div><strong>2h 35m</strong><small>This week <b>↗ 12%</b></small></div>
                <div className="stat-card butter"><div className="stat-top"><span>🎯</span><span className="stat-label">QUIZ ACCURACY</span></div><strong>78%</strong><small>You're getting sharper!</small></div>
                <div className="stat-card aqua"><div className="stat-top"><span>🏆</span><span className="stat-label">XP EARNED</span></div><strong>340 XP</strong><small>60 XP to next level</small></div>
              </section>

              <section className="section-heading">
                <div><h3>Your learning garden 🌼</h3><p>Look how far you've come.</p></div>
                <button className="text-button" onClick={() => setActive("My Progress")}>View progress →</button>
              </section>
              <section className="subject-grid">
                {subjects.map((s) => <div className="subject-card" key={s.name}>
                  <div className={`subject-icon ${s.color}`}>{s.emoji}</div>
                  <div className="subject-meta"><strong>{s.name}</strong><small>{s.detail}</small></div>
                  <div className="progress-number">{s.progress}%</div>
                  <div className="progress-track"><div className={`progress-fill ${s.color}`} style={{width: `${s.progress}%`}}/></div>
                </div>)}
              </section>

              <section className="bottom-grid">
                <div className="panel">
                  <div className="panel-heading"><div><h3>Today's little missions 🚀</h3><p>One task at a time.</p></div><span className="count-pill">{done.length}/{tasks.length} done</span></div>
                  {tasks.map((t) => <div className={`task-row ${done.includes(t.title) ? "task-done" : ""}`} key={t.title}>
                    <button className="check-circle" onClick={() => toggleTask(t.title)} aria-label={`Mark ${t.title} complete`}>{done.includes(t.title) ? "✓" : ""}</button>
                    <span className="task-time">{t.time}</span><div className="task-info"><strong>{t.title}</strong><small>{t.subject}</small></div><span className={`task-dot ${t.color}`}></span>
                  </div>)}
                </div>
                <div className="quote-card">
                  <div className="quote-stars">✦ ✧ ✦</div>
                  <div className="quote-mark">“</div>
                  <h3>Curiosity is a superpower.</h3>
                  <p>Every question you ask is a new door waiting to open.</p>
                  <span>YOUR DAILY REMINDER 💜</span>
                </div>
              </section>
            </>
          )}

          {active === "AI Tutor" && (
            <section className="page-section">
              <div className="page-title"><div className="eyebrow">YOUR ALWAYS-CURIOUS COMPANION</div><h1>AI Tutor <span>🤖</span></h1><p>Ask questions and learn at your own pace. This starter uses a demo reply until an AI provider is connected.</p></div>
              <div className="tutor-layout">
                <div className="chat-panel">
                  <div className="chat-header"><div className="bot-avatar">✦</div><div><b>StudySphere Tutor</b><small><i></i> Demo mode · AI connection not configured</small></div></div>
                  <div className="chat-body">
                    <div className="chat-message bot-message">Hi there! 🌈 I'm your learning buddy. What would you like to understand today?</div>
                    {asked && <><div className="chat-message user-message">{asked}</div><div className="chat-message bot-message">{answer}</div></>}
                  </div>
                  <div className="chat-compose"><input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === "Enter" && askTutor()} placeholder="Type your question here..."/><button onClick={askTutor}>Send ↗</button></div>
                </div>
                <div className="suggestion-panel"><h3>Try asking…</h3>{["Explain fractions with a pizza example","Why do plants need sunlight?","Help me understand Newton's laws","Give me 5 vocabulary words"].map((q) => <button key={q} onClick={() => setQuery(q)}>✨ {q}</button>)}<div className="tip-box">💡 <b>Learning tip</b><p>Ask follow-up questions. Understanding the “why” is more powerful than memorising the answer.</p></div></div>
              </div>
            </section>
          )}

          {active === "My Library" && (
            <section className="page-section">
              <div className="page-title"><div className="eyebrow">YOUR KNOWLEDGE CORNER</div><h1>My Library <span>📚</span></h1><p>A home for your notes, chapters and learning resources.</p></div>
              <div className="library-toolbar"><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search subjects..."/><button onClick={() => alert("PDF upload will be added in Phase 2. The database and private storage will be configured first.")}>＋ Add material</button></div>
              <div className="subject-grid library-grid">{filteredSubjects.map((s) => <div className="subject-card library-subject" key={s.name}><div className={`subject-icon ${s.color}`}>{s.emoji}</div><div className="subject-meta"><strong>{s.name}</strong><small>{s.detail}</small></div><span className="library-arrow">→</span></div>)}</div>
              <div className="empty-state"><div>🪄</div><h3>Your library will grow with you</h3><p>PDF upload, document reading and AI-generated notes are planned for the next build milestone.</p></div>
            </section>
          )}

          {active === "Quiz Lab" && (
            <section className="page-section">
              <div className="page-title"><div className="eyebrow">PRACTISE MAKES PROGRESS</div><h1>Quiz Lab <span>🧩</span></h1><p>Try a sample question. Later, quizzes will be generated from your own learning materials.</p></div>
              <div className="quiz-card"><div className="quiz-top"><span className="quiz-label">SAMPLE SCIENCE QUIZ</span><span>QUESTION 1 OF 1</span></div><h2>Which part of a plant cell contains chlorophyll?</h2><div className="answers">{["Mitochondria","Chloroplast","Nucleus","Cell wall"].map((a, i) => <button key={a} className={`answer-option ${selected === i ? (i === 1 ? "correct" : "incorrect") : ""}`} onClick={() => setSelected(i)}><span>{String.fromCharCode(65+i)}</span>{a}{selected === i && <b>{i === 1 ? "✓ Correct!" : "Try again"}</b>}</button>)}</div>{selected !== null && <div className="answer-feedback">{selected === 1 ? "Great work! Chloroplasts contain chlorophyll, the green pigment that absorbs light for photosynthesis." : "Not quite. Hint: look for the organelle that captures light energy. Give it another try!"}</div>}</div>
            </section>
          )}

          {active === "Flashcards" && (
            <section className="page-section">
              <div className="page-title"><div className="eyebrow">LITTLE CARDS, BIG IDEAS</div><h1>Flashcards <span>🗂️</span></h1><p>Practise remembering key ideas. AI-generated decks will arrive in a later milestone.</p></div>
              <div className="flashcard" onClick={() => setSelected(selected === 1 ? 0 : 1)}><span className="flash-label">SCIENCE · CELL BIOLOGY</span><div className="flash-emoji">🔬</div><h2>{selected === 1 ? "Mitochondria" : "Which organelle is known as the powerhouse of the cell?"}</h2><p>Click the card to {selected === 1 ? "see the question" : "reveal the answer"}.</p></div>
            </section>
          )}

          {active === "Study Planner" && (
            <section className="page-section">
              <div className="page-title"><div className="eyebrow">MAKE SPACE FOR WHAT MATTERS</div><h1>Study Planner <span>🗓️</span></h1><p>A simple starter timetable. Personalised AI scheduling is planned for a later milestone.</p></div>
              <div className="panel planner-panel"><div className="panel-heading"><div><h3>Tuesday study plan</h3><p>Three small missions for today.</p></div><span className="count-pill">{done.length}/{tasks.length} complete</span></div>{tasks.map((t) => <div className="planner-task" key={t.title}><div className="planner-time">{t.time}</div><div className={`planner-bar ${t.color}`}></div><div><strong>{t.title}</strong><small>{t.subject}</small></div><button className={`check-circle ${done.includes(t.title) ? "checked" : ""}`} onClick={() => toggleTask(t.title)}>{done.includes(t.title) ? "✓" : ""}</button></div>)}</div>
            </section>
          )}

          {active === "My Progress" && (
            <section className="page-section">
              <div className="page-title"><div className="eyebrow">CELEBRATE YOUR GROWTH</div><h1>My Progress <span>📈</span></h1><p>Demo learning indicators. Real analytics will use your saved study and quiz history.</p></div>
              <div className="stat-grid"><div className="stat-card lilac"><div className="stat-top"><span>⏱️</span><span className="stat-label">STUDY TIME</span></div><strong>2h 35m</strong><small>This week</small></div><div className="stat-card butter"><div className="stat-top"><span>🎯</span><span className="stat-label">ACCURACY</span></div><strong>78%</strong><small>Sample data</small></div><div className="stat-card aqua"><div className="stat-top"><span>🌟</span><span className="stat-label">STREAK</span></div><strong>4 days</strong><small>Keep it going</small></div></div>
              <div className="panel progress-panel"><h3>Subject garden 🌷</h3>{subjects.map((s) => <div className="progress-subject" key={s.name}><div><b>{s.emoji} {s.name}</b><span>{s.progress}%</span></div><div className="progress-track"><div className={`progress-fill ${s.color}`} style={{width:`${s.progress}%`}}/></div></div>)}</div>
            </section>
          )}
          <footer className="footer">Made for curious minds <span>✦</span> StudySphere AI · Early prototype</footer>
        </div>
      </section>
    </main>
  );
}
