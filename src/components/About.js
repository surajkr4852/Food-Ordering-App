import UserClass from "./UserClass"
import {Component} from "react";
import UserContext from "../utils/UserContext";
class About extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="about">
                <h1>About</h1>
                <div>
                    <UserContext.Consumer>
                    {(data)=><h3 className="font-bold">{data.loggedInUser}</h3>}
                    </UserContext.Consumer>
                </div>
                <h2>This is Suraj's Project</h2>
                <UserClass name="Suraj (Class)" location="Ranchi (Class)"/>
            </div>
        )
    }
}
export default About;