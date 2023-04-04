import Link from 'next/link';
import React from 'react';

export default function SuperHeader() {
  return (
    <section className='section-superheader'>
          <div className="flex justify-end">
            <div className="flex items-center">
              <Link href="/" className="texto-superheader">
                Registro
              </Link>
              <Link href="/acerca" className="texto-superheader">
                Login
              </Link>
              <form>
                <input type="text" placeholder="Busca..." className="cuadro-buscar"/>
              </form>
              <button type="submit" className='text-buscar'>Buscar</button>
            </div>
          </div>
    </section>
  );
}
