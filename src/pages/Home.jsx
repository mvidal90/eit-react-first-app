import { useEffect, useState } from "react";
import Card from "../components/Card";
import Text from "../components/Text";
import { getProducts } from "../utils/api";
import Loading from "../components/Loading";

// import { products } from "../data/products";

export default function Home() {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setLoading(true)
        getProducts()
            .then( prods => setProducts(prods) )
            .catch( err => console.error(err) )
            .finally( () => setLoading(false))
    }, [])
    
    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Text as="h2" text="Home page" />
            <div className="products__grid">
                {
                    products.map(
                        data =>
                            <Card key={data.id} {...data}/>
                    )
                }
            </div>
        </>
    )
}
