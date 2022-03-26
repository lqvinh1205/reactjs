import { Navigate } from 'react-router-dom';

type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user);
    if(user.role == 0) {
        return <Navigate to="/" />
    }
    return props.children
}

export default PrivateRouter