import React from 'react'
import { Navigate } from 'react-router-dom';
import { getLs } from '../ultis/localstogare';

type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const isUser = getLs('user').user.role
    if(!isUser){
        return <Navigate to='/'/>
    }
    return props.children
}

export default PrivateRouter