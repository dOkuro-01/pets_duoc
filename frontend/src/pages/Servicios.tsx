function Servicios() {
  return (
    <section>
      <h1>Servicios</h1>

      <p>
        En PawCats apoyamos la adopción responsable y el bienestar de los
        gatitos rescatados.
      </p>

      <div className="row g-4 mt-3">
        <div className="col-12 col-md-4">
          <article className="card h-100">
            <div className="card-body">
              <h2 className="h4">Adopción responsable</h2>
              <p>
                Orientamos a las familias para que conozcan los cuidados y
                compromisos antes de adoptar.
              </p>
            </div>
          </article>
        </div>

        <div className="col-12 col-md-4">
          <article className="card h-100">
            <div className="card-body">
              <h2 className="h4">Atención veterinaria</h2>
              <p>
                Promovemos controles veterinarios, vacunación y esterilización
                para nuestros gatitos.
              </p>
            </div>
          </article>
        </div>

        <div className="col-12 col-md-4">
          <article className="card h-100">
            <div className="card-body">
              <h2 className="h4">Acompañamiento</h2>
              <p>
                Entregamos información para ayudar a cada familia durante el
                proceso de adopción.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Servicios