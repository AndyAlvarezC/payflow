import CardTrust from "../components/CardTrust";
import Visa from "../components/icons/Visa";
import Mastercard from "../components/icons/Mastercard"
import Paypal from "../components/icons/Paypal";
import Stripe from "../components/icons/Stripe";
import Applepay from "../components/icons/Applepay";
import Googlepay from "../components/icons/Googlepay";
import { GoShieldCheck } from "react-icons/go";
import { CiLock } from "react-icons/ci";

export default function Trust() {
  return (
    <section className="flex text-center m-auto min-h-screen md:min-h-2/3 pt-16 md:pt-48 w-full">
      <div className="w-full md:px-35">
        <h2 className="px-10 font-extrabold text-metallic-gradient text-2xl md:text-4xl p-4 md:w-1/3 md:text-left">
          Confiado por miles de clientes y partners
        </h2>

        <div className="grid grid-cols-2 md:flex pt-8 gap-10 m-auto w-[80%] md:w-full md:pt-16">
          <CardTrust logo={<Visa />} />
          <CardTrust logo={<Mastercard />} />
          <CardTrust logo={<Paypal />} />
          <CardTrust logo={<Stripe />} />
          <CardTrust logo={<Applepay />} />
          <CardTrust logo={<Googlepay />} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 text-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-200">+10.000</h3>
            <p className="pt-2">Usuarios activos</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-200">2M+</h3>
            <p className="pt-2">Transacciones procesadas</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-200">99.9%</h3>
            <p className="pt-2">Tiempo en línea</p>
          </div>
        </div>

        <div className="w-[80%] pt-12 flex justify-center m-auto gap-6">
          <CardTrust
            logo={<GoShieldCheck className="w-10 h-10 text-gray-200" />}
            text="Conexión SSL segura"
          />
          <CardTrust
            logo={<CiLock className="w-10 h-10 text-gray-200" />}
            text="Protección antifraude"
          />
        </div>
      </div>
    </section>
  );
}
