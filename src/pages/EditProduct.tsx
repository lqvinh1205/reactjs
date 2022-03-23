import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ProductType } from '../types/products'
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'

type InputProduct = {
    name: string,
    price: number
}
type EditProductProps = {
    onUpdate: (product: ProductType) => void
}
const EditProduct = (props: EditProductProps) => {
    const {register, handleSubmit, formState: { errors }, reset} = useForm<InputProduct>()
    const navigate = useNavigate();
    const { id } = useParams()

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await axios.get(`http://localhost:3001/products/${id}`);
            console.log(data);
            reset(data)
        }
        getProduct();
    }, [])
    const onSubmit: SubmitHandler<InputProduct>= (product) => {
        props.onUpdate(product)
        navigate("/products")
    }

  return (
    <div>
        <form className='col-4 offset-4' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-center my-3'>Thêm sản phẩm</h1>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Tên sản phẩm</label>
                <input type="text" className="form-control" {...register("name", { required: true})} id="name" placeholder='VD: Sản phẩm A'/>
                {errors.name && <span>Bat buoc nhap ten</span>}
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

export default EditProduct