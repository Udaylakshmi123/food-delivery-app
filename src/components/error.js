import { useRouteError } from "react-router";

const ErrorComponent = () =>{
    const err = useRouteError();
    console.log(err);
    return (<div>
        <h2>OOPS... Something Went Wrong</h2>
    </div>)
}
export default ErrorComponent;