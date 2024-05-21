# New relic react agent

This project integrates new relic's metric API by sending data to the API and querying for it.
For the sake of implementation, a random user generator API is being used to fetch a user.
This user information object is then treated as metric log of type summary.
This user is then sent to the new relic metric API of type summary by using the POST APIs exposed by new relic.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

You should see three buttons on the screen once its launched:

## Fetch a random user!: 
Fetches a random user from the API(https://randomuser.me/api/)


## Send this data to new relic!: 
Initiates a POST request to new relic API(https://metric-api.newrelic.com/metric/v1)
The status code returned in 202


## Fetch data from new relic!: 
This makes a GET API call to new relic servers to fetch the metric by passing in the account ID and the metric name/key. This is currently giving 401, still a work in progress!



