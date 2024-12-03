import React from 'react';
import { MessageSquare, Brain, Zap, Shield } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Atendimento 24/7',
      description: 'Suporte contínuo para seus clientes, em qualquer momento'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'IA Avançada',
      description: 'Respostas inteligentes e contextualmente relevantes'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Resposta Rápida',
      description: 'Resolução instantânea das dúvidas mais comuns'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Segurança Total',
      description: 'Proteção de dados e conformidade com LGPD'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="features">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white" data-aos="fade-up">
          Recursos Principais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};