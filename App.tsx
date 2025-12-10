import React, { useState, useEffect } from 'react';
import { Section } from './components/Section';
import { Button } from './components/Button';
import { Features } from './components/Features';
import { Navbar } from './components/Navbar';
import { 
  CheckCircle2, 
  XCircle, 
  Calendar, 
  Users, 
  Lock,
  ArrowRight
} from 'lucide-react';

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2025-12-12T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToCheckout = () => {
    document.getElementById('scarcity')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans text-gray-100 selection:bg-fuchsia-500 selection:text-white pb-24 relative">
      
      {/* Global Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/30 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-fuchsia-900/20 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />

      {/* Sticky Bottom CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-6 bg-[#0B0A14]/90 backdrop-blur-xl border-t border-white/10 md:hidden">
      <a href="https://plataformamiami.com/ph-checkout">
        <Button fullWidth variant="primary">
          QUERO MINHA VAGA
        </Button>
        </a>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center max-w-5xl">
          <div className="mb-12 animate-float">
            <img 
              src="https://storage.googleapis.com/msgsndr/dkM0aNpySiIFf3uusFTa/media/6939cbe358db0bac66414662.png" 
              alt="Power House Miami" 
              className="h-[400px] md:max-w-md rotate-90 drop-shadow-[0_0_50px_rgba(120,57,238,0.3)]"
            />
          </div>
          
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 mb-10 shadow-lg shadow-purple-900/20">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="font-medium tracking-wide text-sm text-gray-300">12 a 14 de Dezembro 2025</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            Construa seu legado <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 text-glow">
              em apenas 3 dias
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed mb-12">
             Imersão profunda para criar seu método, livro e produto ao lado de mentores especialistas.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a href="https://plataformamiami.com/ph-checkout">
        <Button fullWidth variant="primary">
          QUERO MINHA VAGA
        </Button>
        </a>
            <Button variant="secondary" className="text-lg px-12 py-4">
              Saber Mais
            </Button>
          </div>
        </div>
      </div>

      {/* The Hook / Concept */}
      <Section id="concept">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
             <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                Não planeje. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">Construa.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                E se você pudesse ativar seu modo criador máximo? Sem distrações, sem procrastinação. Apenas você, 20 criadores selecionados e uma mansão preparada para produção de alta performance.
              </p>
             </div>
             
             <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[50px] rounded-full group-hover:bg-purple-500/30 transition-colors"></div>
                <p className="text-white italic text-lg relative z-10">
                  "Enquanto câmeras transmitem os bastidores, sua autoridade cresce em tempo real. Um reality show onde o protagonista é o seu negócio."
                </p>
             </div>

             <div className="flex items-center gap-4 text-gray-400 text-sm font-medium tracking-widest uppercase">
               <span className="w-12 h-[1px] bg-gray-700"></span>
               Power House Experience
             </div>
          </div>

          <div className="relative group perspective-1000">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-[2.5rem] rotate-3 blur opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
              alt="Mansion Interior" 
              className="relative rounded-[2.5rem] shadow-2xl z-10 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 border border-white/10 w-full object-cover aspect-[4/5]"
            />
             {/* Floating Badge */}
            <div className="absolute -bottom-10 -left-10 z-20 glass-panel p-6 rounded-2xl animate-float hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-green-500/20 p-3 rounded-full">
                  <CheckCircle2 className="text-green-400 w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Status</p>
                  <p className="text-white font-bold">100% Imersivo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Comparison Section */}
      <Section className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-3xl md:text-5xl font-bold mb-6">A Evolução da <span className="text-fuchsia-500">Criação</span></h2>
             <p className="text-gray-400 max-w-2xl mx-auto">Esqueça os métodos tradicionais. O Power House é uma cápsula de aceleração temporal para o seu negócio.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Old Way */}
            <div className="p-10 rounded-[2.5rem] bg-[#15131e] border border-white/5 relative group hover:bg-[#1a1725] transition-colors">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-400 mb-2">Método Tradicional</h3>
                <div className="h-1 w-12 bg-gray-700 rounded-full"></div>
              </div>
              <ul className="space-y-6">
                {[
                  "Cursos teóricos sem prática",
                  "Eventos passivos e lotados",
                  "Solidão empreendedora",
                  "Projetos engavetados"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-500 group-hover:text-gray-400 transition-colors">
                    <XCircle className="w-5 h-5 text-gray-700 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Power House Way */}
            <div className="p-10 rounded-[2.5rem] bg-gradient-to-b from-[#201d2b] to-[#15131e] border border-violet-500/30 relative shadow-2xl shadow-violet-900/10 group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 to-fuchsia-600/5 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="mb-8 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                   <h3 className="text-xl font-bold text-white">Power House</h3>
                   <span className="bg-violet-500/20 text-violet-300 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Premium</span>
                </div>
                <div className="h-1 w-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"></div>
              </div>
              <ul className="space-y-6 relative z-10">
                {[
                  "Imersão prática de 3 dias",
                  "Networking de alto nível",
                  "Mentoria ativa e direta",
                  "Execução em tempo real"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-200">
                    <CheckCircle2 className="w-5 h-5 text-violet-500 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Methodology Section */}
      <Section glass>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold tracking-widest uppercase mb-6">
            Engine Tech
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Aceleração <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Impossível</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Nossa metodologia proprietária combina engenharia de narrativa, inteligência artificial e pressão criativa positiva.
          </p>
        </div>
        <Features />
      </Section>

      {/* Day in Life */}
      <Section className="bg-[#0B0A14]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-fuchsia-600 blur-[80px] opacity-20 rounded-full"></div>
                <div className="relative z-10 space-y-6">
                   <div className="glass-panel p-6 rounded-2xl border-l-4 border-violet-500 hover:bg-white/5 transition-colors duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">Manhã</h3>
                      <p className="text-gray-400 text-sm">Briefing estratégico e Idea Mining. A casa acorda com cheiro de café e novas ideias.</p>
                   </div>
                   <div className="glass-panel p-6 rounded-2xl border-l-4 border-fuchsia-500 md:ml-8 hover:bg-white/5 transition-colors duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">Tarde</h3>
                      <p className="text-gray-400 text-sm">Produção intensa (Deep Work). Mentores circulam ajustando rotas. O silêncio da produtividade.</p>
                   </div>
                   <div className="glass-panel p-6 rounded-2xl border-l-4 border-cyan-500 md:ml-16 hover:bg-white/5 transition-colors duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">Noite</h3>
                      <p className="text-gray-400 text-sm">Livestreams, Pitching e Conexão. Onde a mágica acontece e as parcerias se formam.</p>
                   </div>
                </div>
             </div>
             
             <div className="order-1 md:order-2 space-y-8">
                <h2 className="text-4xl font-bold">Um dia na <br/><span className="text-fuchsia-500">Experiência</span></h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                   Não é um evento de palestras. É um laboratório vivo. Você entra projeto e sai produto. A energia do ambiente te impede de pensar pequeno.
                </p>
                <div className="flex flex-wrap gap-4">
                   <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">Networking Curado</span>
                   <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">All Inclusive</span>
                   <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">Acesso Vitalício</span>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* Audience Section */}
      <Section glass>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-8">Quem deve <span className="text-cyan-400">aplicar?</span></h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Criadores", "Consultores", "Especialistas", 
                "Empreendedores", "Educadores", "Autores"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  <span className="font-medium text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 bg-gradient-to-br from-[#1a1825] to-[#0f0e16] p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 blur-[60px] rounded-full group-hover:bg-fuchsia-500/20 transition-colors"></div>
            
            <h3 className="text-2xl font-bold mb-8 text-white relative z-10">O Resultado Final</h3>
            
            <div className="space-y-5 relative z-10">
              {[
                "Seu Método Proprietário",
                "Livro Estruturado",
                "Palestra Pronta",
                "Funil de Vendas Ativo"
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between group/item">
                  <span className="text-lg font-light text-gray-400 group-hover/item:text-white transition-colors">{item}</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/item:bg-violet-500 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-gray-500 group-hover/item:text-white" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/10">
               <p className="text-sm text-gray-500">Transformação completa em 72 horas.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Scarcity / CTA Section */}
      <Section id="scarcity" className="py-32">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <div className="inline-block mb-8">
            <span className="px-4 py-2 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-bold tracking-widest uppercase">
              Vagas Limitadas
            </span>
          </div>
          
          <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter text-white">
            15 VAGAS
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Não conseguimos atender mais. A exclusividade é parte do método.
            <br/>Garanta seu lugar na história.
          </p>
          
          <div className="glass-panel p-8 rounded-2xl max-w-xl mx-auto mb-12 flex flex-col items-center">
             <div className="w-full flex justify-between text-sm text-gray-400 mb-2 uppercase tracking-wider font-bold">
               <span>Disponibilidade</span>
               <span className="text-white">92% Vendido</span>
             </div>
             <div className="w-full h-3 bg-[#1a1825] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 w-[92%] rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
             </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <a href="https://plataformamiami.com/ph-checkout">
        <Button fullWidth variant="primary">
          GARANTIR MINHA VAGA
        </Button>
        </a>
            <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest">
              <Lock size={12} className="text-green-500" /> Pagamento Seguro via Stripe
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#08070e] text-center relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
           <img src="https://storage.googleapis.com/msgsndr/dkM0aNpySiIFf3uusFTa/media/6939cbe358db0bac66414662.png" alt="Logo" className="h-[200px]   transition-all rotate-90" />
           <p className="text-gray-600 text-xs">© 2025 Power House Miami. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default App;