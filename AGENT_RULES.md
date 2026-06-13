# Global UI Component Rules

All global UI components from `libs/ui` must be generic, reusable, and composition-friendly.

A global UI component should provide structure, styling, behavior, or accessibility, but it must not contain domain-specific meaning.

---

## Main Rule

Prefer composition through `children`.

Preferred:

```tsx
<Component>{children}</Component>
```

Avoid:

```tsx
<Component title="" description="" image="" stats="" type="" />
```

unless these props are truly generic and required for the component.

---

## Examples

### Card

`Card` is a visual container.

It controls:

- background
- border
- radius
- shadow
- spacing
- hover effects

It does not know what content is inside.

```tsx
<Card variant="glass">{children}</Card>
```

---

### Modal

`Modal` is an overlay container.

It controls:

- overlay
- position
- animation
- close behavior
- accessibility

It should allow custom content inside.

```tsx
<Modal isOpen={isOpen} onClose={onClose}>
  {children}
</Modal>
```

---

### Button

`Button` is an action element.

It controls:

- visual style
- size
- disabled state
- loading state
- click behavior

It should not know the business action.

Preferred:

```tsx
<Button>Generate</Button>
```

Avoid:

```tsx
<GenerateCharacterButton />
```

inside `libs/ui`.

`GenerateCharacterButton` belongs in `apps/*` or `libs/features`.

---

### Badge

`Badge` is a small visual label.

It controls:

- color
- size
- shape
- variant

It should not know domain categories.

Preferred:

```tsx
<Badge variant="success">Active</Badge>
```

Avoid:

```tsx
<RaceBadge race="elf" />
```

inside `libs/ui`.

---

### Avatar

`Avatar` displays an image or fallback.

It controls:

- size
- shape
- fallback
- loading state

It should not know whether the image belongs to a user, character, author, or product.

Preferred:

```tsx
<Avatar src={imageUrl} fallback="A" />
```

Avoid:

```tsx
<CharacterAvatar character={character} />
```

inside `libs/ui`.

---

### Grid / Container / Layout

Layout components control only positioning and spacing.

Preferred:

```tsx
<Grid>{children}</Grid>
```

```tsx
<Container>{children}</Container>
```

Avoid domain-specific layout names in `libs/ui`.

---

# Rule Summary

Global UI components should answer:

> How should this look or behave?

Application components should answer:

> What does this mean in this project?

Examples:

```txt
libs/ui/Card        -> generic visual container
apps/*/CharacterCard -> domain-specific card

libs/ui/Button      -> generic button
apps/*/GenerateCharacterButton -> domain-specific action

libs/ui/Badge       -> generic label
apps/*/RaceBadge    -> domain-specific label

libs/ui/Avatar      -> generic image/fallback component
apps/*/CharacterAvatar -> domain-specific avatar
```
