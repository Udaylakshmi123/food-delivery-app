import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      age: 22,
      userInfo:{
        name:'Dummy',
        location: 'Default',
        avatar_url: null
      }
    };
  }
  async componentDidMount(){
  const data = await fetch('https://api.github.com/users/udaylakshmi123');
  const json = await data.json();
  this.setState({userInfo:json})
  }
  componentDidUpdate(){
    console.log('compoent updata')
  }
  componentWillUnmount(){
    console.log('will unmount')
  }
  render() {
    const {userInfo} = this.state;
    return (
      <div className="user-card">
        <h2>Name: {userInfo.login}</h2>
        <h3>Age: {userInfo.location}</h3>
        <img src={userInfo.avatar_url} />
        {/* <h3>Count: {this.state.count}</h3> */}
        {/* <button onClick={()=>{
           this.setState({
            count : this.state.count +1
        })
        }}>Count Increase</button>
        <h3>Location: Australia</h3>
        <h4>Contact: @udaylakshmi123</h4> */}
      </div>
    );
  }
}
export default UserClass;
