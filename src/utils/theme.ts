export type Theme = 'light' | 'dark';

export const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem('darkMode');
  return savedTheme === 'true' ? 'dark' : 'light';
};

export const applyTheme = (theme: Theme) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  localStorage.setItem('darkMode', theme === 'dark' ? 'true' : 'false');
};