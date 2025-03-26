import React from 'react';
import './App.css';
import { auth } from './firebase/init';
import { 
createUserWithEmailAndPassword,
signInWithEmailAndPassword, 
signOut,
onAuthStateChanged,
} from "firebase/auth";

function App() {
  const [user,setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      console.log(user);
      if (user) {
        setUser(user)
      }
    })
  } , []);

  function register() {
    createUserWithEmailAndPassword(auth, 'email@email.com', 'test123')
      .then((user) => {
        console.log(user)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  function login() {
    signInWithEmailAndPassword(auth, 'email@email.com', 'test123')
    .then(( {user }) => {
      console.log(user);
      setUser(user);
    })
    .catch((error) => {
      console.log(error.message);
    })
  }
  
  function logout() {
    signOut(auth);
    setUser({});
  }

  return (
    <div className="App">
      <button onClick={register} className='btn_purple'>Register</button>

      <button onClick={login} className='btn'>Login</button>

      <button onClick={logout} className='btn'>Logout</button>

      {loading ? 'loading...' : <button className='btn_purple'> {user.email[0].toUpperCase()} </button>}
    </div>
  );
}

export default App;
