import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css'; // File does not exist, using Tailwind CDN
// Checking file list:
// .env.local
// .gitignore
// App.tsx
// README.md
// components/
// constants.tsx
// index.html
// index.tsx
// metadata.json
// package.json
// services/
// tsconfig.json
// types.ts
// vite.config.ts

// there is no index.css in the file list!
// So I should NOT import it.

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
