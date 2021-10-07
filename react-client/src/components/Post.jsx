import React , {Component} from 'react';
import $ from 'jquery';
class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      username : this.props.user,      
      title : "",
      adress : "",
      phoneNumber : "",
      rentorsale:"",
      price : "",
      imageUrl : "",
      body : ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.post = this.post.bind(this)
    this.handlethisChange = this.handlethisChange.bind(this)
  }

  handleChange(e) {
    console.log(this.state)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  post(){
    $.post("/api/user/announce",this.state)
    .then((data)=>{
    this.props.alldata.unshift(data)
    })
    .catch(err=>console.log("client post error"))
  }
  handlethisChange(e) {
    console.log("Done!!");
    this.setState({rentorsale : e.target.value });
    console.log(this.state.rentorsale)
  }


  render(){
    
    return (
<div className="post">
    <div className="create">
  <div className="create-editor">
    <h2>Create A Post</h2>
    <form>
      <input  className="create-input" type="text" onChange = {this.handleChange} name = "title" placeholder="Post Title"></input>
      <input  className="create-input" type="text" onChange = {this.handleChange} name = "adress" placeholder="Adress"></input>
      <input  className="create-input" type="text" onChange = {this.handleChange} name = "phoneNumber" placeholder="Phone Number"></input>
      <select value={this.state.rentorsale} onChange={this.handlethisChange}>
        <option value=""></option>
            {[{label : "Rent",value : "rent"},{label : "Sale",value:"sale"}].map((option,k) => (
              <option key = {k} value={option.value}>{option.label}</option>
            ))}
          </select>
      <input className="create-input" type="number" onChange = {this.handleChange} name = "price"  placeholder="Price"></input>
      <input className="create-input" type="text" onChange = {this.handleChange} name = "imageUrl" placeholder="Image URL"></input>
      <textarea className="create-body-textarea" onChange = {this.handleChange} name = "body" placeholder="Post Body"></textarea>
      <button className="create-submit-button" onClick = {()=>this.post()} type="submit">Save post</button>
    </form>
  </div>
</div>
<button onClick = {()=>console.log(this.state.rentorsale)} > console</button>
  </div>
    )
  }
}
export default Post;
