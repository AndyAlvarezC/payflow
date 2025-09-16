import HighlightsCard from "../components/FeaturesCard";
import { AiOutlineSafety } from "react-icons/ai";
import { IoRocketOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { CiGlobe } from "react-icons/ci";

export default function Highlights() {
  return (
    <section id="features" className="pt-20 md:pt-48 flex flex-col md:flex-row md:w-[80%] md:m-auto items-center justify-center min-h-screen md:min-h-1/2 gap-6">
      <HighlightsCard
        icon={IoRocketOutline}
        title="Rápido"
        text="Accede a tu dinero al instante"
      />
      <HighlightsCard
        icon={AiOutlineSafety}
        title="Seguro"
        text="Protegemos tus datos y transacciones"
      />
      <HighlightsCard
        icon={GoGraph}
        title="Intuitivo"
        text="Analiza tus finanzas en segundos"
      />
      <HighlightsCard
        icon={CiGlobe}
        title="Siempre conectado"
        text="Disponible donde quieras, cuando quieras"
      />
    </section>
  );
}
