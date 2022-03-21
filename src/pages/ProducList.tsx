import { ProductType } from '../types/products'

type ProducListProps = {
    products: ProductType[]
}

const ProducList = ({products}: ProducListProps) => {
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
                                <button className='btn btn-danger'>Remove</button>
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