import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      age: 22,
    };
    console.log('constructor')
  }
  componentDidMount(){
    console.log('component did mount')
  }
  render() {
    const {count} = this.state;
    console.log('render')
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h3>Age: {this.state.age}</h3>
        <h3>Count: {this.state.count}</h3>
        <button onClick={()=>{
           this.setState({
            count : this.state.count +1
        })
        }}>Count Increase</button>
        <h3>Location: Australia</h3>
        <h4>Contact: @udaylakshmi123</h4>
      </div>
    );
  }
}
export default UserClass;
