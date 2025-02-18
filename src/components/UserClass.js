import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo:{
        name:"Dummy",
        location: "Default",
      }
    };
  }
  async componentDidMount(){
  const data = await fetch("https://api.github.com/users/udaylakshmi123");
  const json = await data.json();
  this.setState({userInfo:json})
  }

  render() {
    const {userInfo} = this.state;
    return (
      <div className="user-card">
        <h2>Name: {userInfo.login}</h2>
        <h3>Location: {userInfo.location}</h3>
      </div>
    );
  }
}
export default UserClass;
