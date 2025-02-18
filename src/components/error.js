import { useRouteError } from "react-router";

const ErrorComponent = () =>{
    const err = useRouteError();
    return (<div>
        <h2>OOPS... Something Went Wrong</h2>
    </div>)
}
export default ErrorComponent;