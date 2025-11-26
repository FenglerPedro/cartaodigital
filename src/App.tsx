import React, { useState } from 'react';
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Facebook,
  Globe,
  MapPin,
  Star,
  MessageCircle,
  Heart
} from 'lucide-react';

function App() {
  const [liked, setLiked] = useState(false);

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/pedro.fengler/',
      color: 'from-purple-600 to-pink-600',
      description: '@pedro.fengler'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/pedro-miguel-fengler-1b83662a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'from-blue-600 to-blue-800',
      description: 'Pedro Miguel Fengler'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:eupedrofengler@gmail.com',
      color: 'from-red-500 to-red-700',
      description: 'Contato profissional'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/share/17CKyzq5qZ/',
      color: 'from-blue-600 to-blue-800',
      description: 'Página pessoal'
    },
    {
      name: 'WhatsApp',
      icon: Phone,
      url: 'https://wa.me/5554991238296',
      color: 'from-green-500 to-green-700',
      description: 'Mensagem direta'
    },
    {
      name: 'Site',
      icon: Globe,
      url: 'https://pedrofengler.com.br/',
      color: 'from-indigo-600 to-purple-600',
      description: 'Ver serviços'
    }
  ];

  return (
    <div className="min-h-screen animated-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl floating-orb"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-400/20 rounded-full blur-2xl floating-orb" style={{ animationDelay: '10s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-green-600/15 rounded-full blur-2xl floating-orb" style={{ animationDelay: '5s' }}></div>

      {/* Netflix-style grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-white/10"></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl w-full">

          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-sm font-medium">Digital Card</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              Pedro
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 ml-3">
                Fengler
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Canais oficiais de contato
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8 relative overflow-hidden group hover:scale-105 transition-all duration-500">
            {/* Background Gradient - fills the card with neon green on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/80 via-green-600/70 to-green-400/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="relative">
                <img
                  src="/profile.jpg"
                  alt="Pedro Fengler"
                  className="w-32 h-32 rounded-full object-cover shadow-2xl border-2 border-white/20"
                />
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-white group-hover:drop-shadow-lg transition-all duration-300">Pedro Fengler</h2>
                <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 mb-4 group-hover:text-white transition-all duration-300">
                  <MapPin className="w-4 h-4" />
                  <span>Brasil</span>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-md group-hover:text-white group-hover:drop-shadow-md transition-all duration-300">
                  Profissional de marketing digital. Clique nos ícones para entrar em contato comigo.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`p-3 rounded-full border transition-all duration-300 ${liked
                      ? 'bg-green-600 border-green-500 text-white'
                      : 'border-white/20 text-gray-400 hover:border-green-500/50 hover:text-green-400'
                    }`}
                >
                  <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                </button>
                <a
                  href="https://wa.me/5554991238296"
                  className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  Mensagem
                </a>
              </div>
            </div>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  className="group relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:bg-white hover:border-white transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                  <div className="relative z-10">
                    <div className="flex justify-center md:justify-start mb-4">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${link.color} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-black transition-all duration-300 text-center md:text-left">
                      {link.name}
                    </h3>

                    <p className="text-gray-400 text-sm group-hover:text-gray-700 transition-colors duration-300 text-center md:text-left">
                      {link.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 flex justify-center md:justify-start">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;