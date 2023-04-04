import { useEffect, useState } from 'react';

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Obtener todos los encabezados del post
    const headings = Array.from(document.querySelectorAll('h2, h3, h4'));
    // Crear un objeto para cada encabezado con su texto y su ID
    const headingsWithId = headings.map((heading) => ({
      text: heading.textContent,
      id: heading.getAttribute('id'),
    }));
    // Actualizar el estado con la lista de encabezados
    setHeadings(headingsWithId);
  }, []);

  return (
    <div className="table-of-contents">
      <h2>Índice</h2>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
