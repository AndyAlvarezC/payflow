import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full flex md:p-6 justify-center z-50">
        <nav className="w-full md:w-[55%] h-16 md:rounded-3xl p-4 bg-transparent flex flex-row justify-between items-center">
          <div className="flex items-center md:hidden">
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
          </div>

          <div>
            <a href="/">
              <img
                src={logo}
                alt="logo"
                className="h-10 md:h-14 w-auto cursor-pointer"
              />
            </a>
          </div>

          {/* === Menú desktop === */}
          <div className="hidden md:flex text-white gap-8 items-center">
            <p className="cursor-pointer hover:text-blue-400 transition-colors duration-300">
              Feature
            </p>
            <p className="cursor-pointer hover:text-blue-400 transition-colors duration-300">
              Pricing
            </p>
            <p className="cursor-pointer hover:text-blue-400 transition-colors duration-300">
              Testimonials
            </p>
            <p className="cursor-pointer hover:text-blue-400 transition-colors duration-300">
              Contact
            </p>
          </div>
          <div className="hidden md:flex text-white">
            <button
              className="group relative bg-black/50 w-44 h-12 rounded-4xl overflow-hidden cursor-pointer 
                transition-all duration-500 ease-in-out text-white font-bold
                hover:shadow-[inset_0_0_20px_rgba(59,130,246,0.3),0_0_20px_rgba(59,130,246,0.2)]"
            >
              <div
                className="absolute bottom-0 left-0 w-full h-1 origin-center
                  bg-[radial-gradient(ellipse_at_center,_theme(colors.blue.500)_0%,_transparent_50%)]
                  transition-all duration-500 ease-in-out group-hover:opacity-0"
              ></div>
              <span className="relative z-10">Empieza Gratis</span>
            </button>
          </div>
        </nav>

        {/* === Menú desplegable móvil === */}
        <div
          className={`fixed top-16 left-0 w-full h-screen bg-black/50 text-white flex flex-col items-center 
            justify-start pt-32 gap-8 text-2xl font-bold transform transition-transform duration-300 ease-in-out z-40
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col gap-8 text-center mb-8">
            <p>Feature</p>
            <p>Pricing</p>
            <p>Testimonials</p>
            <p>Contact</p>
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
      </header>
    </>
  );
}
