import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/organisms/Navbar'
import Adopciones from './pages/Adopciones'
import DetalleGato from './pages/DetalleGato'
import Contacto from './pages/Contacto'

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
                  Conectamos gatitos rescatados con familias
                  que les den un hogar.
                </p>

                <Link to="/adopciones" className="btn btn-primary">
                  Conocer a los gatitos
                </Link>
              </section>
            }
          />

          <Route path="/adopciones" element={<Adopciones />} />

          <Route
            path="/adopciones/:id"
            element={<DetalleGato />}
          />

          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </>
  )
}

export default App