import { useState } from "react"
import CartContext from "./CartContext"

function CartProvider({children}) {

    const [countProducts, setCountProducts] = useState(0);

    const increment = () => setCountProducts( countProducts + 1 );
    const decrement = () => setCountProducts( countProducts - 1 );

    return (
        <CartContext.Provider value={{ quantity: countProducts, increment, decrement }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider