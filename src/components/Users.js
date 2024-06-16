import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';


class Users extends Component {

  // to define state you would use this 
  constructor() {
    super();
    // state is always an obj in class based comps 
    this.state = {
      showUsers: true,
      moreState: 'Yes'
    };
  }

  toggleUsersHandler () {
    // when changing the state you call a special method 
    this.setState((curState) => {
      return {
        showUsers: !curState.showUsers 
      };
  })
  }

  render () {

    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    )
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
