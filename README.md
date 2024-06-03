# New relic react agent

This project integrates new relic's metric API by sending data to the API and querying for it.
For the sake of implementation, this repo's community profile API is being used to fetch sample metric.
This returned response is then treated as metric log of type summary.
This metric is then sent to the new relic metric API of type summary by using the POST APIs exposed by new relic.
For the sake of implementation, a sample fetch API is also implemented which just gets user information from the NR servers

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

You should see three buttons on the screen once its launched:

## Fetch github project profile!: 
Fetches a random user from the API(https://api.github.com/repos/${user}/${repo}/community/profile)


## Send this data to new relic!: 
Initiates a POST request to new relic API(https://metric-api.newrelic.com/metric/v1)
The status code returned in 202


## Fetch data from new relic!: 
This makes a GET API call to new relic servers to fetch the metric
https://api.newrelic.com/graphql
Currently, a sample user information is being fetched using the NerdGraph APIs.
