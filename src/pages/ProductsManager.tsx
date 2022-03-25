import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../types/products'

type ProductsManagerProps = {
    products: Product[],
    onRemove: (id: number) => void
}

function ProductsManager({products, onRemove}: ProductsManagerProps) {
  return (
    <div>
        <table className='table table-bordered'>
            <thead>
                <th>Stt</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
            </thead>
            <tbody>
                {products.map((item, index) => {
                    return(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <Link to={`/products/${item._id}/edit`}>Edit</Link>
                                <button onClick={() => onRemove(item._id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ProductsManager