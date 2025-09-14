import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.svg"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-16 p-4 bg-black/50 flex flex-row justify-between items-center z-50">
        <div>
          <button
            className="text-2xl transition-transform duration-300 text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <HiX className="transform rotate-90 transition-transform duration-300" />
            ) : (
              <HiMenu className="transform rotate-0 transition-transform duration-300" />
            )}
          </button>
          <div
            className={`fixed top-16 left-0 w-full h-screen bg-black/50 text-white flex flex-col items-center 
              justify-start pt-32 gap-8 text-2xl font-bold transform transition-transform duration-300 ease-in-out z-40"
              ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="flex flex-col gap-8 text-center mb-8">
              <p>Feature</p>
              <p>Pricing</p>
              <p>Testimonials</p>
              <p>Contacto</p>
            </div>

            <button className="bg-black relative w-[75%] h-14 text-white font-bold rounded-4xl overflow-hidden">
              Login
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-1
                bg-[radial-gradient(ellipse_at_center,_theme(colors.blue.500)_0%,_transparent_60%)]"
              ></div>
            </button>
            <button className="bg-black relative w-[75%] h-14 text-white font-bold rounded-4xl overflow-hidden">
              Empieza Gratis
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100%] h-1
                bg-[radial-gradient(ellipse_at_center,_theme(colors.blue.500)_0%,_transparent_60%)]"
              ></div>
            </button>
          </div>
        </div>
        <div>
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </div>
      </nav>
    </>
  );
}
