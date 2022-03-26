import React, { useEffect } from 'react'
import {useForm, SubmitHandler} from "react-hook-form"
import { read } from '../api/products'
import { useNavigate, useParams } from 'react-router-dom'
type Inputs = { // kiểu dữ liệu của từng ô input
    name: string,
    price: number,
    category: string
}

type ProductEditProps = {
    onUpdate: (product: Inputs) => void
}

const ProductEdit = (props: ProductEditProps) => {
    const navigate = useNavigate()
    const { id } = useParams()
    
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id)
            reset(data)
        } 
        getProduct()
    }, [])
    // khai báo các component sử dụng từ hook useForm 
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>()
    // register: để lấy dữ liệu từ ô input
    // handleSubmit: valid input trước khi thực hiện hàm onSubmit
    const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
        props.onUpdate(dataInput)
        navigate("/admin/products")
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("name")} placeholder='Ten san pham' />
            <input type="number" {...register("price")} placeholder='Gia san pham' />
            <input type="text" {...register("category")} placeholder='Danh muc' />
            <button>Add</button>
        </form>
    </div>
  )
}

export default ProductEdit