import React from 'react';

const User = (props) => {
  return (
    <div>
      <h4>{props.username}</h4>
      <p>{props.department}</p>
    </div>
  )
}

export default User;