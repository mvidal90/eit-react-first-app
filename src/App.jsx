import CartProvider from './context/Cartprovider'
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
