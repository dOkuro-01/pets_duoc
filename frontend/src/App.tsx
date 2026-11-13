import './App.css'
import Boton from './components/atoms/Boton'
import TarjetaGato from './components/molecules/TarjetaGato'

function App() {
  return (
    <main className="container py-5">
      <h1>PawCats — Adopción de gatitos</h1>

      <p>
        Conectamos gatitos rescatados con familias que les den un hogar.
      </p>

      <Boton texto="Conocer a los gatitos" />

      <section className="mt-4">
        <h2>Gatitos en adopción</h2>

        <div className="row g-4">
          <div className="col-12 col-md-6">
            <TarjetaGato
              nombre="Luna"
              descripcion="Una gatita cariñosa que busca una familia."
            />
          </div>

          <div className="col-12 col-md-6">
            <TarjetaGato
              nombre="Simón"
              descripcion="Un gatito juguetón que disfruta de la compañía."
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App