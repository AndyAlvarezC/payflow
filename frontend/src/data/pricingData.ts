import { Users, Zap, Shield } from "lucide-react";

export const plans = [
  {
    name: "Gratis",
    price: "0€",
    period: "",
    description: "Perfecto para empezar",
    features: [
      "Dashboard básico",
      "Seguimiento de ingresos y gastos",
      "Soporte por email limitado",
      "Hasta 50 transacciones/mes",
    ],
    cta: "Empieza Gratis",
    popular: false,
    color: "border-slate-600 bg-slate-800/50 backdrop-blur-sm",
    buttonStyle:
      "bg-slate-700 hover:bg-slate-600 text-white border border-slate-600",
    icon: Shield,
  },
  {
    name: "Pro",
    price: "9,99€",
    period: "/mes",
    description: "Para profesionales y freelancers",
    features: [
      "Todo en Gratis",
      "Reportes avanzados de finanzas",
      "Integración con bancos principales",
      "Exportación de datos en Excel/PDF",
      "Soporte prioritario",
      "Transacciones ilimitadas",
      "Categorización automática",
    ],
    cta: "Contratar Pro",
    popular: true,
    color:
      "border-cyan-400 bg-slate-800/70 backdrop-blur-sm ring-2 ring-cyan-400/50",
    buttonStyle:
      "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg shadow-cyan-500/25",
    icon: Zap,
  },
  {
    name: "Empresa",
    price: "A medida",
    period: "",
    description: "Soluciones escalables para equipos",
    features: [
      "Todo en Pro",
      "Múltiples usuarios y roles",
      "API para integraciones personalizadas",
      "Dashboard avanzado con analítica extra",
      "Soporte dedicado 24/7",
      "Onboarding personalizado",
      "SLA garantizado",
    ],
    cta: "Hablar con Ventas",
    popular: false,
    color:
      "border-purple-400 bg-gradient-to-br from-slate-800/70 to-purple-900/30 backdrop-blur-sm",
    buttonStyle:
      "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white shadow-lg shadow-purple-500/25",
    icon: Users,
  },
];