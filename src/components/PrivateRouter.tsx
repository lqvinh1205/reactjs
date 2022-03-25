import React from 'react'
import { Navigate } from 'react-router-dom';

type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const user = localStorage.getItem("user")
    console.log(typeof localStorage.getItem("user"));
    
    console.log(typeof user);
    if(user.name === "admin") {
        return <Navigate to="/" />
    }
    return props.children
}

export default PrivateRouter