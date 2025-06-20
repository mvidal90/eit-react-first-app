import { useNavigate } from 'react-router'
import Text from './Text'

function Card({
    id,
    name,
    category,
    amount,
}) {
    const navigate = useNavigate();

    return (
        <div role='button' className='card__container' onClick={() => navigate(`/product/detail/${id}`)}>
            <Text as="h3" text={name}/>
            <Text as="span" text={`(${category})`}/>
            <hr />
            <Text as="strong" text={`$ ${amount}`}/>
        </div>
    )
}

export default Card