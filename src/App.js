import {useState} from 'react';
import axios from "axios";
import './App.css';
import { queryNewRelic, sendDataToNewRelic } from './utils';


export default function App() {
  const [user, setUser] = useState(null);
  const [postSuccess, setPostSuccess] = useState(false);
  const [fetchSuccess, setFetchSuccess] = useState(false);

  const sendData = () => {
    if(!user) return;
    if(sendDataToNewRelic(user)) setPostSuccess(true);
    else setPostSuccess(false);
  }

  const fetchData = () => {
    if(!user) return;
    queryNewRelic(setFetchSuccess);
  }

  async function fetchRandomUser() {
    try {
        const response = await axios.get('https://randomuser.me/api/');
        setUser(response.data.results[0]);
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
        <div className="button-group">
          <button className="button-single" onClick={() => fetchRandomUser()} >
            Fetch a random user!
          </button>
          <button className="button-single" onClick={() => sendData(true)}>
            Send this data to new relic!
          </button>
          <button className="button-single" onClick={() => fetchData(true)}>
            Fetch data from new relic!
          </button>
        </div>
      <br/><br/>
      <div className="random-user">
        {postSuccess && (
          <p>Data successfully sent to new relic!</p>
        )}
        {fetchSuccess && (
          <p>Data fetched successfully from new relic!</p>
        )}
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