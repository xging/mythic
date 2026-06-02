import { useMemo, useState } from 'react';

import { characters } from '@/shared/data/characters';
import { CharactersList } from '@/features/character/components';
import { DetailsPanel } from '@/features/character/components/DetailsPanel/DetailsPanel';
// import type { Character } from '@/features/character/types/character';

const UNIVERSES = [
  'all',
  'My Universe',
  'Fantasy',
  'Sci-Fi',
  'Modern',
  'Anime',
  'Superhero',
  'Others',
];

const ROLES = [
  'all',
  'Healer',
  'Leader',
  'Scout',
  'Stealth',
  'Support',
  'Paragon',
  'Human',
  'Rogue',
];

const ALIGNMENTS = ['all', 'Good', 'Neutral', 'Chaotic', 'Unknown'];

export function HomePage() {
  const [search, setSearch] = useState('');
  const [universeFilter, setUniverseFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');
  const [alignmentFilter, setAlignmentFilter] = useState('all');
  const [activeUniverseTab, setActiveUniverseTab] = useState('all');
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(
    characters[0]?.id ?? null,
  );

  const filteredCharacters = useMemo(
    () =>
      characters.filter((character) => {
        const normalizedSearch = search.trim().toLowerCase();
        const matchesSearch =
          normalizedSearch.length === 0 ||
          [character.name, character.origin, character.role, character.universe]
            .join(' ')
            .toLowerCase()
            .includes(normalizedSearch);

        const matchesSelectUniverse =
          universeFilter === 'all' || character.universe === universeFilter;
        const matchesTabUniverse =
          activeUniverseTab === 'all' || character.universe === activeUniverseTab;
        const matchesRole = roleFilter === 'all' || character.roleFilter === roleFilter;
        const matchesAlignment =
          alignmentFilter === 'all' || character.alignment === alignmentFilter;

        return (
          matchesSearch &&
          matchesSelectUniverse &&
          matchesTabUniverse &&
          matchesRole &&
          matchesAlignment
        );
      }),
    [search, universeFilter, roleFilter, alignmentFilter, activeUniverseTab],
  );

  const selectedCharacter =
    filteredCharacters.find((character) => character.id === selectedCharacterId) ||
    filteredCharacters[0] ||
    characters[0] ||
    null;

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <a className="logo" href="#">
          <div className="logo-mark">◇</div>
          <div>
            <strong>NEXUS</strong>
            <span>Multiverse Archive</span>
          </div>
        </a>

        <nav className="sidebar-nav" aria-label="Main navigation">
          <p className="nav-title">Explore</p>
          <button type="button" className="nav-link active">
            <span className="nav-icon">◉</span>
            Explore
          </button>
          <button type="button" className="nav-link">
            <span className="nav-icon">◎</span>
            Universes
          </button>
          <button type="button" className="nav-link active-purple">
            <span className="nav-icon">♙</span>
            Characters
          </button>
          <button type="button" className="nav-link">
            <span className="nav-icon">☍</span>
            Teams
          </button>
          <button type="button" className="nav-link">
            <span className="nav-icon">⌘</span>
            Stories
          </button>
          <button type="button" className="nav-link">
            <span className="nav-icon">⌖</span>
            Locations
          </button>
          <button type="button" className="nav-link">
            <span className="nav-icon">▣</span>
            Items
          </button>
          <button type="button" className="nav-link">
            <span className="nav-icon">⊕</span>
            Timeline
          </button>
        </nav>

        <nav className="sidebar-nav sidebar-nav-secondary" aria-label="User space">
          <p className="nav-title">My Space</p>
          <button type="button" className="nav-link">
            <span className="nav-icon">♙</span>
            My Characters
          </button>
          <button type="button" className="nav-link">
            <span className="nav-icon">✥</span>
            My Campaigns
          </button>
          <button type="button" className="nav-link">
            <span className="nav-icon">▱</span>
            Saved
          </button>
          <button type="button" className="nav-link">
            <span className="nav-icon">▤</span>
            Notes
          </button>
        </nav>

        <div className="sidebar-footer">
          <button type="button" className="nav-link">
            <span className="nav-icon">⚙</span>
            Settings
          </button>

          <div className="user-mini">
            <div className="avatar" />
            <div>
              <strong>Archivist</strong>
              <span>Level 12</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <header className="page-header">
          <div>
            <h1>Characters</h1>
            <p>Explore heroes, villains and legends from across the multiverse.</p>
          </div>

          <div className="header-actions">
            <button type="button" className="primary-button">
              + Add Character
            </button>
            <button type="button" className="icon-button" aria-label="Grid view">
              ▦
            </button>
            <button type="button" className="icon-button" aria-label="List view">
              ☰
            </button>
          </div>
        </header>

        <section className="filters-bar" aria-label="Character filters">
          <label className="search-field">
            <input
              id="searchInput"
              type="search"
              value={search}
              placeholder="Search characters..."
              onChange={(event) => setSearch(event.target.value)}
            />
            <span>⌕</span>
          </label>

          <select
            value={universeFilter}
            onChange={(event) => setUniverseFilter(event.target.value)}
          >
            {UNIVERSES.map((universe) => (
              <option key={universe} value={universe}>
                {universe === 'all' ? 'All Universes' : universe}
              </option>
            ))}
          </select>

          <select value={roleFilter} onChange={(event) => setRoleFilter(event.target.value)}>
            {ROLES.map((role) => (
              <option key={role} value={role}>
                {role === 'all' ? 'All Roles' : role}
              </option>
            ))}
          </select>

          <select
            value={alignmentFilter}
            onChange={(event) => setAlignmentFilter(event.target.value)}
          >
            {ALIGNMENTS.map((alignment) => (
              <option key={alignment} value={alignment}>
                {alignment === 'all' ? 'All Alignments' : alignment}
              </option>
            ))}
          </select>

          <div className="sort-control">
            <span>Sort by</span>
            <button type="button">Recently Added</button>
          </div>
        </section>

        <section className="universe-tabs" aria-label="Universe categories">
          <div className="tabs-header">
            <p>Universes</p>
            <button type="button">Manage</button>
          </div>

          <div className="tabs-list">
            {UNIVERSES.map((universe) => (
              <button
                key={universe}
                type="button"
                className={`universe-tab ${universe === activeUniverseTab ? 'active' : ''}`}
                onClick={() => setActiveUniverseTab(universe)}
              >
                <span
                  className={`dot ${universe === 'My Universe' ? 'purple' : universe === 'Fantasy' ? 'cyan' : universe === 'Sci-Fi' ? 'green' : universe === 'Modern' ? 'orange' : universe === 'Anime' ? 'red' : universe === 'Superhero' ? 'yellow' : 'gray'}`}
                />
                {universe === 'all' ? 'All' : universe}
              </button>
            ))}
          </div>
        </section>

        <section id="charactersGrid" className="characters-grid" aria-label="Characters list">
          {filteredCharacters.length > 0 ? (
            <CharactersList
              characters={filteredCharacters}
              selectedCharacterId={selectedCharacter?.id ?? null}
              onCharacterSelect={setSelectedCharacterId}
            />
          ) : (
            <div className="empty-state">No characters found.</div>
          )}
        </section>

        <nav className="pagination" aria-label="Pagination">
          <button type="button" className="page-button">
            ‹
          </button>
          <button type="button" className="page-button active">
            1
          </button>
          <button type="button" className="page-button">
            2
          </button>
          <button type="button" className="page-button">
            3
          </button>
          <button type="button" className="page-button">
            4
          </button>
          <button type="button" className="page-button">
            5
          </button>
          <span>...</span>
          <button type="button" className="page-button">
            12
          </button>
          <button type="button" className="page-button">
            ›
          </button>
        </nav>
      </main>

      <aside id="detailsPanel" className="details-panel">
        <DetailsPanel character={selectedCharacter} />
      </aside>
    </div>
  );
}
