import React from 'react';
import moment from 'moment';
const Preview = (props) => (
  <div className="feed">
    <ul>
      {props.data.map((e,k)=>(
      <li key = {k} className="feed-list-item" onClick={()=>props.changeView("login")}>
        <div id="previewDiv">    
          <div className="feed-list-item-title" >{e.title}</div>
      <div className="feed-list-item-byline"><span className="feed-list-item-byline-author">{e.username}</span>  - Added {moment(e.createdAt,"YYYY-MM-DD").fromNow()}</div>
      <img src={e.imageUrl} className="feed-list-item-image"/><br />
      <div className="feed-list-item-byline"><button id = "showbutt" className="feed-list-item-byline-author">Show Post </button></div>
   </div>
  
    </li>


      ))
      }
     

    </ul>
  </div>
);

export default Preview;
