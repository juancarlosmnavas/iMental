import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header">
        <nav>
          <ul>
            <li>
              <a href="#">Inicio</a>
              </li>
            <li>
              <a href="#">Acerca</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
            <li>
              <a href="#">Servicios</a>
              <ul className="dropdown">
                <li>
                  <a href="#">Servicio 1</a>
                </li>
                <li>
                  <a href="#">Servicio 2</a>
                </li>
                <li>
                  <a href="#">Servicio 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header">
        <div className="search-login">
          <div className="search">
            <input type="text" placeholder="Buscar..." />
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  d="M22.5,22.5 L16.2,16.2 M14.5,9.5 C14.5,12.7385763 11.7385763,15.5 8.5,15.5 C5.26142375,15.5 2.5,12.7385763 2.5,9.5 C2.5,6.26142375 5.26142375,3.5 8.5,3.5 C11.7385763,3.5 14.5,6.26142375 14.5,9.5 Z"
                />
              </svg>
            </button>
          </div>
          <div className="login">
            <a href="#">Login</a>

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
