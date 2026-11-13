import { useState } from 'react'
import CampoFormulario from '../molecules/CampoFormulario'

function FormularioContacto() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [errorNombre, setErrorNombre] = useState('')
  const [errorCorreo, setErrorCorreo] = useState('')
  const [mensaje, setMensaje] = useState('')

  function validarFormulario() {
    setMensaje('')

    let hayErrores = false

    if (nombre.trim() === '') {
      setErrorNombre('El nombre es obligatorio.')
      hayErrores = true
    } else {
      setErrorNombre('')
    }

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (correo.trim() === '') {
      setErrorCorreo('El correo es obligatorio.')
      hayErrores = true
    } else if (!formatoCorreo.test(correo.trim())) {
      setErrorCorreo('Ingresa un correo válido.')
      hayErrores = true
    } else {
      setErrorCorreo('')
    }

    if (!hayErrores) {
      setMensaje('Los datos se validaron correctamente.')
    }
  }

  return (
    <form
      noValidate
      onSubmit={(evento) => {
        evento.preventDefault()
        validarFormulario()
      }}
    >
      <CampoFormulario
        id="nombre"
        etiqueta="Nombre"
        tipo="text"
        valor={nombre}
        alCambiar={(valor) => {
          setNombre(valor)
          setMensaje('')
        }}
        error={errorNombre}
      />

      <CampoFormulario
        id="correo"
        etiqueta="Correo electrónico"
        tipo="email"
        valor={correo}
        alCambiar={(valor) => {
          setCorreo(valor)
          setMensaje('')
        }}
        error={errorCorreo}
      />

      <button type="submit" className="btn btn-primary">
        Validar
      </button>

      {mensaje && (
        <p className="text-success mt-3" role="status">
          {mensaje}
        </p>
      )}
    </form>
  )
}

export default FormularioContacto