import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { formatNumber } from '../utils/format'

export default function Navbar() {
        const total = 25000
        const token = false
    return (
        <>
        <div className='menu'>
            <div className='menu-left'>
            <p>Pizzería Mamma Mia!</p>
      <Button variant="dark">🍕Home</Button>
      {token ? (
          <>
          <Button variant="dark">🔓Profile</Button>
          <Button variant="dark">🔒Logout</Button>
        </>
      ) : (
          <>
          <Button variant="dark">🔐Login</Button>
          <Button variant="dark">🔐Register</Button>
        </>
      )}
        </div>
        <div>
      <Button variant="dark">🛒Total: ${formatNumber(total)}</Button>
      </div>
      </div>
    </>
  )
}
