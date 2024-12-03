import React from 'react';
import { Bot, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Bot className="w-8 h-8 text-primary-400 mr-2" />
              <span className="text-2xl font-bold">SnakeAssist</span>
            </div>
            <p className="text-gray-400">
              Transformando o atendimento ao cliente com inteligência artificial
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition duration-300">Recursos</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition duration-300">Preços</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary-400" />
                <span className="text-gray-400">contato@snakeassist.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary-400" />
                <span className="text-gray-400">(11) 9999-9999</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-primary-400" />
                <span className="text-gray-400">São Paulo, SP</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SnakeAssist. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};