# 🚀 Quick Start Guide - Refactored Portfolio

## Project Structure Overview

```
src/
├── components/         # ✨ Reusable React components
├── constants/          # 🎨 Theme, colors, typography
├── config/             # 📋 Portfolio content (skills, experiences)
├── hooks/              # 🪝 Custom React hooks
├── styles/             # 🎨 Global styles
└── App.jsx             # Root component
```

---

## 📝 How to Update Content

### Update Skills
**File:** `src/config/portfolio.js`

```javascript
export const SKILLS = {
  Frontend: ['React.js', 'TypeScript', 'JavaScript ES6+', ...],
  Backend: ['Node.js', 'REST APIs', ...],
  // Add more as needed
};
```

### Update Experience
**File:** `src/config/portfolio.js`

```javascript
export const EXPERIENCES = [
  {
    title: 'Your Project Title',
    subtitle: 'Company — Duration',
    points: ['Achievement 1', 'Achievement 2', ...],
    tag: 'Tech Stack',
  },
];
```

### Update Contact Info
**File:** `src/config/portfolio.js`

```javascript
export const CONTACT_INFO = {
  email: 'your-email@example.com',
  phone: '+1-234-567-8900',
  location: 'Your City, Country',
};
```

### Update Theme Colors
**File:** `src/constants/theme.js`

```javascript
export const COLORS = {
  primary: '#00ffc8',     // Change to your brand color
  primaryDark: '#00e6b4',
  // Update all color values here
};
```

---

## 🛠️ Development Workflow

### Add a New Section

1. **Create Component** (`src/components/NewSection.jsx`)
```jsx
import React from 'react';
import Section from './Section';
import styles from './NewSection.module.css';

function NewSection() {
  return (
    <Section id="new-section" style={{ padding: '80px 5%' }}>
      <div className={styles.container}>
        {/* Your content */}
      </div>
    </Section>
  );
}

export default NewSection;
```

2. **Create Styles** (`src/components/NewSection.module.css`)
```css
.container {
  max-width: 900px;
  margin: 0 auto;
}

.title {
  font-family: 'Syne', sans-serif;
  font-size: 48px;
  font-weight: 800;
  color: #fff;
}
```

3. **Export Component** (`src/components/index.js`)
```javascript
export { default as NewSection } from './NewSection';
```

4. **Import in App** (`src/App.jsx`)
```jsx
import { NewSection } from './components';

function App() {
  return (
    <div>
      {/* ... existing components ... */}
      <NewSection />
    </div>
  );
}
```

### Create Custom Hook

**File:** `src/hooks/index.js`

```javascript
export function useMyHook(param) {
  const [state, setState] = useState(null);
  
  useEffect(() => {
    // Your logic
  }, [param]);
  
  return [state, setState];
}
```

**Usage:**
```jsx
const [state, setState] = useMyHook(param);
```

---

## 🎨 Styling Guide

### Use Design Tokens
```jsx
import THEME from '../constants/theme';

<button style={{ color: THEME.COLORS.primary }}>
  Click Me
</button>
```

### Update Spacing
**File:** `src/constants/theme.js`
```javascript
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
};
```

**Usage:**
```css
padding: 16px;  /* lg spacing */
margin: 12px;   /* md spacing */
gap: 8px;       /* sm spacing */
```

---

## 🧪 Testing Components

### Test Navigation
```javascript
import { render, screen } from '@testing-library/react';
import Navigation from '../Navigation';

test('renders navigation links', () => {
  render(<Navigation />);
  expect(screen.getByText('home')).toBeInTheDocument();
});
```

### Test Section Animations
```javascript
test('section animates on viewport entry', () => {
  const { container } = render(<About />);
  const section = container.querySelector('section');
  expect(section).toBeInTheDocument();
});
```

---

## 🔍 Common Tasks

### Change Brand Color
1. Open `src/constants/theme.js`
2. Change `primary: '#00ffc8'` to your color
3. Automatically applies everywhere!

### Update Typography
1. Open `src/constants/theme.js`
2. Modify `TYPOGRAPHY.fontFamilies` or `sizes`
3. All components inherit changes

### Add New Skill Category
1. Open `src/config/portfolio.js`
2. Add to `SKILLS` object:
```javascript
'Design': ['Figma', 'Adobe XD', 'UI/UX'],
```

### Modify CTA Button Behavior
1. Open `src/components/Hero.jsx`
2. Update `onClick` handler or add new logic

---

## 🚀 Performance Tips

1. **Use React DevTools Profiler**
   - Find slow components
   - Optimize re-renders

2. **Implement React.memo for components**
```jsx
const ExpCard = React.memo(({ data }) => (
  // Component code
));
```

3. **Use useCallback for event handlers**
```jsx
const handleClick = useCallback(() => {
  // Your logic
}, [dependencies]);
```

---

## 📱 Responsive Design

### Mobile-First Breakpoint
```css
@media (max-width: 768px) {
  /* Mobile styles */
}
```

### Responsive Typography
```css
font-size: clamp(28px, 4vw, 48px);
/* Min: 28px, Preferred: 4% of viewport, Max: 48px */
```

---

## 🎯 Next Steps

- [ ] Convert to TypeScript for type safety
- [ ] Add unit tests with Jest/RTL
- [ ] Set up Storybook for component development
- [ ] Add CI/CD pipeline
- [ ] Implement Analytics tracking
- [ ] Create API endpoints for dynamic content
- [ ] Add dark/light theme toggle
- [ ] Deploy to production

---

## 📚 Useful Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject configuration (⚠️ irreversible!)
npm eject
```

---

**Happy coding! 🎉**

*For more help, refer to: React Docs (react.dev) | CSS Modules (github.com/css-modules/css-modules)*
