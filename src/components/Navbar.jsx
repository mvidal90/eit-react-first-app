import { NavLink } from 'react-router'
import Text from './Text'

function Navbar() {
    return (
        <header className='header__content'>
            <div className='header__container'>
                <Text as="h1" text="React router" />
                <nav>
                    <NavLink to="/products/Almacen">Almacen</NavLink>
                    <NavLink to="/products/Verduleria">Verduleria</NavLink>
                    <NavLink to="/products/Limpieza">Limpieza</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Navbar