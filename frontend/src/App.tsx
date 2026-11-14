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

      <main className="container py-5">
        <Routes>
          <Route
            path="/"
            element={
              <section>
                <h1>PawCats — Adopción de gatitos</h1>

                <p>
                  Conectamos gatitos rescatados con familias que les den un
                  hogar.
                </p>

                <Link to="/adopciones" className="btn btn-primary">
                  Conocer a los gatitos
                </Link>
              </section>
            }
          />

          <Route path="/adopciones" element={<Adopciones />} />
          <Route path="/adopciones/:id" element={<DetalleGato />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </main>
    </>
  )
}

export default App