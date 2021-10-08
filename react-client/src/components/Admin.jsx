import React, { Component } from 'react'

export default class Admin extends Component {
    render() {
        return (
            <div>
                <div className="wyl feed-list-item-title">Hello Admin team. </div>
  <ul>
      {this.props.data.map((e)=>(

<li class="post-list-entry">
<button>Edit</button>  <button>Delete</button>
      <div class="post-list-entry-title">{e.title}.</div>
      <div class="post-list-entry-byline">{e.username}</div>
      <div class="stats-list-item-views">{e.views}</div>
    </li>
 ))}
    
  </ul>
</div>
        )
    }
}
