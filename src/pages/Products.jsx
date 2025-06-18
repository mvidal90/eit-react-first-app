import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../components/Card";
import Text from "../components/Text";

import { products } from "../data/products";

export default function Products() {

    const { category } = useParams()
    const [sectionProducts, setSectionProducts] = useState([]);

    useEffect(() => {
        setSectionProducts(
            products.filter( product => product.category === category )
        )
    }, [category])
    
    return (
        <>
            <Text as="h2" text="Productos" />
            <div className="products-grid">
                {
                    sectionProducts.map(
                        data =>
                            <Card key={data.id} {...data}/>
                    )
                }
            </div>
        </>
    )
}
