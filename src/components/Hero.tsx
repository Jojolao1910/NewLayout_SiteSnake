import React from 'react';
import { Bot } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" id="hero">
      <div id="particles-js" className="absolute inset-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center" data-aos="fade-up">
          <Bot className="w-16 h-16 mx-auto mb-6 text-primary-600 dark:text-primary-400" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            SnakeAssist Chatbots
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
            Revolucione seu atendimento com nossa solução inteligente de chatbot
          </p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Comece Agora
          </button>
        </div>
      </div>
    </section>
  );
};