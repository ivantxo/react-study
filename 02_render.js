import React from 'react';
import ReactDOM from 'react-dom';


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Ivan',
  lastName: 'Freire'
};

const element = (
  <h1>
  	Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
