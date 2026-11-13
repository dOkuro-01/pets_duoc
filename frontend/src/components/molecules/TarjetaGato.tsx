import Boton from '../atoms/Boton'

interface TarjetaGatoProps {
  nombre: string
  descripcion: string
}

function TarjetaGato({ nombre, descripcion }: TarjetaGatoProps) {
  return (
    <article className="card">
      <div className="card-body">
        <h2 className="card-title">{nombre}</h2>
        <p className="card-text">{descripcion}</p>
        <Boton texto="Ver detalle" />
      </div>
    </article>
  )
}

export default TarjetaGato