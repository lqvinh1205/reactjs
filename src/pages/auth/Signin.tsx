import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signin } from "../../api/auth";

type Props = {};
type FormInput = {
    email: string,
    password: string
}
const Signin = (props: Props) => {
    const { register, handleSubmit, formState: { errors }} = useForm<FormInput>()
    const navigate = useNavigate()
    const onSubmit = async (user: FormInput) => {
        try {
            const { data } = await signin(user);
            localStorage.setItem("user",JSON.stringify(data));
            navigate('/admin')
        } catch (error) {
            
        }
    }
  return (
    <form
      className="col-4 offset-4 text-start"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-center">Đăng ký</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input type="email" className="form-control" {...register("email")} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          {...register("password")}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Signin;
