import React from 'react';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Básico',
      price: 'R$ 99',
      period: '/mês',
      features: [
        'Até 1.000 conversas/mês',
        'Suporte básico',
        'Personalização limitada',
        'Relatórios básicos'
      ]
    },
    {
      name: 'Profissional',
      price: 'R$ 299',
      period: '/mês',
      popular: true,
      features: [
        'Até 10.000 conversas/mês',
        'Suporte prioritário',
        'Personalização completa',
        'Analytics avançado',
        'Multi-idiomas'
      ]
    },
    {
      name: 'Empresarial',
      price: 'Sob consulta',
      features: [
        'Conversas ilimitadas',
        'Suporte 24/7',
        'Personalização total',
        'Analytics premium',
        'API dedicada',
        'SLA garantido'
      ]
    }
  ];

  return (
    <section className="py-20" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white" data-aos="fade-up">
          Planos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 ${
                plan.popular ? 'transform scale-105 border-2 border-primary-600' : ''
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {plan.popular && (
                <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold absolute -top-3 right-4">
                  Popular
                </span>
              )}
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-600 dark:text-gray-300">
                    {plan.period}
                  </span>
                )}
              </div>
              
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                    <Check className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition duration-300 ${
                plan.popular
                  ? 'bg-primary-600 hover:bg-primary-700 text-white'
                  : 'bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-900 dark:text-white'
              }`}>
                Começar Agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};