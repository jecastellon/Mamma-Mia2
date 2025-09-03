import {useState} from 'react'
import Header from "./Header";

export default function Register() {
    const [nombre, setNombre] = useState("")
  return (
    <>
    <Header/>
    <form className='formulario'>
        <p>Email</p>
        <input type="text" name="Email" onChange={(e)=> {setNombre(e.target.value)}}/><br/>
        <p>Contraseña</p>
        <input type="text" name="Password" onChange={(e)=> {setNombre(e.target.value)}}/><br/>
        <p>Confirmar contraseña</p>
        <input type="text" name="RePassword" onChange={(e)=> {setNombre(e.target.value)}}/><br/><br/>
        <button type="submit">Enviar</button>
    </form>
    </>
  )
}
