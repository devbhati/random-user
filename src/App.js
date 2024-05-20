import {useState} from 'react';
import './App.css';
import axios from "axios";

function App() {

  const [user, setUser] = useState(null);

  async function fetchRandomUser() {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      setUser(response.data.results[0]);
      // sendToNewRelic(user);
    } catch (error) {
      console.error('Error fetching random user:', error);
      return null;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        New relic telemetry
      </header>
      <br/><br/>
      <button className="fetch-button" onClick={() => fetchRandomUser()} >
        Fetch a random user!
      </button>
      <br/><br/>
      <div className="random-user">
        {user && (
          <>
          <img src={user.picture.large} alt="user"/>
          <p>Name: {user.name.title + ` ` + user.name.first + ` ` + user.name.last}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
