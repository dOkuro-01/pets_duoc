interface BotonProps {
  texto: string
}

function Boton({ texto }: BotonProps) {
  return (
    <button type="button" className="btn btn-primary">
      {texto}
    </button>
  )
}

export default Boton