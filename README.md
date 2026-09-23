# Dev Insights — Mini Blog

An internal "Mini Blog" platform built for the fictional startup **Dev Insights**, where employees can share quick tips and insights about web development.

This project was built as **Formative 1** to demonstrate understanding of React, TypeScript, Vite, component design, styling techniques, optimization, and Higher-Order Components (HOCs).

---

## 🛠️ Tech Stack

- **React 18** — UI library
- **TypeScript** — type safety
- **Vite** — build tool and dev server
- **CSS** — external stylesheets + inline styles

---

## 🚀 Getting Started

> ⚠️ This project uses **Vite**, not Create React App. All commands below assume Vite.

### Prerequisites

- **Node.js** v18 or higher
- **npm** (comes with Node.js)

### 1. Clone the repository

```bash
git clone https://github.com/kellynshuti9/dev-insights-mini-blog.git
cd dev-insights-mini-blog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The app will be available at **http://localhost:5173**.

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

### 6. Test the application

There are no automated unit tests in this formative. To verify the app manually:

1. Open the dev server (`npm run dev`).
2. Open **DevTools → Console** to see `withLogger` mount/unmount logs.
3. Confirm that posts by **Alice** are highlighted and posts from the last 24 hours show a **"New!"** badge.

---

## 📁 Project Structure

```
dev-insights-mini-blog/
├── src/
│   ├── components/
│   │   ├── Header.tsx / Header.css
│   │   ├── Post.tsx / Post.css
│   │   ├── PostList.tsx / PostList.css
│   │   └── withLogger.tsx
│   ├── types/
│   │   └── post.ts
│   ├── utils/
│   │   └── dateUtils.ts
│   ├── App.tsx / App.css
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🧩 Components

| Component | Type | Purpose |
|-----------|------|---------|
| `App` | Functional | Root component; renders `Header` and `PostList`. |
| `Header` | Functional | Displays the "Dev Insights" logo and a "New Post" nav link. |
| `PostList` | Functional | Renders a hardcoded list of sample posts. |
| `Post` | Functional (`React.memo`) | Renders a single post's title, author, preview, and date. |
| `withLogger` | HOC | Logs mount/unmount messages for any wrapped component. |

---

## 🎨 Styling Methods (2 used)

1. **External CSS files** — `Header.css`, `Post.css`, `PostList.css`, `App.css` handle layout, colors, and typography.
2. **Inline styles** — The `Post` component applies a dynamic `borderLeft` based on the `highlightAuthor` prop.

### Conditional Styling Examples

- Posts written by **Alice** receive a `.highlighted` class (pink background + red left border).
- Posts published within the last **24 hours** display a green **"New!"** badge, computed by `isNew()` in `utils/dateUtils.ts`.

---

## ⚡ Optimization & Higher-Order Components

### Optimization techniques

- **`React.memo`** wraps the `Post` component to prevent unnecessary re-renders when its `post` prop has not changed.
- **Stable `key` prop** (`key={post.id}`) is used on every item in the `PostList` map, which is required for React's efficient list reconciliation.

### HOC — `withLogger`

`withLogger` is a Higher-Order Component that wraps any component and logs:

- `[withLogger] <ComponentName> mounted` on mount
- `[withLogger] <ComponentName> unmounted` on unmount

It uses `useEffect` with a cleanup function to mimic `componentDidMount` / `componentWillUnmount` from class components. It is applied to `PostList` in `App.tsx`.

---

## 🧠 Design Decisions

### Functional vs. Class Components

I chose **functional components** for the entire project. Functional components are the modern React standard: they are more concise, compose cleanly with hooks, and integrate naturally with `React.memo`. The `Post` component has no internal state or lifecycle needs, so a class component would have added boilerplate without any benefit.

### Styling Choices

I combined **external CSS** (for static layout and theming) with **inline styles** (for dynamic, prop-driven values like the highlighted border). This split keeps presentation logic in one place while allowing dynamic values to react to props without generating extra CSS classes.

### Optimization Strategy

`React.memo` on `Post` prevents re-renders when the parent re-renders but the post data hasn't changed. Combined with the stable `key` prop, this keeps list rendering efficient.

---

## 📦 External Libraries & Packages

- `react`
- `react-dom`
- `vite`
- `@vitejs/plugin-react`
- `typescript`
- `@types/react`, `@types/react-dom`

No third-party state management, routing, or CSS-in-JS libraries were used.

---

## 🧗 Challenges & Reflection

One of my main challenges was structuring the project early — deciding where types, utility functions, and components should live before writing them. I solved this by creating dedicated `types/` and `utils/` folders first, which made the later components much easier to build.

Another challenge was ensuring the **"New!"** badge updated correctly based on the current time. I solved this by comparing timestamps in milliseconds inside `isNew()`, using `Date.now()` and `new Date(dateStr).getTime()`.

I also learned how a **Higher-Order Component** can wrap another component to add behavior (like logging) without modifying the original. Seeing the mount/unmount logs in the console helped me understand the connection between `useEffect` cleanup and class-based lifecycle methods.

Going forward, I want to explore **React Context** for global state, **unit testing** with Vitest, and **CSS-in-JS libraries** like styled-components.

---

## ✅ Git Workflow

This project was built incrementally with meaningful commits:

- `chore: scaffold Vite React TypeScript project`
- `feat(types): define PostType interface`
- `feat(components): add Header component`
- `feat(components): add Post component with React.memo and conditional styling`
- `feat(components): add PostList with sample posts and keys`
- `feat(app): wire up Header and PostList`
- `feat(hoc): add withLogger HOC and apply to PostList`
- `docs: add README with setup instructions and design decisions`

`node_modules` is excluded via `.gitignore` and is not tracked.

---

## 🪞 Reflection
In this project, I created a small blog with React + TypeScript using Vite, and learned that with Vite, the dev server is a lot faster than the old bundlers due to native ES modules. The most useful thing that I got from this was seeing how to use `React.memo` in practice: watching the console stop logging as a parent re-render when I used it, felt better than it looked in theory. I also had the opportunity to write a higher order component (HOC) by hand, which helped me better understand how the HOCs wrap components and how the `cleanup` function works in `useEffect`, which is the equivalent of `componentWillUnmount`.

The hardest thing about the project was deciding to lay out the project structure before writing any components: to know where to put your `types/`, `utils/`, or `components/`. I solved this by meticulously laying out the folder structure, so that the all subsequent components were a breeze to drop in. For the future, I want to learn about CSS-in-JS libraries such as styled-components, unit testing with Vitest, and creating global state with React Context.