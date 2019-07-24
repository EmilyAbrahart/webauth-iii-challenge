import React from 'react';
import axios from 'axios';
import User from './user';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      users: []
    }
  }

  getUsers = () => {
    axios
    .get('http://localhost:5000/api/users')
    .then(res => {
      this.setState({
        users: res.data
      })
    })
    .catch(err => console.log(err));
  }

  componentDidMount() {
    this.getUsers();
  }
  
  render() {
    return (
      <div>
        {this.state.users.map(user => 
         <User {...user} key={user.id} />
        )}
      </div>
    )
  }
}

export default Users;