import { useEffect } from "react";

const User = (props)=>{
    return (<div className="user-card">
        <h2>Name: {props.name}</h2>
        <h3>Location: Australia</h3>
        <h4>Contact: @udaylakshmi123</h4>
    </div>)
}

export default User;