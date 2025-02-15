import User from "./User";
import UserClass from './UserClass';
import React from "react";
class AboutComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    componentDidMount(){
      }
    render(){
    return(<div className="container">
        <h2>About page</h2>
        <User name={'Udaya'}/>
        <UserClass name={'Praneeth'}/>
    </div>)
    }
}
// function based
// const AboutComponent = () =>{
//     return(<div className="container">
//         <h2>About page</h2>
//         <User name={'Udaya'}/>
//         <UserClass name={'Praneeth'}/>
//     </div>)
// }
export default AboutComponent;