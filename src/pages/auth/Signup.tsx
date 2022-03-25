import axios from "axios";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { signup } from "../../api/auth";

type Props = {};
type InputForm = {
  name: string;
  email: string;
  password: string;
};
const Signup = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputForm>();

  const onSubmit = async (user: InputForm) => {
    try {
      const { data } = await signup(user)
    } catch (error) {
        console.log(error);
    }
  };
  return (
    <form
      className="col-4 offset-4 text-start"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-center">Đăng ký</h1>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" {...register("name")} />
      </div>
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

export default Signup;
