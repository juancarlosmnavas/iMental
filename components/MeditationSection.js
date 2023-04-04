import Link from 'next/link';

export default function MeditationSection() {
  return (
    <section className='section-medi'>
      <h2 className='title-index'>Meditación</h2>
        <div className='text'>
          <p>
            La meditación es una práctica que te ayuda a calmar la mente y mejorar la concentración. Te permite vivir
            el momento presente con plenitud y reducir el estrés. Con nuestra aplicación, puedes acceder a diferentes
            meditaciones guiadas que te ayudarán a encontrar la paz interior.
          </p>
          <div style={{ marginTop: '30px' }}>
            <Link href="/MeditationPost" className="boton">Comenzar ahora</Link>
          </div>
        </div>
    </section>
  );
}
