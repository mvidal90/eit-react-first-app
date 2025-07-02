import { useState } from "react"
import CartContext from "./CartContext"

function CartProvider({children}) {

    const [countProducts, setCountProducts] = useState([]); // { product: {}, quantity: 1}

    // const increment = () => setCountProducts( countProducts + 1 );
    // const decrement = () => setCountProducts( countProducts - 1 );

    const increment = (prod, quantity) => {
        const findProduct = countProducts.find( obj => obj.product.id === prod.id )
        if (!findProduct) {
            setCountProducts([ 
                ...countProducts,
                {
                    product: prod,
                    quantity
                }
            ])
        } else {
            setCountProducts(
                countProducts.map(
                    obj => 
                        obj.product.id === prod.id ?
                            {
                                product: prod,
                                quantity
                            }
                        : obj
                )
            )
        }
    }

    const decrement = (prod, quantity) => {
        if (!quantity) { // !0 => true 
            setCountProducts(
                countProducts.filter( obj => obj.product.id !== prod.id )
            )
        } else {
            setCountProducts(
                countProducts.map(
                    obj => 
                        obj.product.id === prod.id ?
                            {
                                product: prod,
                                quantity
                            }
                        : obj
                )
            )
        }
    }

    const totalQuantity = countProducts.reduce(
        (acc, prod) => acc + prod.quantity, 0
    )

    const resetCart = () => setCountProducts([])

    return (
        <CartContext.Provider value={{ 
            countProducts, 
            increment,
            decrement,
            totalQuantity,
            resetCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider