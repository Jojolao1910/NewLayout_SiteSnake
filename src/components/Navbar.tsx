import React, { useState } from 'react';
import { Bot, Moon, Sun, Menu, X } from 'lucide-react';
import { toggleDarkMode } from '../utils/darkMode';

export const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(localStorage.getItem('darkMode') === 'true');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDarkMode = () => {
    const newMode = toggleDarkMode();
    setIsDark(newMode);
  };

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Bot className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">SnakeAssist</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Recursos</a>
            <a href="#chatbot-features" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Chatbot</a>
            <a href="#use-cases" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Onde Utilizar</a>
            <a href="#analytics" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Analytics</a>
            <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Preços</a>
            <a href="#contact" className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition duration-300">Contato</a>
            <button
              onClick={handleDarkMode}
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Recursos</a>
              <a href="#chatbot-features" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Chatbot</a>
              <a href="#use-cases" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Casos de Uso</a>
              <a href="#analytics" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Analytics</a>
              <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">Preços</a>
              <a href="#contact" className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition duration-300 text-center">Contato</a>
              <button
                onClick={handleDarkMode}
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 flex items-center"
              >
                {isDark ? (
                  <>
                    <Sun className="w-6 h-6 mr-2" /> Modo Claro
                  </>
                ) : (
                  <>
                    <Moon className="w-6 h-6 mr-2" /> Modo Escuro
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};