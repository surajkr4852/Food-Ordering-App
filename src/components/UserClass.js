import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy Name",
                bio:"Dummy Data",
                location:"Dummy",
                avatar_url:"fdsjkn"
            }
        }
    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/surajkr4852");
        const json=await data.json();
        // console.log(json);
        this.setState({
            userInfo:json,
        })
    }
    render(){
        const{avatar_url,name,bio,location}=this.state.userInfo;
        return(
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name:{name}</h2>
                <h3>Boi :{bio}</h3>
                <h3>Location: {location}</h3>
            </div>
        )
    }
}
export default UserClass;