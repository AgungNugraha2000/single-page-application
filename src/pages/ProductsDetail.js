import React from 'react'
import { useParams } from 'react-router-dom'

function ProductsDetail() {
    const params = useParams()

    return (
        <section>
            <h1>Product Detail</h1>
        </section>
    )
}

export default ProductsDetail