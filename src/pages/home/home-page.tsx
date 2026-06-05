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
import { homeConfig } from '@/shared/config/home';

const {
  siteName,
  siteTagline,
  userName,
  userLevel,
  mainNavTitle,
  mainNavItems,
  secondaryNavTitle,
  secondaryNavItems,
  isFooterEnabled,
  isSettingsButtonVisible,
  isUserCardVisible,
  settingsLabel,
  headerTitle,
  headerSubtitle,
  addCharacterLabel,
  isAddCharacterButtonEnabled,
  isViewToggleEnabled,
  isSortEnabled,
  sortLabel,
  sortDefaultLabel,
  isManageButtonEnabled,
  manageLabel,
  allLabel,
  emptyStateText,
  universeTabsTitle,
  isPaginationEnabled,
  isDetailsPanelEnabled,
} = homeConfig;

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
            <strong>{siteName}</strong>
            <span>{siteTagline}</span>
          </div>
        </a>

        <nav className="sidebar-nav" aria-label="Main navigation">
          <p className="nav-title">{mainNavTitle}</p>
          {mainNavItems
            .filter((item) => item.enabled)
            .map((item) => (
              <button
                key={item.label}
                type="button"
                className={`nav-link ${item.label === 'Characters' ? 'active-purple' : ''}`}
                aria-label={item.ariaLabel}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
        </nav>

        <nav className="sidebar-nav sidebar-nav-secondary" aria-label="User space">
          <p className="nav-title">{secondaryNavTitle}</p>
          {secondaryNavItems
            .filter((item) => item.enabled)
            .map((item) => (
              <button
                key={item.label}
                type="button"
                className="nav-link"
                aria-label={item.ariaLabel}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
        </nav>

        {isFooterEnabled && (
          <div className="sidebar-footer">
            {isSettingsButtonVisible && (
              <button type="button" className="nav-link">
                <span className="nav-icon">⚙</span>
                {settingsLabel}
              </button>
            )}

            {isUserCardVisible && (
              <div className="user-mini">
                <div className="avatar" />
                <div>
                  <strong>{userName}</strong>
                  <span>Level {userLevel}</span>
                </div>
              </div>
            )}
          </div>
        )}
      </aside>

      <main className="main-content">
        <header className="page-header">
          <div>
            <h1>{headerTitle}</h1>
            <p>{headerSubtitle}</p>
          </div>

          <div className="header-actions">
            {isAddCharacterButtonEnabled && (
              <button type="button" className="primary-button">
                {addCharacterLabel}
              </button>
            )}
            {isViewToggleEnabled && (
              <>
                <button type="button" className="icon-button" aria-label="Grid view">
                  ▦
                </button>
                <button type="button" className="icon-button" aria-label="List view">
                  ☰
                </button>
              </>
            )}
          </div>
        </header>

        <section className="filters-bar" aria-label="Character filters">
          <SearchInput value={search} onChange={setSearch} />
          <UniverseFilter value={selectedUniverse} onChange={setSelectedUniverse} />
          <RoleFilter value={selectedRole} onChange={setSelectedRole} />
          <AlignmentFilter value={selectedAlignment} onChange={setSelectedAlignment} />

          {isSortEnabled && (
            <div className="sort-control">
              <span>{sortLabel}</span>
              <button type="button">{sortDefaultLabel}</button>
            </div>
          )}
        </section>

        <section className="universe-tabs" aria-label="Universe categories">
          <div className="tabs-header">
            <p>{universeTabsTitle}</p>
            {isManageButtonEnabled && <button type="button">{manageLabel}</button>}
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
                {universe === 'all' ? allLabel : universe}
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
            <div className="empty-state">{emptyStateText}</div>
          )}
        </section>

        {isPaginationEnabled && (
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
        )}
      </main>

      {isDetailsPanelEnabled && (
        <aside id="detailsPanel" className="details-panel">
          <CharacterDetails character={selectedCharacter} />
        </aside>
      )}
    </div>
  );
};
