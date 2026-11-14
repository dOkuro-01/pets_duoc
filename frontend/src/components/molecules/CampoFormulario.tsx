import Input from '../atoms/Input'

interface CampoFormularioProps {
  id: string
  etiqueta: string
  tipo: string
  valor: string
  alCambiar: (valor: string) => void
  error?: string
}

function CampoFormulario({
  id,
  etiqueta,
  tipo,
  valor,
  alCambiar,
  error,
}: CampoFormularioProps) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {etiqueta}
      </label>

      <Input
        id={id}
        tipo={tipo}
        valor={valor}
        alCambiar={alCambiar}
      />

      {error && <p className="text-danger mt-1">{error}</p>}
    </div>
  )
}

export default CampoFormulario