import React, { Component } from 'react'
import axios from "axios"

export default class Edit extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : "",
            adress: "",
            price : "",
            imageUrl : "",
            body : ""
        }
        this.put= this.put.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({
        [e.target.name] : e.target.value
        })

    }
    put(){
        console.log(this.state)
        axios.put(`http://localhost:3000/api/user/announce/${this.props.item}`,this.state)
        .then((data)=>console.log(data))
     .catch(err=>console.log(err))
    }


    render() {
        return (

<div>
<div className="login-wrap">
<div className="login-html">
<input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked/><label htmlFor="tab-1" className="tab">Make A Change</label>
<input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab"></label>
<div className="login-form">
<div className="sign-in-htm">

<div className="group">
    <label htmlFor="user" className="label">Title</label>
    <input id="title" type="text" placeholder="Title..." className ='input' name="title"onChange = {this.handleChange}/>
</div>

<div className="group">
    <label htmlFor="user" className="label">Adress</label>
    <input id="adress" type="text" placeholder="Adress..." className ='input' name="adress"onChange = {this.handleChange}/>
</div>

<div className="group">
    <label htmlFor="user" className="label">Price</label>
    <input id="price" type="text" placeholder="Price..." className ='input' name="price"onChange = {this.handleChange}/>
</div>

<div className="group">
    <label htmlFor="user" className="label">ImgUrl</label>
    <input id="ImgUrl" type="text" placeholder="ImgUrl..." className ='input' name="ImgUrl"onChange = {this.handleChange}/>
</div>

<div>
  <label htmlFor="description" className="label">Description</label>
  <input className="create-body-textarea" onChange = {this.handleChange} name = "body" placeholder="Description..."/>
  </div>

  <div className="group">
					<input type="submit" className="button" value="Save Change" onClick = {()=>this.put()}/>
				</div>



</div>
</div>
</div>
</div>
</div>


        )
    }
}
