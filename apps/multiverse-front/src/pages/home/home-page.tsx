import { useState } from 'react';
import { Link } from 'react-router-dom';

import { UNIVERSES, UNIVERSE_COLORS } from '@dndshka/entities/character/model';
import { useCharacters } from '@dndshka/shared/contexts';
import type { Universe, Role, Alignment } from '@dndshka/entities/character/model';
import { CharacterList, CharacterDetails } from '@dndshka/entities/character/ui';
import { useFilteredCharacters } from '@dndshka/features/character-filters/model';
import { SearchInput, RoleFilter, AlignmentFilter } from '@dndshka/features/character-filters/ui';
import { featuresConfig } from '@dndshka/shared/config/features';

const {
  headerActions: { addCharacterButton, viewToggle },
  filters: {
    search: searchEnabled,
    role: roleEnabled,
    alignment: alignmentEnabled,
    sort: sortEnabled,
  },
  universeTabs: { manageButton: manageButtonEnabled },
  characterGrid: { pagination: paginationEnabled },
  detailsPanel: { enabled: detailsPanelEnabled },
} = featuresConfig;

export const HomePage = () => {
  const { characters } = useCharacters();

  // State
  const [search, setSearch] = useState('');
  const [selectedUniverse, setSelectedUniverse] = useState<Universe>('all');
  const [selectedRole, setSelectedRole] = useState<Role>('all');
  const [selectedAlignment, setSelectedAlignment] = useState<Alignment>('all');
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(
    characters[0]?.id ?? null,
  );

  // Filtering вЂ” universe tabs are the single source of universe filtering
  const filteredCharacters = useFilteredCharacters(
    characters,
    search,
    selectedUniverse,
    selectedRole,
    selectedAlignment,
  );

  const selectedCharacter =
    filteredCharacters.find((character) => character.id === selectedCharacterId) ||
    filteredCharacters[0] ||
    characters[0] ||
    null;

  return (
    <>
      <main className="main-content">
        <header className="page-header">
          <div>
            <h1>Characters</h1>
            <p>Browse and manage all your characters across universes</p>
          </div>

          <div className="header-actions">
            {addCharacterButton && (
              <Link to="/characters/create" className="primary-button">
                + Add Character
              </Link>
            )}
            {viewToggle && (
              <>
                <button type="button" className="icon-button" aria-label="Grid view">
                  в–¦
                </button>
                <button type="button" className="icon-button" aria-label="List view">
                  в°
                </button>
              </>
            )}
          </div>
        </header>

        {searchEnabled && (
          <section className="filters-bar" aria-label="Character filters">
            <SearchInput value={search} onChange={setSearch} />
            {roleEnabled && <RoleFilter value={selectedRole} onChange={setSelectedRole} />}
            {alignmentEnabled && (
              <AlignmentFilter value={selectedAlignment} onChange={setSelectedAlignment} />
            )}

            {sortEnabled && (
              <div className="sort-control">
                <span>Sort</span>
                <button type="button">Default</button>
              </div>
            )}
          </section>
        )}

        <section className="universe-tabs" aria-label="Universe categories">
          <div className="tabs-header">
            <p>Universes</p>
            {manageButtonEnabled && <button type="button">Manage</button>}
          </div>

          <div className="tabs-list">
            {UNIVERSES.map((universe) => (
              <button
                key={universe}
                type="button"
                className={`universe-tab ${universe === selectedUniverse ? 'active' : ''}`}
                onClick={() => setSelectedUniverse(universe)}
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
            <div className="empty-state">No characters found matching the current filters.</div>
          )}
        </section>

        {paginationEnabled && (
          <nav className="pagination" aria-label="Pagination">
            <span className="pagination-info">Pagination coming soon</span>
          </nav>
        )}
      </main>

      {detailsPanelEnabled && (
        <aside id="detailsPanel" className="details-panel">
          <CharacterDetails character={selectedCharacter} />
        </aside>
      )}
    </>
  );
};
