import { NavLink, useNavigate } from 'react-router'

import Text from './Text'
import Cart from './Cart'

function Navbar() {
    const navigate = useNavigate()
    return (
        <header className='header__content'>
            <div className='header__container'>
                <Text as="h1" text="React router" onClick={() => navigate("/")} />
                <nav>
                    <NavLink to="/products/Almacen">Almacen</NavLink>
                    <NavLink to="/products/Verduleria">Verduleria</NavLink>
                    <NavLink to="/products/Limpieza">Limpieza</NavLink>
                    <Cart />
                </nav>
            </div>
        </header>
    )
}

export default Navbar