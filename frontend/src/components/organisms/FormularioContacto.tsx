import { useState } from 'react'
import CampoFormulario from '../molecules/CampoFormulario'

function FormularioContacto() {
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [correo, setCorreo] = useState('')
  const [vivienda, setVivienda] = useState('')

  const [errores, setErrores] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    vivienda: '',
  })

  const [mensaje, setMensaje] = useState('')

  function validarFormulario() {
    const nuevosErrores = {
      nombre: '',
      telefono: '',
      correo: '',
      vivienda: '',
    }

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let hayErrores = false

    if (nombre.trim() === '') {
      nuevosErrores.nombre = 'El nombre es obligatorio.'
      hayErrores = true
    }

    if (telefono.trim() === '') {
      nuevosErrores.telefono = 'El teléfono es obligatorio.'
      hayErrores = true
    }

    if (correo.trim() === '') {
      nuevosErrores.correo = 'El correo es obligatorio.'
      hayErrores = true
    } else if (!formatoCorreo.test(correo.trim())) {
      nuevosErrores.correo = 'Ingresa un correo válido.'
      hayErrores = true
    }

    if (vivienda === '') {
      nuevosErrores.vivienda = 'Selecciona un tipo de vivienda.'
      hayErrores = true
    }

    setErrores(nuevosErrores)

    if (hayErrores) {
      setMensaje('')
    } else {
      setMensaje('Formulario completado correctamente.')
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
        alCambiar={setNombre}
        error={errores.nombre}
      />

      <CampoFormulario
        id="telefono"
        etiqueta="Número de teléfono"
        tipo="tel"
        valor={telefono}
        alCambiar={setTelefono}
        error={errores.telefono}
      />

      <CampoFormulario
        id="correo"
        etiqueta="Correo electrónico"
        tipo="email"
        valor={correo}
        alCambiar={setCorreo}
        error={errores.correo}
      />

      <div className="mb-3">
        <label htmlFor="vivienda" className="form-label">
          Tipo de vivienda
        </label>

        <select
          id="vivienda"
          className="form-select"
          value={vivienda}
          onChange={(evento) => setVivienda(evento.target.value)}
        >
          <option value="">Selecciona una opción</option>
          <option value="casa">Casa</option>
          <option value="departamento">Departamento</option>
          <option value="otro">Otro</option>
        </select>

        {errores.vivienda && (
          <p className="text-danger mt-1">{errores.vivienda}</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Enviar solicitud
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