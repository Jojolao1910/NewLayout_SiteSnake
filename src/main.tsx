import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { initAnimations } from './utils/animations';
import { getInitialTheme, applyTheme } from './utils/theme';
import './index.css';

// Initialize theme
const initialTheme = getInitialTheme();
applyTheme(initialTheme);

// Initialize animations
initAnimations();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);