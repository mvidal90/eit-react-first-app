import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Counter from "../components/Counter";
import Text from "../components/Text";

import { products } from "../data/products";

export default function ProductDetail() {

    const { id } = useParams()
    const [product, setProduct] = useState(undefined)

    useEffect(() => {
        setProduct(
            products.find(
                prod => prod.id === parseInt(id) 
            )
        )
    }, [id])
    
    return (
        product ? (
            <div className='detail__container'>
                <div className="d-flex justify-between align-center">
                    <Text as="h2" text={product.name}/>
                    <Text as="strong" text={`$ ${product.amount}`}/>
                </div>
                <Text as="span" text={`(${product.category})`}/>
                <hr />
                <Counter />
            </div>
        ) : undefined
    )
}
