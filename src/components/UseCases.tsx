import React from 'react';
import { Building2, ShoppingBag, Headphones, GraduationCap } from 'lucide-react';

export const UseCases: React.FC = () => {
  const cases = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Empresas',
      description: 'Automatize o atendimento corporativo'
    },
    {
      icon: <ShoppingBag className="w-12 h-12" />,
      title: 'E-commerce',
      description: 'Suporte 24/7 para suas vendas online'
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: 'Suporte',
      description: 'Resolução rápida de problemas'
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: 'Educação',
      description: 'Assistente virtual para estudantes'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="use-cases">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white" data-aos="fade-up">
          Onde Utilizar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((item, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-primary-600 dark:text-primary-400 mb-6 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};