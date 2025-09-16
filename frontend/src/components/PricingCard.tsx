import { Check, Star, ArrowRight } from "lucide-react";
import { plans } from "../data/pricingData";

export default function PricingCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12">
      {" "}
      {/* Eliminé space-y-12 */}
      {plans.map((plan, index) => {
        const IconComponent = plan.icon;
        return (
          <div
            key={index}
            className={`relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8 flex flex-col ${
              plan.color
            } ${plan.popular ? "transform scale-105" : ""}`}
          >
            {plan.popular && (
              <div className="absolute -top-8 md:-top-4 left-1/2 transform -translate-x-1/2">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm 
                font-semibold flex items-center gap-2 shadow-lg shadow-cyan-500/50"
                >
                  <Star className="w-4 h-4 fill-current" />
                  Más Popular
                </div>
              </div>
            )}

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full mb-4 border border-slate-500/50">
                <IconComponent className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-slate-400 mb-4">{plan.description}</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl md:text-5xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-slate-400 text-lg">{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {" "}
              {/* Agregué flex-grow */}
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5 border border-green-500/30">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-slate-300 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              {" "}
              <button
                className={`w-full py-4 px-6 rounded-xl font-semibold text-center flex items-center justify-center gap-2 ${plan.buttonStyle} 
                cursor-pointer focus:outline-none focus:ring-4 focus:ring-cyan-500/50`}
              >
                {plan.cta}
                <ArrowRight className="w-5 h-5" />
              </button>
              {plan.name === "Gratis" && (
                <p className="text-center text-sm text-slate-500 mt-4">
                  Sin tarjeta de crédito requerida
                </p>
              )}
              {plan.name === "Pro" && (
                <p className="text-center text-sm text-slate-500 mt-4">
                  Cancela en cualquier momento
                </p>
              )}
              {plan.name === "Empresa" && (
                <p className="text-center text-sm text-slate-500 mt-4">
                  Implementación personalizada
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
