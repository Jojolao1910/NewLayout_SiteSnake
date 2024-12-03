import React from 'react';
import { Settings, MessageSquare, Zap, CheckCircle } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Settings />,
      title: 'Configuração Simples',
      description: 'Configure seu chatbot em minutos'
    },
    {
      icon: <MessageSquare />,
      title: 'Treinamento IA',
      description: 'Treine seu bot com suas informações'
    },
    {
      icon: <Zap />,
      title: 'Integração',
      description: 'Integre facilmente ao seu site ou Whatsapp'
    },
    {
      icon: <CheckCircle />,
      title: 'Pronto para Usar',
      description: 'Comece a atender automaticamente'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="how-it-works">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white" data-aos="fade-up">
          Como Funciona
        </h2>
        
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white dark:bg-gray-700 rounded-lg p-8 text-center relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary-600 dark:bg-primary-400 rounded-full flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};