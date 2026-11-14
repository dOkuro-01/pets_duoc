import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/organisms/Navbar'
import Adopciones from './pages/Adopciones'
import Contacto from './pages/Contacto'
import DetalleGato from './pages/DetalleGato'
import Servicios from './pages/Servicios'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <section className="hero-inicio">
                <div className="hero-contenido container">
                  <p className="hero-etiqueta">Adopción responsable</p>

                  <h1>PawCats</h1>

                  <p className="hero-texto">
                    Encontramos hogares llenos de cariño para gatitos
                    rescatados.
                  </p>

                  <Link to="/adopciones" className="btn btn-primary btn-lg">
                    Conocer gatitos
                  </Link>
                </div>
              </section>
            }
          />

          <Route
            path="/adopciones"
            element={
              <main className="container py-5">
                <Adopciones />
              </main>
            }
          />

          <Route
            path="/adopciones/:id"
            element={
              <main className="container py-5">
                <DetalleGato />
              </main>
            }
          />

          <Route
            path="/servicios"
            element={
              <main className="container py-5">
                <Servicios />
              </main>
            }
          />

          <Route
            path="/contacto"
            element={
              <main className="container py-5">
                <Contacto />
              </main>
            }
          />
        </Routes>
      </main>
    </>
  )
}

export default App