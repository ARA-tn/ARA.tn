import React , {Component} from 'react';
import $ from 'jquery';
import axios from 'axios'
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
      body : "",
      image : ""
    }
    this.saveandgo = this.saveandgo.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.post = this.post.bind(this)
    this.handlethisChange = this.handlethisChange.bind(this)
    this.sendPic = this.sendPic.bind(this)
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
saveandgo(){
  this.post()
  this.props.change("homePage")
  alert("Article Created Succesfully")
}


sendPic(event){
const file = event.target.files[0];
console.log(event.target.files[0])
const formData = new FormData()
formData.append('image',file)
  // console.log(this.state.image,this.state.username)
  axios.post('/api/user/image',formData,{
headers:{
  'Accept': 'multipart/form-data'
}
})
  // .then (res => res.send())
  .then(res=> {
     console.log("send pic",res)
    this.setState({
      imageUrl : res.data.imageUrl
    }) 
    console.log(this.state)
    })
  .catch(err=>{console.log(err)})
}
  render(){
    
   return (

<div>
				<div className="login-wrap">
	<div className="login-html">
		<input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked/><label htmlFor="tab-1" className="tab">Create A Post</label>
		<input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab"></label>
		<div className="login-form">
			<div className="sign-in-htm">

				<div className="group">
					<label htmlFor="user" className="label">Post Title</label>
					<input id="title" type="text" placeholder="Title..." className ='input' name="title" onChange = {this.handleChange}/>
				</div>

				<div className="group">
					<label htmlFor="user" className="label">Adress</label>
					<input id="adress" type="text" placeholder="Adress..." className ='input' name="adress" onChange = {this.handleChange}/>
				</div>

 				<div className="group">
					<label htmlFor="user" className="label">Phone Number</label>
					<input id="phoneNumber" type="text" placeholder="Phone Number..." className ='input' name="phoneNumber" onChange = {this.handleChange}/>
				</div>     

        <select value={this.state.rentorsale} onChange={this.handlethisChange}>
        <option value=""></option>
            {[{label : "Rent",value : "rent"},{label : "Sale",value:"sale"}].map((option,k) => (
              <option key = {k} value={option.value}>{option.label}</option>
            ))}
          </select>

    
 				<div className="group">
					<label htmlFor="user" className="label">Price</label>
					<input id="price" type="number" placeholder="Price..." className ='input' name="price" onChange = {this.handleChange}/>
				</div>  

        <div>
   <label htmlFor="file" className="label">Select a file: </label>
  <input type="file"  id="myfile" name="image"  accept="image/*" multiple={false} onChange={this.sendPic} />
  </div>
  <br />

  <div>
  <label htmlFor="description" className="label">Description</label>
  <input className="create-body-textarea" onChange = {this.handleChange} name = "body" placeholder="Description..."/>
  </div>

				<div className="group">
					<input type="submit" className="button" value="Publish" onClick = {()=>{this.saveandgo()}}/>
				</div>



				</div>
			</div>
		</div>
	</div>
</div>
    )
  }
}
export default Post;
