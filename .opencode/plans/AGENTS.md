# AGENTS.md

Guidelines for agentic coding in the OmnisJSC-TabStrip repository.

## Build, Lint, and Test Commands

### Core Commands

- `npm run build` - Production build with minification
- `npm run dev` - Development build without minification
- `npm run watch` - Watch mode for development (rebuilds on changes)
- `npm run start` - Combined watch and serve mode

## Code Style Guidelines

### Imports

- Use absolute imports with file extensions: `import "./style.css"`
- Import CSS files directly in TypeScript files
- Group imports by type (types, classes, utilities)

### Formatting

- **Line Length**: 120 characters (configured in `.prettierc.js`)
- **Tab Width**: 4 spaces
- **Quotes**: Double quotes (Prettier enforced)
- **Semicolons**: No semicolons (Prettier enforced)

### TypeScript Conventions

- **Target**: ES5 for maximum compatibility
- **Module System**: CommonJS (`"module": "commonjs"`)
- **Libraries**: ES2017 + DOM typings
- **Strict Mode**: Partial (some strict options commented out)
  - Currently enabled: `strictBindCallApply`, `strictFunctionTypes`
  - Not yet enabled: `strictNullChecks`, `noImplicitAny`, `strict`

### Naming Conventions

- **Classes**: PascalCase (e.g., `Tab`, `TabStrip`)
- **Variables**: camelCase (e.g., `tabBackgroundColor`, `activeTabTextColor`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `ADD_TAB`)
- **Private Methods**: use private modifier
- **Event Types**: PascalCase (e.g., `TabStripEvent`)
- **Handler Types**: Suffix with Handler (e.g., `TabStripEventHandler`)

### Error Handling

- Check for null/undefined before accessing properties
- Validate function parameters when necessary
- Use optional chaining where appropriate
- Handle DOM operations gracefully with null checks

### Event Handling

- Use typed event handlers: `(event: MouseEvent, tabId: number, index: number, tab: Tab) => void`
- Prevent default and stop propagation when needed
- Check if handler exists before calling: `if (handler) { handler(event, tabId, index, tab) }`

### DOM Manipulation

- Cache DOM elements when frequently accessed
- Use querySelector methods with proper typing
- Clean up event listeners when removing elements
- Use CSS classes for styling rather than inline styles where possible

### State Management

- Maintain rendered state in `renderedTabs` Map
- Update DOM efficiently by comparing current vs rendered state
- Use non-destructive updates where possible

### Animation

- Use CSS animations for visual effects
- Create ripple effects with dynamic positioning
- Animate tab additions with slide-in effect

## Project Structure

```
src/
  ├── TabStrip.ts       # Main Tab class and TabStrip component
  ├── index.ts          # Export barrel
  ├── style.css         # CSS styles and animations
  └── omnis.d.ts        # Type definitions for Omnis integration

dist/
  └── ctl_com_888sp_tabstrip.bundle.js  # Production bundle

demo/
  └── tabstrip/        # Omnis demo library files

controls/
  └── com.888sp.tabstrip/  # Control definition files
```

## TypeScript Configuration

Key settings from `tsconfig.json`:

- `"target": "es5"` - Compile to ES5 for broad compatibility
- `"module": "commonjs"` - CommonJS modules
- `"lib": ["es2017", "dom"]` - ES2017 features + DOM typings
- `"sourceMap": true` - Generate source maps for debugging
- `"esModuleInterop": true` - Better ES module interoperability
- `"allowJs": true` - Allow JavaScript files

## Webpack Configuration

- Entry point: `src/index.ts`
- Output: `dist/ctl_com_888sp_tabstrip.bundle.js`
- Loaders: TypeScript, CSS, JSON
- Minification: TerserPlugin with Safari 10 compatibility
- Source maps: Enabled for debugging


## CSS Architecture

- Use BEM-like naming: `.my-tabstrip-li`, `.my-tabstrip-li-a`
- CSS animations for transitions
- Responsive design with flexbox
- Hover states for interactive elements
- Active state styling

## Best Practices

1. **Type Safety**: Always use TypeScript types/interfaces
2. **Immutability**: Prefer spreading arrays for updates: `this.tabs = [...tabs]`
3. **Performance**: Cache DOM queries, minimize reflows
4. **Accessibility**: Ensure proper ARIA attributes where needed
5. **Maintainability**: Keep methods focused and single-purpose
6. **Documentation**: Add JSDoc comments for complex logic

## Building and Deployment

1. Run `npm run build` to create production bundle
2. Update control definition in Omnis

## Troubleshooting

- **Build Errors**: Check TypeScript configuration and imports
