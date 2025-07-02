
import { useContext, useEffect, useState } from 'react'
import Button from './Button'
import Text from './Text'
import CartContext from '../context/CartContext'

function Counter({ product }) {

    const { countProducts, decrement, increment } = useContext(CartContext)
    const [count, setCount] = useState(
        countProducts.find( obj => obj.product.id === product.id )?.quantity || 0
    )

    useEffect(() => {
        if (!countProducts.length) {
            setCount(0)
        }
    }, [countProducts])

    return (
        <div className='d-flex justify-center gap-24'>
            <Button 
                label="-" 
                color="primary" 
                variant="outline" 
                onClick={() => {
                    setCount(count - 1)
                    decrement(product, count - 1)
                }}
                disabled={count === 0} />
            <Text as="span" text={count} />
            <Button 
                label="+"
                color="primary"
                variant="outline"
                onClick={() => {
                    setCount(count + 1)
                    increment(product, count + 1)
                }}/>
        </div>
    )
}

export default Counter