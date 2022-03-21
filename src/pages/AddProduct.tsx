import React from 'react'
import { useForm } from 'react-hook-form'
import { ProductType } from '../types/products'


type AddProductProps = {
    onAdd: () => void
}
const AddProduct = (props: AddProductProps) => {
    const {register, handleSubmit, formState: { errors}} = useForm<ProductType>()
    const onSubmit = (product: ProductType) => {
        console.log(product);
        
    }
  return (
    <div>
        <form className='col-4 offset-4' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-center my-3'>Thêm sản phẩm</h1>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Tên sản phẩm</label>
                <input type="text" className="form-control" {...register("name")} id="name" placeholder='VD: Sản phẩm A' />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Giá</label>
                <input type="number" className="form-control" {...register("price")} id="price" placeholder='VD: 99'/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default AddProduct