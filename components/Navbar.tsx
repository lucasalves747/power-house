import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCheckout = () => {
    document.getElementById('scarcity')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <nav className={`transition-all duration-500 rounded-full px-6 py-3 flex justify-between items-center w-full max-w-5xl ${
        isScrolled 
          ? 'bg-[#0B0A14]/70 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-900/10' 
          : 'bg-transparent'
      }`}>
        <div className="flex items-center gap-4">
           {/* Placeholder for small logo if needed, or simple text brand */}
           <img src="https://storage.googleapis.com/msgsndr/dkM0aNpySiIFf3uusFTa/media/6939cbe358db0bac66414662.png" alt="Logo" className="h-[100px] w-auto object-contain brightness-200 rotate-90 " />
        </div>
        
        <div className="hidden md:block">
          <a href="https://plataformamiami.com/ph-checkout">
        <Button fullWidth variant="primary">
          QUERO MINHA VAGA
        </Button>
        </a>
        </div>
      </nav>
    </div>
  );
};