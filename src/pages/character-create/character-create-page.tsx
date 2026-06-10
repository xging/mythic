import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCharacters } from '@/shared/contexts';
import { UNIVERSES, ROLES, ALIGNMENTS } from '@/entities/character/model';
import type { Character, Universe, Role, Alignment } from '@/entities/character/model';
import styles from './character-create.module.scss';

const COLORS: Character['color'][] = [
  'purple',
  'cyan',
  'green',
  'orange',
  'red',
  'yellow',
  'blue',
  'gray',
];

const INITIAL_STATE = {
  name: '',
  universe: 'Fantasy' as Universe,
  origin: '',
  role: 'Healer' as Role,
  alignment: 'Good' as Alignment,
  power: 50,
  color: 'purple' as Character['color'],
  symbol: '✦',
  imageGradient: 'linear-gradient(135deg, #19122d, #422063 46%, #111827)',
  about: '',
  STR: 10,
  DEX: 10,
  CON: 10,
  INT: 10,
  WIS: 10,
  CHA: 10,
  tags: '',
  links: '',
};

export const CharacterCreatePage = () => {
  const navigate = useNavigate();
  const { addCharacter } = useCharacters();

  const [form, setForm] = useState({ ...INITIAL_STATE });
  const [errors, setErrors] = useState<string[]>([]);

  const updateField = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: string[] = [];

    if (!form.name.trim()) newErrors.push('Name is required');
    if (!form.origin.trim()) newErrors.push('Origin is required');

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    const newCharacter: Character = {
      id: Date.now().toString(),
      name: form.name.trim(),
      universe: form.universe,
      origin: form.origin.trim(),
      role: form.role,
      roleFilter: form.role,
      alignment: form.alignment,
      power: form.power,
      color: form.color,
      symbol: form.symbol || '✦',
      imageGradient: form.imageGradient,
      about: form.about.trim(),
      attributes: {
        STR: form.STR,
        DEX: form.DEX,
        CON: form.CON,
        INT: form.INT,
        WIS: form.WIS,
        CHA: form.CHA,
      },
      tags: form.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      links: form.links
        .split(',')
        .map((l) => l.trim())
        .filter(Boolean),
    };

    addCharacter(newCharacter);
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>Create New Character</h1>
        <p>Fill in the details to bring your character to life</p>
      </header>

      {errors.length > 0 && (
        <div className={styles.errors}>
          {errors.map((err) => (
            <p key={err}>{err}</p>
          ))}
        </div>
      )}

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Name & Universe */}
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => updateField('name', e.target.value)}
              placeholder="Character name"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="universe">Universe</label>
            <select
              id="universe"
              value={form.universe}
              onChange={(e) => updateField('universe', e.target.value as Universe)}
            >
              {UNIVERSES.filter((u) => u !== 'all').map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Origin & Role */}
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="origin">Origin *</label>
            <input
              id="origin"
              type="text"
              value={form.origin}
              onChange={(e) => updateField('origin', e.target.value)}
              placeholder="e.g. Elven Kingdom"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="role">Role</label>
            <select
              id="role"
              value={form.role}
              onChange={(e) => updateField('role', e.target.value as Role)}
            >
              {ROLES.filter((r) => r !== 'all').map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Alignment & Power */}
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="alignment">Alignment</label>
            <select
              id="alignment"
              value={form.alignment}
              onChange={(e) => updateField('alignment', e.target.value as Alignment)}
            >
              {ALIGNMENTS.filter((a) => a !== 'all').map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="power">Power Level ({form.power})</label>
            <input
              id="power"
              type="range"
              min={1}
              max={100}
              value={form.power}
              onChange={(e) => updateField('power', Number(e.target.value))}
            />
          </div>
        </div>

        {/* Color & Symbol */}
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="color">Color</label>
            <select
              id="color"
              value={form.color}
              onChange={(e) => updateField('color', e.target.value as Character['color'])}
            >
              {COLORS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="symbol">Symbol</label>
            <input
              id="symbol"
              type="text"
              value={form.symbol}
              onChange={(e) => updateField('symbol', e.target.value)}
              placeholder="✦"
              maxLength={5}
            />
          </div>
        </div>

        {/* Image Gradient */}
        <div className={styles.field}>
          <label htmlFor="imageGradient">Image Gradient (CSS)</label>
          <input
            id="imageGradient"
            type="text"
            value={form.imageGradient}
            onChange={(e) => updateField('imageGradient', e.target.value)}
            placeholder="linear-gradient(...)"
          />
        </div>

        {/* About */}
        <div className={styles.field}>
          <label htmlFor="about">About</label>
          <textarea
            id="about"
            value={form.about}
            onChange={(e) => updateField('about', e.target.value)}
            placeholder="Describe your character..."
            rows={4}
          />
        </div>

        {/* Attributes */}
        <fieldset className={styles.fieldset}>
          <legend>Attributes</legend>
          <div className={styles.attributesGrid}>
            {(['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'] as const).map((attr) => (
              <div key={attr} className={styles.attrField}>
                <label htmlFor={attr}>{attr}</label>
                <input
                  id={attr}
                  type="number"
                  min={1}
                  max={30}
                  value={form[attr]}
                  onChange={(e) => updateField(attr, Number(e.target.value))}
                />
              </div>
            ))}
          </div>
        </fieldset>

        {/* Tags & Links */}
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="tags">Tags (comma separated)</label>
            <input
              id="tags"
              type="text"
              value={form.tags}
              onChange={(e) => updateField('tags', e.target.value)}
              placeholder="e.g. Elf, Magic, Support"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="links">Links (comma separated)</label>
            <input
              id="links"
              type="text"
              value={form.links}
              onChange={(e) => updateField('links', e.target.value)}
              placeholder="e.g. Story 1, Lore Book"
            />
          </div>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <button type="button" className={styles.cancelBtn} onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className={styles.submitBtn}>
            Create New Character
          </button>
        </div>
      </form>
    </main>
  );
};
