import Card from "../components/Card";
import Text from "../components/Text";

import { products } from "../data/products";

export default function Home() {
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
