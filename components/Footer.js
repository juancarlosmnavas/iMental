/*Este es el footer, lo que aparece al final de la página*/

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="center mt-5 flex justify-center space-x-4 bg-[#fff] p-4 text-xs"> {/* Aquí se dan los estilos, prefiero hacerlo en un .css o poniendo Styles={{}} que así */}
      <p>Piensa en ti </p>
      <span>|</span>
      {/* Este es el botón "Empieza por aquí" */}
      <Link href="/" className="font-medium text-pink-600">Empieza por aquí</Link>
    </footer>
  )
}
