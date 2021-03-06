import React,{Component} from "react";
import moment from "moment";
import $ from "jquery"
class Postviewonclick extends Component { 
        constructor(props){
                super(props)
        this.patch = this.patch.bind(this)
        }
        

componentDidMount(){
        this.patch()
}

patch(){
        const server = `http://localhost:3000/api/user/announce/${this.props.lift._id}`
        $.ajax({
                method : "PATCH",
                url : server,

        }).then(data=>{
          this.props.lift.views++  
        })
        .catch(err=>console.log("error patch"))
}
        render(){
                return(
        <div className="post">
    <h1 className="post-title">{this.props.lift.title}</h1>
    <div className="post-byline"><span className="post-byline-author">{this.props.lift.username}</span> {moment(this.props.lift.createdAt,"YYYY-MM-DD").fromNow()}</div>
    <img src={this.props.lift.imageUrl} className="post-image"/>
    <p>{this.props.lift.body}</p>
  </div>
                 ) }
}

export default Postviewonclick