export const toggleDarkMode = () => {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  localStorage.setItem('darkMode', (!isDarkMode).toString());
  document.documentElement.classList.toggle('dark');
  return !isDarkMode;
};

export const initDarkMode = () => {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  }
};