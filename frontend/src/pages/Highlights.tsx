import CardHighlights from "../components/CardHighlights";
import { AiOutlineSafety } from "react-icons/ai";
import { IoRocketOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { CiGlobe } from "react-icons/ci";

export default function Highlights() {
  return (
    <div className="pt-16 md:pt-32 flex flex-col md:flex-row md:w-[80%] md:m-auto items-center justify-center min-h-screen md:min-h-1/2 gap-6">
      <CardHighlights
        icon={IoRocketOutline}
        title="Rápido"
        text="Accede a tu dinero al instante"
      />
      <CardHighlights
        icon={AiOutlineSafety}
        title="Seguro"
        text="Protegemos tus datos y transacciones"
      />
      <CardHighlights
        icon={GoGraph}
        title="Intuitivo"
        text="Analiza tus finanzas en segundos"
      />
      <CardHighlights
        icon={CiGlobe}
        title="Siempre conectado"
        text="Disponible donde quieras, cuando quieras"
      />
    </div>
  );
}
