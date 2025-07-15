import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ManufacturersPage from "./pages/ManufacturersPage";
import PWDNutritionPage from "./pages/PWDNutritionPage";
import ProtellaPage from "./pages/ProtellaPage";
import ElevenFitPage from "./pages/ElevenFitPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="overflow-x-hidden">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/manufacturers" element={<ManufacturersPage />} />
              <Route path="/manufacturers/pwd-nutrition" element={<PWDNutritionPage />} />
              <Route path="/manufacturers/protella" element={<ProtellaPage />} />
              <Route path="/manufacturers/elevenfit" element={<ElevenFitPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
