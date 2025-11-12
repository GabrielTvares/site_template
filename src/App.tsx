import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import QuemSomos from "./pages/QuemSomos";
import PoliticaDeCookies from "./pages/PoliticaDeCookies";
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade";
import TestimonialsPage from "./pages/TestimonialsPage";
import Consultoria from "./pages/Consultoria";
import MentoriaExa from "./pages/MentoriaExa";
import { CookieBanner } from "@/components/CookieBanner";
// ...existing code...

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WhatsAppButton />
      <CookieBanner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/QuemSomos" element={<QuemSomos />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/mentoria-exa" element={<MentoriaExa />} />
          <Route path="/depoimentos" element={<TestimonialsPage />} />
          <Route path="/politica-de-cookies" element={<PoliticaDeCookies />} />
          <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
// ...existing code...
          {/* compatibilidade: rota antiga -> redireciona para nova */}
          <Route path="/SobreMim" element={<QuemSomos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
