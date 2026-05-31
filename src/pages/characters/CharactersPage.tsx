import { useState } from "react";
import { characters } from "@/shared/data/characters";
import { Toolbar, CharacterCard, DetailsPanel } from "@/features/character/components";

export function CharactersPage() {
  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");
  const [selectedId, setSelectedId] = useState(characters[0].id);

  const filtered = characters.filter((character) => {
    const matchesSearch = character.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesClass = classFilter === "all" || character.className === classFilter;
    const matchesRole = roleFilter === "all" || character.role === roleFilter;
    const matchesLevel =
      levelFilter === "all" ||
      (levelFilter === "1-5" && character.level <= 5) ||
      (levelFilter === "6-10" && character.level >= 6 && character.level <= 10);

    return matchesSearch && matchesClass && matchesRole && matchesLevel;
  });

  const selectedCharacter = characters.find((c) => c.id === selectedId);

  return (
    <div className="page-layout">
      <aside className="sidebar">
        <div className="logo">
          <div className="dice">◇</div>
          <div>
            <strong>DND</strong>
            <span>LIBRARY</span>
          </div>
        </div>

        <nav className="nav">
          <button className="nav-item active">☠ Characters</button>
          <button className="nav-item">🗺 One Shots</button>
          <button className="nav-item">📜 Campaigns</button>
          <button className="nav-item">🧙 Party Builder</button>
          <button className="nav-item">⭐ Favorites</button>
          <button className="nav-item">⚙ Settings</button>
        </nav>

        <button className="about-btn">About Project</button>
      </aside>

      <main className="page">
        <section className="content">
          <header className="page-header">
            <div>
              <h1>Characters</h1>
              <p>
                Browse the library of unique characters ready for your next
                adventure.
              </p>
            </div>
            <button className="primary-btn">＋ Add Character</button>
          </header>

          <Toolbar
            search={search}
            classFilter={classFilter}
            roleFilter={roleFilter}
            levelFilter={levelFilter}
            onSearchChange={setSearch}
            onClassFilterChange={setClassFilter}
            onRoleFilterChange={setRoleFilter}
            onLevelFilterChange={setLevelFilter}
          />

          {filtered.length === 0 ? (
            <div className="empty">No characters found.</div>
          ) : (
            <section className="characters-grid">
              {filtered.map((character) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                  isActive={character.id === selectedId}
                  onClick={() => setSelectedId(character.id)}
                />
              ))}
            </section>
          )}
        </section>

        <DetailsPanel character={selectedCharacter} />
      </main>
    </div>
  );
}