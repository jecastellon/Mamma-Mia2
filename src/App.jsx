import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Register from './components/Register'
import LoginPage from './components/LoginPage'

function App() {

  return (
    <div className="contenedor">
      <Navbar />
      {/*<Home/>*/}
      {/*<Register/>*/}
      <LoginPage />
      <Footer />
    </div>
  )
}

export default App
