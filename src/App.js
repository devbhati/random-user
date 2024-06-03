import { useState} from 'react';
import './App.css';
import { fetchMetrics, queryNewRelic, sendDataToNewRelic } from './utils';

export default function App() {
  const [metrics, setMetrics] = useState(null);
  const [postSuccess, setPostSuccess] = useState(false);
  const [fetchSuccess, setFetchSuccess] = useState(false);

  const sendData = () => {
    if(!metrics) return;
    if(sendDataToNewRelic(metrics)) setPostSuccess(true);
    else setPostSuccess(false);
  }

  const fetchData = () => {
    if(!metrics) return;
    queryNewRelic(setFetchSuccess);
  }

  return (
    <div className="App">
      <header className="App-header">
        New relic telemetry
      </header>
      <br/><br/>
        <div className="button-group">
          <button className="button-single" onClick={() => fetchMetrics('devbhati', 'random-user', setMetrics)} >
            Fetch repo metric!
          </button>
          <button className="button-single" onClick={() => sendData(true)}>
            Send this data to new relic!
          </button>
          <button className="button-single" onClick={() => fetchData(true)}>
            Fetch data from new relic!
          </button>
        </div>
      <br/><br/>
      <div className="random-metrics">
        {postSuccess && (
          <p>Data successfully sent to new relic!</p>
        )}
        {fetchSuccess && (
          <p>Data fetched successfully from new relic!</p>
        )}
        {metrics && (
          <>
          {/* <img src={user.picture.large} alt="user"/> */}
          <p>Health percentage: {metrics.health_percentage}</p>
          < br/>
          <p>Description: {metrics.description}</p>
          < br/>
          <p>README URL: {metrics.files.readme.url}</p>
          </>
        )}
      </div>
    </div>
  );
}