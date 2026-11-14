import { Link } from 'react-router-dom'

interface TarjetaGatoProps {
  id: number
  nombre: string
  descripcion: string
  imagen: string
}

function TarjetaGato({
  id,
  nombre,
  descripcion,
  imagen,
}: TarjetaGatoProps) {
  return (
    <article className="card h-100">
      <img
        src={imagen}
        alt={`Foto de ${nombre}`}
        className="card-img-top"
        style={{ height: '220px', objectFit: 'cover' }}
      />

      <div className="card-body">
        <h2 className="card-title">{nombre}</h2>

        <p className="card-text">{descripcion}</p>

        <Link to={`/adopciones/${id}`} className="btn btn-primary">
          Ver detalle
        </Link>
      </div>
    </article>
  )
}

export default TarjetaGato