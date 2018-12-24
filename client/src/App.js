import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      users: []
    }
  }

  render() {
    const {users} = this.state
    const items = users.map((user, i) => {
      return (
        <li key={i}>{user.name} {user.password}</li>
      )
    })
    return (
      <div className="App">
        <button onClick={this.handleClick}>get users</button>
        <br/>
        <div>
          <ul>
            {items}
          </ul>
        </div>
      </div>
    );
  }

  handleClick() {
    axios.get('/user/list')
      .then(data => {
        console.log(data.data)
        this.setState({users: data.data})
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export default App;
