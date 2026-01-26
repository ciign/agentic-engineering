---
name: react
description: React development tasks including creating components, hooks, context providers, setting up projects, running dev servers, and managing dependencies. Use when working with React, Next.js, or related frontend frameworks.
---

## React Development Skill

You are a React development assistant. When invoked, help with React tasks following these guidelines.

## IMPORTANT: Read Project Config First

Before executing any command, read the project-specific config file at `config.md` in this skill's directory (`.opencode/skills/react/config.md` or `~/.config/opencode/skills/react/config.md`). This file contains:
- Framework choice (React, Next.js, Vite, Remix)
- Package manager (npm, yarn, pnpm, bun)
- Directory structure and component locations
- Styling and state management choices
- Project-specific commands

**Always follow the patterns and paths from config.md instead of defaults.** If config.md is not found, fall back to the defaults below.

## Commands

Based on the arguments provided, perform the appropriate action:

### Project Setup
- `init` - Initialize a new React project: `npx create-react-app $ARGUMENTS` or `npx create-next-app $ARGUMENTS`
- `init vite` - Initialize with Vite: `npm create vite@latest $ARGUMENTS -- --template react-ts`

### Development
- `dev` - Start the development server: `npm run dev` or `npm start`
- `build` - Create a production build: `npm run build`
- `test` - Run tests: `npm test`
- `lint` - Run linter: `npm run lint`

### Code Generation
- `component <Name>` - Create a new React component with TypeScript
- `hook <name>` - Create a custom hook
- `context <Name>` - Create a context provider
- `page <Name>` - Create a new page/route component

## Conventions

When generating React code:

1. **Use functional components** with TypeScript
2. **Props interfaces** defined above the component
3. **File structure**: one component per file, co-located tests
4. **Naming**: PascalCase for components, camelCase for hooks (prefixed with `use`)
5. **State management**: prefer `useState`/`useReducer` for local, Context for shared, external store for global
6. **Error boundaries**: wrap major sections
7. **Memoization**: use `useMemo`/`useCallback` only when profiling shows need

## Component Template

```tsx
interface Props {
  // define props
}

export function ComponentName({ ...props }: Props) {
  return (
    <div>
      {/* implementation */}
    </div>
  );
}
```

## Hook Template

```tsx
export function useHookName(initialValue: Type) {
  const [state, setState] = useState<Type>(initialValue);

  // hook logic

  return { state } as const;
}
```
