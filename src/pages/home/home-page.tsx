import { useState } from 'react';

import { characters } from '@/shared/data/characters';
import { UNIVERSES, UNIVERSE_COLORS } from '@/entities/character/model';
import { CharacterList, CharacterDetails } from '@/entities/character/ui';
import { useFilteredCharacters } from '@/features/character-filters/model';
import {
  SearchInput,
  UniverseFilter,
  RoleFilter,
  AlignmentFilter,
} from '@/features/character-filters/ui';

export const HomePage = () => {
  // State
  const [search, setSearch] = useState('');
  const [selectedUniverse, setSelectedUniverse] = useState('all');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedAlignment, setSelectedAlignment] = useState('all');
  const [activeUniverseTab, setActiveUniverseTab] = useState('all');
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(
    characters[0]?.id ?? null,
  );

  // Filtering
  const filteredCharacters = useFilteredCharacters(characters, {
    search,
    universe: selectedUniverse,
    role: selectedRole,
    alignment: selectedAlignment,
    activeUniverseTab,
  });

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
          <SearchInput value={search} onChange={setSearch} />
          <UniverseFilter value={selectedUniverse} onChange={setSelectedUniverse} />
          <RoleFilter value={selectedRole} onChange={setSelectedRole} />
          <AlignmentFilter value={selectedAlignment} onChange={setSelectedAlignment} />

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
                  className={`dot ${
                    universe === 'all' ? 'gray' : UNIVERSE_COLORS[universe] || 'gray'
                  }`}
                />
                {universe === 'all' ? 'All' : universe}
              </button>
            ))}
          </div>
        </section>

        <section id="charactersGrid" className="characters-grid" aria-label="Characters list">
          {filteredCharacters.length > 0 ? (
            <CharacterList
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
        <CharacterDetails character={selectedCharacter} />
      </aside>
    </div>
  );
};
