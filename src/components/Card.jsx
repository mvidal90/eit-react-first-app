import { useNavigate } from 'react-router'
import Text from './Text'

import '../styles/Card.css'

function Card({
    id,
    name,
    category,
    amount,
}) {
    const navigate = useNavigate();

    return (
        <div role='button' className='card-container' onClick={() => navigate(`/product/detail/${id}`)}>
            <Text as="h3" text={name}/>
            <Text as="span" text={`(${category})`}/>
            <hr />
            <Text as="strong" text={`$ ${amount}`}/>
        </div>
    )
}

export default Card