import { ArrowRight, Shield } from "lucide-react";
import PricingCard from "../components/PricingCard";

export default function Pricing() {
  return (
    <section className="py-16 md:py-48 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-metallic-gradient pb-6">
            Elige el plan perfecto para ti
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Escoge entre planes diseñados para particulares, profesionales o
            empresas. Transparencia total, sin sorpresas ni costes ocultos.
          </p>
        </div>

        <div>
          <PricingCard />
        </div>

        <div className="w-[100%] mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-slate-800/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-slate-700">
            <Shield className="w-20 h-20 md:w-6 md:h-6 text-green-400" />
            <span className="text-slate-300 font-medium text-sm">
              Todos los planes incluyen encriptación de nivel bancario y
              cumplimiento GDPR
            </span>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-2 transition-colors cursor-pointer">
            ¿Tienes preguntas? Consulta nuestras FAQ
            <ArrowRight className="w-6 h-6 md:w-4 md:h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
