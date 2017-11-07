import React from 'react';
import ReactDOM from 'react-dom';


function formatDate(date) {
  return date.toLocaleString();
}

function Avatar(props) {
  return (
  	<img className="Avatar"
  	  src={props.user.avatarUrl}
  	  alt={props.user.name}
  	/>
  );
}

function UserInfo(props) {
  return (
  	<div className="UserInfo">
  	  <Avatar user={props.user} />
  	  <div className="UserInfo-name">
  	    {props.user.name}
  	  </div>
  	</div>
  );
}

function Comment(props) {
  return (
  	<div className="Comment">
	  <UserInfo user={props.author} />
	  <div className="Comment-text">
		  {props.text}
	  </div>
      <div className="Comment-date">
		  {formatDate(props.date)}
	  </div>
	</div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning react',
  author: {
  	name: 'Raton del agua',
	  avatarUrl: 'http://www.sierradebaza.org/Fichas_fauna/05_09_rata-agua/img_8.jpg'
  }
}

ReactDOM.render(
  <Comment
    date={comment.date}
	text={comment.text}
	author={comment.author} />,
	document.getElementById('root')
);
