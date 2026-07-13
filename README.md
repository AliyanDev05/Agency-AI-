# agency.ai

A modern, responsive digital agency landing page built with React and Tailwind CSS v4 — featuring dark mode, smooth animations, and a working contact form.

**Live Demo:** [https://agency4ai-in.vercel.app/](https://agency4ai-in.vercel.app/)

## Features

Custom brand theming via Tailwind v4's `@theme` directive
Manual dark/light mode toggle (persisted in `localStorage`, defaults to OS preference)
Fully responsive layout with a mobile slide-in navigation menu
Working contact form powered by Web3Forms (no backend required)
Toast notifications for form submission feedback
Fast build tooling with Vite

## Tech Stack

| Category      | Technology                          |
| ------------- | ----------------------------------- |
| Framework     | React                               |
| Build Tool    | Vite                                |
| Styling       | Tailwind CSS v4 (CSS-first config)  |
| Fonts         | Manrope (Google Fonts)              |
| Form Handling | [Web3Forms](https://web3forms.com/) |
| Notifications | react-hot-toast                     |
| Deployment    | Vercel                              |

## Project Structure

```
src/
├── assets/          # Images, icons, and asset exports
├── components/
│   ├── Navbar.jsx
│   ├── ToggleThemeBtn.jsx
│   ├── Hero.jsx
│   ├── TrustedBy.jsx
│   ├── Services.jsx
│   ├── OurWork.jsx
│   ├── OurTeam.jsx
│   ├── ContactUs.jsx
│   └── Title.jsx
|   └── Footer.jsx
|   └── ServiceCard.jsx
├── App.jsx
├── main.jsx
└── index.css        # Tailwind imports, @theme, @custom-variant
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/AliyanDev05/Agency-AI-.git
   cd <Agency-AI>
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Set up environment variables (see below)

4. Run the development server

   ```bash
   npm run dev
   ```

5. Build for production
   ```bash
   npm run build
   ```

## Environment Setup — Web3Forms

This project uses [Web3Forms](https://web3forms.com/) to handle the contact form submission without needing a custom backend.

1. Go to [web3forms.com](https://web3forms.com/) and sign up (free).
2. Generate an **Access Key** from your dashboard.
3. In `src/components/ContactUs.jsx`, the key is currently used directly in the code:
   ```js
   formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
   ```
4. **Recommended:** move the key into an environment variable instead of hardcoding it, so it isn't exposed in your public GitHub repo:

   Create a `.env` file in the project root:

   ```
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

   Then update `ContactUs.jsx`:

   ```js
   formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
   ```

   Add `.env` to your `.gitignore` if it isn't already there.

5. On Vercel, add the same variable under **Project Settings → Environment Variables** so the deployed build has access to it.

## Dark Mode

Dark mode is implemented using Tailwind v4's `@custom-variant`, toggled manually via a button rather than relying only on system preference:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

Theme choice is stored in `localStorage` and applied by toggling a `.dark` class on `document.documentElement`. On first load (no saved preference), it falls back to the user's OS-level `prefers-color-scheme`.

## Deployment

This project is deployed on [Vercel](https://vercel.com/). To deploy your own copy:

1. Push your code to GitHub.
2. Import the repository into Vercel.
3. Add the `VITE_WEB3FORMS_ACCESS_KEY` environment variable (see above).
4. Deploy — Vercel will auto-detect the Vite build settings.

## License

This project is open for personal/practice use. Feel free to fork and modify.
