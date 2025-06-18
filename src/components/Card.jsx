import Text from './Text'

import '../styles/Card.css'

function Card({
    name,
    category,
    amount,
}) {
    return (
        <div className='card-container'>
            <Text as="h3" text={name}/>
            <Text as="span" text={`(${category})`}/>
            <hr />
            <Text as="strong" text={`$ ${amount}`}/>
        </div>
    )
}

export default Card