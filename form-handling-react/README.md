# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## React Query demo: Posts (JSONPlaceholder)

This project includes a small demonstration of advanced data fetching with React Query. The demo fetches posts from JSONPlaceholder and shows how React Query can cache, refetch, prefetch, and manage query data.

Implemented features

- React Query installed: `@tanstack/react-query` and DevTools.
- Query client provided at the app root (`src/main.jsx`).
- `PostsComponent` implemented at `src/components/PostsComponent.jsx` using `useQuery` to fetch `https://jsonplaceholder.typicode.com/posts`.
- Caching configuration: `staleTime` (5 minutes) and `cacheTime` (30 minutes).
- Interactive controls: Refetch, Prefetch, Invalidate Cache, Remove Cache.
- React Query DevTools included for inspection.

How to run

1. Install dependencies:

```powershell
npm install
```

2. Start the dev server:

```powershell
npm run dev
```

3. Open the app (usually at http://localhost:5173). The Posts demo is rendered in the main page.

What to test

- Loading and error states: the component shows "Loading posts..." while fetching and an error message if the request fails.
- Refetch: click "Refetch Posts" to force a network request and update the cache.
- Prefetch: click "Prefetch" to pre-populate the cache without updating the UI immediately.
- Invalidate Cache: invalidates the `posts` query so next mount/refetch will re-fetch.
- Remove Cache: removes the cached data for `posts`; next mount triggers a fresh fetch.
- React Query DevTools: open the devtools (bottom-left) to inspect cached queries and timestamps.

Notes

- The demo uses JSONPlaceholder which is a free public API for testing and prototyping.
- Keep only one `QueryClientProvider` at your app root to avoid creating multiple clients. This project provides it in `src/main.jsx`.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see https://react.dev/learn/react-compiler/installation.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the TS template for information on how to integrate TypeScript and `typescript-eslint` in your project.
