import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo/logo.svg";
import Button from "../components/Button";
import useScrollTo from "../utils/useScrollTo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = useScrollTo()

  return (
    <>
      <header className="fixed top-0 w-full flex md:p-6 justify-center z-50 overflow-hidden">
        <nav className="relative w-full md:w-[55%] h-16 p-4 md:h-20 flex items-center justify-between bg-black/50 backdrop-blur-lg md:p-4 md:bg-transparent md:rounded-4xl md:backdrop-blur-xs">
          <div className="flex items-center md:hidden">
            <button
              className="text-2xl transition-transform duration-300 md:hidden"
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
          <div className="hidden md:flex gap-8 items-center">
            <p
              onClick={() => {
                scrollTo("home");
                setIsOpen(false);
              }}
              className="cursor-pointer hover:text-gray-400 transition-colors duration-300"
            >
              Home
            </p>
            <p
              onClick={() => {
                scrollTo("features");
                setIsOpen(false);
              }}
              className="cursor-pointer hover:text-gray-400 transition-colors duration-300"
            >
              Features
            </p>
            <p
              onClick={() => {
                scrollTo("partners");
                setIsOpen(false);
              }}
              className="cursor-pointer hover:text-gray-400 transition-colors duration-300"
            >
              Partners
            </p>
            <p
              onClick={() => {
                scrollTo("demo");
                setIsOpen(false);
              }}
              className="cursor-pointer hover:text-gray-400 transition-colors duration-300"
            >
              Demo
            </p>
            <p
              onClick={() => {
                scrollTo("pricing");
                setIsOpen(false);
              }}
              className="cursor-pointer hover:text-gray-400 transition-colors duration-300"
            >
              Pricing
            </p>
          </div>
          <div className="hidden md:flex text-white">
            <Button text={"Empieza Gratis"} />
          </div>
        </nav>

        {/* === Menú desplegable móvil === */}
        <div
          className={`fixed top-16 left-0 w-full h-screen flex flex-col items-center 
              justify-start pt-32 gap-8 text-2xl font-bold transform transition-transform duration-300 ease-in-out z-40
              bg-black/50 backdrop-blur-lg
              ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col gap-8 text-center mb-8">
            <p
              onClick={() => {
                scrollTo("home");
                setIsOpen(false);
              }}
              className="cursor-pointer hover:text-gray-400 transition-colors duration-300"
            >
              Home
            </p>
            <p
              onClick={() => {
                scrollTo("features");
                setIsOpen(false);
              }}
            >
              Features
            </p>
            <p
              onClick={() => {
                scrollTo("partners");
                setIsOpen(false);
              }}
            >
              Partners
            </p>
            <p
              onClick={() => {
                scrollTo("demo");
                setIsOpen(false);
              }}
            >
              Demo
            </p>
            <p
              onClick={() => {
                scrollTo("pricing");
                setIsOpen(false);
              }}
            >
              Pricing
            </p>
          </div>

          <Button text={"Login"} className="w-[75%] h-14" />
          <Button text={"Empieza Gratis"} className="w-[75%] h-14" />
        </div>
      </header>
    </>
  );
}

