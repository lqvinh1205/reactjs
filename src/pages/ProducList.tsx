import { Link, useNavigate } from 'react-router-dom'
import { ProductType } from '../types/products'
type ProducListProps = {
    products: ProductType[],
    onRemove: (id: number) => void
}

const ProducList = ({products, onRemove}: ProducListProps) => {
  return (
    <div>
       <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {products?.map((product, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <Link to={`edit/${product.id}`} className='btn btn-success me-3'>Edit</Link>
                                <button className='btn btn-danger' onClick={() => onRemove(product.id)}>Remove</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ProducList