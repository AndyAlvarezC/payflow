import Button from "../components/Button"
import Card from "../components/Card";

export default function Home() {
  return (
      <main className="pt-32 md:pt-48 flex flex-col items-center justify-center text-center relative z-10">
        <h1
          className="text-3xl md:text-5xl font-extrabold leading-tight text-metallic-gradient"
        >
          Fintech inteligente para tu tranquilidad financiera
        </h1>
        <h2 className="pt-6 text-lg md:text-xl text-gray-300 max-w-2xl font-bold">
          Visualiza y controla tus finanzas de manera rápida, segura y sencilla.
        </h2>

        <Card />

        <div className=" md:pt-12">
          <Button text="Comienza Ahora" className="w-48 h-14 text-lg" />
        </div>
      </main>
  );
}
