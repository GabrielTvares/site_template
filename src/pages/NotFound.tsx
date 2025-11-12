import React from "react";
import Footer from "@/components/Footer";

const NotFound = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <div className="flex-1 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Página não encontrada</p>
      <a href="/" className="text-gold underline hover:text-gold-dark transition-colors">Voltar para o início</a>
    </div>
    <Footer />
  </div>
);

export default NotFound;
