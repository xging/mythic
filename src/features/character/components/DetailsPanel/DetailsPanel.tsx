import type { Character } from '@/features/character/types/character';

interface DetailsPanelProps {
  character: Character | undefined;
}

function statMarkup(stats: Record<string, number>) {
  return Object.entries(stats)
    .map(
      ([key, value]) =>
        `<div class="stat">${key}<strong>${value}</strong></div>`
    )
    .join("");
}

export function DetailsPanel({ character }: DetailsPanelProps) {
  if (!character) return null;

  return (
    <aside className="details-panel">
      <div
        className="hero"
        style={{ backgroundImage: `url('${character.image}')` }}
      >
        <div className="hero-content">
          <h2>{character.name}</h2>
          <p>
            Lvl {character.level} • {character.race} • {character.className}
          </p>
          <div className={`role ${character.role}`}>{character.role}</div>
        </div>
      </div>

      <div className="details-content">
        <div
          className="big-stats"
          dangerouslySetInnerHTML={{ __html: statMarkup(character.stats) }}
        />

        <div className="tabs">
          <span className="tab active">Overview</span>
          <span className="tab">Skills</span>
          <span className="tab">Equipment</span>
          <span className="tab">Notes</span>
        </div>

        <section className="info-block">
          <h4>About</h4>
          <p>{character.about}</p>
        </section>

        <section className="info-block">
          <h4>Backstory</h4>
          <p>{character.backstory}</p>
        </section>

        <section className="info-block two-columns">
          <div>
            <h4>Personality Traits</h4>
            <ul>
              {character.traits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Ideals</h4>
            <ul>
              {character.ideals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="info-block two-columns">
          <div>
            <h4>Strengths</h4>
            <ul className="good">
              {character.strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Weaknesses</h4>
            <ul className="bad">
              {character.weaknesses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="info-block">
          <h4>Tags</h4>
          <div className="tags">
            {character.tags.map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        </section>

        <button className="primary-btn add-party">⚔ Add to Party</button>
      </div>
    </aside>
  );
}