import UserContext from "../utils/userContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class AboutComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
    return(<div className="container">
        <h2>About page</h2>
        <h2>Logged In User : 
            <UserContext.Consumer>{({loggedInUser})=><p className="text-xl font-bold">{loggedInUser}</p>}</UserContext.Consumer>
        </h2>
        <User name={"Udaya"}/>
        <UserClass name={"Praneeth"}/>
    </div>)
    }
}
export default AboutComponent;