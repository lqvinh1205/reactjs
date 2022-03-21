import React from 'react'
import {useForm, SubmitHandler} from "react-hook-form"
import { create } from '../api/products'
import { useNavigate } from 'react-router-dom'
type Inputs = { // kiểu dữ liệu của từng ô input
    name: string,
    price: number
}

type ProductAddProps = {
    onAdd: (product: Inputs) => void
}

const ProductAdd = (props: ProductAddProps) => {
    console.log(props.onAdd);
    const navigate = useNavigate()
    // khai báo các component sử dụng từ hook useForm 
    // register: để lấy dữ liệu từ ô input
    // handleSubmit: valid input trước khi thực hiện hàm onSubmit
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
        // console.log(dataIsnput);
        props.onAdd(dataInput)
        navigate("/")
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("name")} placeholder='Ten san pham' />
            <input type="number" {...register("price")} placeholder='Gia san pham' />
            <button>Add</button>
        </form>
    </div>
  )
}

export default ProductAdd