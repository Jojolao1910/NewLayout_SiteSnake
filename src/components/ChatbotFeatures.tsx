import React from 'react';
import { MessageCircle, Users, BarChart, Globe } from 'lucide-react';

export const ChatbotFeatures: React.FC = () => {
  return (
    <section className="py-20" id="chatbot-features">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white" data-aos="fade-up">
          Recursos do Chatbot
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8" data-aos="fade-right">
            <div className="flex items-start space-x-4">
              <MessageCircle className="w-8 h-8 text-primary-600 dark:text-primary-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Conversas Naturais
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Interações fluidas e contextuais que parecem humanas
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="w-8 h-8 text-primary-600 dark:text-primary-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Personalização Avançada
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Adapte o chatbot à identidade da sua marca
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-8" data-aos="fade-left">
            <div className="flex items-start space-x-4">
              <BarChart className="w-8 h-8 text-primary-600 dark:text-primary-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Análise de Dados
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Insights detalhados sobre interações dos usuários
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Globe className="w-8 h-8 text-primary-600 dark:text-primary-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Multilingue
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Suporte para múltiplos idiomas e regiões
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};