
import { useState } from 'react'
import Button from './Button'
import Text from './Text'

function Counter() {

    const [count, setCount] = useState(0)

    return (
        <div className='d-flex justify-center gap-24'>
            <Button label="-" color="primary" variant="outline" onClick={() => setCount(count - 1)} disabled={count === 0} />
            <Text as="span" text={count} />
            <Button label="+" color="primary" variant="outline" onClick={() => setCount(count + 1)}/>
        </div>
    )
}

export default Counter