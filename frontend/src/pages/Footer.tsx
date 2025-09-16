export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="w-full md:w-[80%] m-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12 transition-all duration-300">
        <div className="space-y-4">
          <div className="text-2xl font-extrabold text-metallic-gradient">
            PayFlow
          </div>
          <p className="text-sm leading-relaxed">
            PayFlow te ayuda a gestionar tus finanzas en tiempo real con
            seguridad y transparencia.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Producto</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-white transition-all duration-300"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-all duration-300"
              >
                Precios
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-all duration-300"
              >
                Demo
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Empresa</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-white transition-all duration-300"
              >
                Sobre nosotros
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-all duration-300"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-all duration-300"
              >
                Empleos
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className="hover:text-white transition-all duration-300"
              >
                Términos y condiciones
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-all duration-300"
              >
                Política de privacidad
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-all duration-300"
              >
                Seguridad
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800"></div>

      <div className="w-full md:w-[80%] m-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2025 PayFlow. Todos los derechos reservados.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-white transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-white transition-all duration-300"
          >
            Twitter
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-white transition-all duration-300"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
