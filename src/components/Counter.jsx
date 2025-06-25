
import { useContext, useState } from 'react'
import Button from './Button'
import Text from './Text'
import CartContext from '../context/CartContext'

function Counter() {

    const [count, setCount] = useState(0)
    const { decrement, increment } = useContext(CartContext)

    return (
        <div className='d-flex justify-center gap-24'>
            <Button 
                label="-" 
                color="primary" 
                variant="outline" 
                onClick={() => {
                    setCount(count - 1)
                    decrement()
                }}
                disabled={count === 0} />
            <Text as="span" text={count} />
            <Button 
                label="+"
                color="primary"
                variant="outline"
                onClick={() => {
                    setCount(count + 1)
                    increment()
                }}/>
        </div>
    )
}

export default Counter