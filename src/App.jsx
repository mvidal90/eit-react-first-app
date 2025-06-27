import CartProvider from './context/CartProvider'
import AppRoutes from './routes/AppRoutes'

import './sass/main.scss'

function App() {
    return (
        <CartProvider>
            <AppRoutes />
        </CartProvider>
    )
}

export default App
