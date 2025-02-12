import User from "./user";
import UserClass from './UserClass';
import React from "react";
class AboutComponent extends React.Component {
    constructor(props){
        super(props);
        console.log('Parent constructor')
        this.state={}
    }
    componentDidMount(){
        console.log('parent component did mount')
      }
    render(){
        console.log('Parent render')
    return(<div className="container">
        <h2>About page</h2>
        <User name={'Udaya'}/>
        <UserClass name={'Praneeth'}/>
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