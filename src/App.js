import UserFinder from './components/UserFinder';
import UsersContext from './store/users-context';

const DUMMY_USERS = [
  { id: 'u1', name: 'Peter' },
  { id: 'u2', name: 'Moses' },
  { id: 'u3', name: 'Francis' },
  { id: 'u4', name: 'Delphister' },
  { id: 'u5', name: 'Agness' },
  { id: 'u6', name: 'Brian' },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <UsersContext.Provider value={usersContext}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;