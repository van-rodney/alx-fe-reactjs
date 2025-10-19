# React Router Advanced — Example Project

This small Vite + React project demonstrates advanced routing techniques using `react-router-dom` v6:

- Nested routes (Profile -> Details / Settings)
- Protected routes using a simple in-memory AuthProvider
- Dynamic routing for variable URLs (e.g. `/post/:id`)

Files of interest
- `src/App.jsx` — Router setup, nested routes for `/profile`, and dynamic `/post/:id` route.
- `src/context/AuthProvider.jsx` — `AuthProvider` and `useAuth()` hook used by `ProtectedRoute`.
- `src/components/Home.jsx` — Public landing page with simulated login/logout.
- `src/components/Profile.jsx` — Parent profile page that renders nested sub-routes via `<Outlet />`.
- `src/components/ProfileDetails.jsx` — Profile index / details subpage.
- `src/components/ProfileSettings.jsx` — Profile settings subpage.
- `src/components/Post.jsx` — Dynamic route reading `:id` from the URL via `useParams()`.

Quick start

1. Install dependencies (if you haven't already):

```powershell
cd c:\Users\HP\alx-fe-reactjs\react-router-advanced
npm install
```

2. PowerShell note: On some Windows systems PowerShell's execution policy prevents running `npm` shim scripts (npm.ps1). If you encounter an error like:

```
File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system.
```

you can temporarily allow scripts in the current session and then start the dev server with:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process -Force
npm run dev
```

Alternatively, open a regular Command Prompt (cmd.exe) and run:

```cmd
cd /d C:\Users\HP\alx-fe-reactjs\react-router-advanced
npm run dev
```

3. Open the URL Vite prints (usually `http://localhost:5173`) in your browser.

Testing the routes

- Public Home
  - Visit `/` — shows the Home page with a button to simulate login.

- Protected Profile (nested)
  - Visit `/profile` while unauthenticated — you should be redirected to `/`.
  - On `/`, click "Simulate Login & Go to Profile" — logs in and navigates to `/profile`.
  - Within the Profile page, click the "Details" and "Settings" links to navigate nested routes:
    - `/profile` or `/profile/details` -> Profile details
    - `/profile/settings` -> Profile settings

- Dynamic Post route
  - Visit `/post/42` or `/post/your-id` — the `Post` component reads the `id` param and displays it.

Notes & next steps

- Auth is in-memory only (no persistence). To persist across reloads, extend `AuthProvider` to store auth state in `localStorage` or use a proper auth flow.
- Consider adding a `NotFound` route (`path="*"`) in `App.jsx` for graceful 404 handling.
- Tests: add unit/integration tests (React Testing Library / Jest) or e2e tests (Playwright) to validate route protections.

If you want, I can add any of the above enhancements (logout in nav, persistent auth, 404 page, or tests). Which would you like next?
