function Servicios() {
  const servicios = [
    {
      icono: '🐾',
      titulo: 'Adopción responsable',
      texto:
        'Orientamos a las familias para que conozcan los cuidados y compromisos antes de adoptar.',
    },
    {
      icono: '🩺',
      titulo: 'Atención veterinaria',
      texto:
        'Promovemos controles veterinarios, vacunación y esterilización para nuestros gatitos.',
    },
    {
      icono: '💜',
      titulo: 'Acompañamiento',
      texto:
        'Entregamos información para ayudar a cada familia durante el proceso de adopción.',
    },
  ]

  return (
    <section className="servicios-pagina">
      <div className="servicios-encabezado">
        <p className="hero-etiqueta">Cómo ayudamos</p>

        <h1>Servicios PawCats</h1>

        <p>
          Acompañamos a cada gatito y a cada familia durante todo el proceso de
          adopción.
        </p>
      </div>

      <div className="row g-4 mt-4">
        {servicios.map((servicio) => (
          <div className="col-12 col-md-4" key={servicio.titulo}>
            <article className="service-card h-100">
              <div className="service-icon" aria-hidden="true">
                {servicio.icono}
              </div>

              <h2>{servicio.titulo}</h2>

              <p>{servicio.texto}</p>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Servicios