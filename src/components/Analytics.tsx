import React from 'react';
import { PieChart, BarChart2, TrendingUp } from 'lucide-react';

export const Analytics: React.FC = () => {
  return (
    <section className="py-20" id="analytics">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white" data-aos="fade-up">
            SnakeAnalytics: Insights Poderosos
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300" data-aos="fade-up" data-aos-delay="100">
            Tome decisões baseadas em dados reais
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <PieChart className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-6" />
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Análise de Satisfação
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Monitore a satisfação dos usuários em tempo real
            </p>
          </div>

          <div 
            className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <BarChart2 className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-6" />
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Métricas de Desempenho
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Acompanhe KPIs importantes do seu chatbot
            </p>
          </div>

          <div 
            className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <TrendingUp className="w-12 h-12 text-primary-600 dark:text-primary-400 mb-6" />
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Relatórios Detalhados
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Exportação e análise avançada de dados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};