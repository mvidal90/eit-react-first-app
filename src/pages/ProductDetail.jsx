import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Counter from "../components/Counter";
import Text from "../components/Text";

// import { products } from "../data/products";
import { getProductById } from "../utils/api";
import Loading from "../components/Loading";

export default function ProductDetail() {

    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState(undefined)

    useEffect(() => {
        setLoading(true)
        getProductById(id)
            .then( prod => setProduct(prod))
            .catch( err => console.error(err) )
            .finally( () => setLoading(false))
    }, [id])

    if (loading) {
        return <Loading />
    }
    
    return (
        product ? (
            <div className='detail__container'>
                <div className="d-flex justify-between align-center">
                    <Text as="h2" text={product.name}/>
                    <Text as="strong" text={`$ ${product.amount}`}/>
                </div>
                <Text as="span" text={`(${product.category})`}/>
                <hr />
                <Counter product={product} />
            </div>
        ) : undefined
    )
}
