import DashboardDemo from "../components/DashboardDemo";

export default function Demo() {
  return (
    <section className="w-full md:w-[80%] flex flex-col m-auto items-center justify-center gap-20 py-16 md:py-48">
      <div className="w-full space-y-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-metallic-gradient md:text-right md:max-w-md md:ml-auto">
          Control total de tus finanzas
        </h2>
        <p className="text-gray-300 text-md text-md md:text-left md:text-xl md:font-bold md:max-w-md md:mr-auto">
          Visualiza ingresos, gastos y balances en tiempo real, con un dashboard
          diseñado para tomar mejores decisiones
        </p>
      </div>

      <div className="relative w-[90%]">
        <DashboardDemo />
        <div className="absolute inset-0 rounded-2xl bg-blue-600/20 blur-xl -z-10" />
      </div>
    </section>
  );
}
