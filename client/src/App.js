import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import IcecreamList from './components/IcecreamList';
import {Routes, Route} from 'react-router-dom'
import { useState,useEffect } from 'react';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) {
    return <h2>Welcome, {user.username}!</h2>;
  } else {
    return <Login onLogin={setUser} />;
  }
}



   [];
  return (
    
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new">
            <NewRecipe user={user} />
          </Route>
          <Route path="/">
            <RecipeList />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;