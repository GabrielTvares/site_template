import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Monta a mensagem para o WhatsApp
    const whatsappMessage = `Olá! Gostaria de conhecer o Navi BI.\n\nNome: ${formData.name}\nE-mail: ${formData.email}\nEmpresa: ${formData.company}\nMensagem: ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = "5532984678715"; // Substitua pelo seu número de WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
  <section id="contato" className="py-12 sm:py-20 bg-gradient-to-b from-background to-petrol-dark/20 relative overflow-hidden" ref={ref}>
      {/* Background Decoration (harmonizado com Hero/Features) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Golden Glow - canto superior esquerdo */}
        <div className="absolute top-32 left-24 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-gold/10 via-gold/5 to-transparent blur-[120px]" />

        {/* Deep Petrol Glow - canto inferior direito */}
        <div className="absolute bottom-32 right-24 w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-petrol/20 via-petrol-dark/10 to-transparent blur-[140px]" />

        {/* Partículas estáticas douradas */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.3,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            <span className="text-gradient-gold">Entre em Contato</span>
          </h2>
          <p className="text-[#C4D7E0] text-lg max-w-2xl mx-auto">
            Venha conhecer o Navi BI para transformar sua gestão empresarial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div 
            className="glass-effect p-6 sm:p-8 rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome
                </label>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-petrol-dark/50 border-gold/20 focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  E-mail
                </label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-petrol-dark/50 border-gold/20 focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#C4D7E0] mb-2">
                  Empresa
                </label>
                <Input
                  type="text"
                  placeholder="Nome da empresa"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                  className="bg-petrol-dark/50 border-gold/20 focus:border-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  placeholder="Como podemos ajudar?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-petrol-dark/50 border-gold/20 focus:border-gold min-h-[120px]"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-black-soft font-semibold py-4 sm:py-6 rounded-xl shadow-gold hover:scale-105 transition-all duration-300"
              >
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">E-mail</h3>
                  <p className="text-[#C4D7E0]">mayconpires@turbineduca.com</p>
                </div>
              </div>
            </div>

            {/* <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Telefone</h3>
                  <p className="text-[#C4D7E0]">+55 (47) 9999-9999</p>
                </div>
              </div>
            </div> */}

            <div className="glass-effect p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Endereço</h3>
                  <p className="text-[#C4D7E0]">
                    {/* Endereço<br /> */}
                    Juiz de Fora - MG
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
