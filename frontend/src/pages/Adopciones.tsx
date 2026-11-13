import TarjetaGato from '../components/molecules/TarjetaGato'
import { gatos } from '../data/gatos'

function Adopciones() {
  return (
    <section>
      <h1>Gatitos en adopción</h1>

      <p>Conoce a nuestros gatitos y encuentra a tu próximo compañero.</p>

      <div className="row g-4">
        {gatos.map((gato) => (
          <div className="col-12 col-md-6" key={gato.id}>
            <TarjetaGato
              id={gato.id}
              nombre={gato.nombre}
              descripcion={gato.descripcion}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Adopciones