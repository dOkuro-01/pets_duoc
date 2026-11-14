import { Link, useParams } from 'react-router-dom'
import { gatos } from '../data/gatos'

function DetalleGato() {
  const { id } = useParams()

  const gato = gatos.find((gato) => gato.id === Number(id))

  if (!gato) {
    return (
      <section>
        <h1>Gatito no encontrado</h1>
        <Link to="/adopciones">Volver al catálogo</Link>
      </section>
    )
  }

  return (
    <section>
      <h1>{gato.nombre}</h1>

      <p>{gato.descripcion}</p>

      <p>
        <strong>Edad:</strong> {gato.edad}
      </p>

      <p>
        <strong>Sexo:</strong> {gato.sexo}
      </p>

      <Link to="/adopciones" className="btn btn-secondary">
        Volver al catálogo
      </Link>
    </section>
  )
}

export default DetalleGato