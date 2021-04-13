import React from 'react'

export const PersonalDeSalud = () => {
    return (
        <div>
             <h1>Personal De Salud</h1>
             <form className="form">
                 <input type="text" placeholder="Ingresá tu nombre"></input>
                 <input type="text" placeholder="Ingresá tu mail"></input>
                 <input type="password" placeholder="Ingresá tu contraseña"></input>
                 <input type="submit"></input>
             </form>
        </div>
    )
}
 export default PersonalDeSalud