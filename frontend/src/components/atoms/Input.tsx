interface InputProps {
  id: string
  tipo: string
  valor: string
  alCambiar: (valor: string) => void
}

function Input({ id, tipo, valor, alCambiar }: InputProps) {
  return (
    <input
      id={id}
      type={tipo}
      className="form-control"
      value={valor}
      onChange={(evento) => alCambiar(evento.target.value)}
    />
  )
}

export default Input