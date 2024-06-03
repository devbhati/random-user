import axios from "axios";

const QUERY_KEY = 'new-relic-react';
const NEW_RELIC_LICENSE_KEY = 'NEW_RELIC_LICENSE_KEY';

export async function sendDataToNewRelic(metric) {
    if(!metric) return;
    const CURRENT_TIME = Math.floor(Date.now() / 1000);
    const url = 'https://metric-api.newrelic.com/metric/v1';
    const headers = {
    'Content-Type': 'application/json',
    'Api-Key': NEW_RELIC_LICENSE_KEY
    };
    const data = [
        {
            metrics: [
                {
                    name: QUERY_KEY,
                    type: 'summary',
                    value: metric,
                    timestamp: CURRENT_TIME,
                    attributes: {
                        'host.name': 'dev.server.com'
                    }
                }
            ]
        }
    ];

    axios.post(url, data, { headers })
    .then(response => {
        console.log('Response:', response);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

export async function queryNewRelic(setFetchSuccess) {
    try {
        const response = await axios.post('http://localhost:4999/proxy/graphql', {
          query: '{ requestContext { userId apiKey } }'
        });
        console.log(response.data);
        setFetchSuccess(true);
    } catch (error) {
        console.error('Error fetching data:', error);
        setFetchSuccess(false);
    }
}

export async function fetchMetrics(user, repo, setter) {
    try {
        // const response = await axios.get('https://randomuser.me/api/');
        const response = await axios.get(`https://api.github.com/repos/${user}/${repo}/community/profile`);
        console.log(response.data);
        setter(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}
// DID NOT WORK! ####### webpack issue!!!!
// const {MetricBatch, CountMetric, MetricClient} = require('@newrelic/telemetry-sdk').telemetry.metrics;

// const API_KEY = 'NRBR-27e5bca8273c03c593c';

// export async function sendUserDataToNewRelic(user) {
//     if(!user) return;

//     const client = new MetricClient({
//         apiKey: API_KEY
//     });

//     const metric = new CountMetric('our-metric');

//     metric.record();

//     const batch = new MetricBatch(
//         { user }, Date.now(), 1000
//     );

//     batch.addMetric(metric);

//     client.send(batch, function(err, res, body) {
//         console.log(res.statusCode);
//     });

// }


// // // const { MetricBatch, MetricClient } = require('@newrelic-telemetry-sdk');
// // // import {MetricBatch, MetricClient} from '@newrelic/telemetry-sdk';
// // const {MetricBatch, CountMetric, MetricClient} = require('@newrelic/telemetry-sdk').telemetry.metrics

// // // New Relic API key
// // const NEW_RELIC_INSERT_KEY = 'NRBR-27e5bca8273c03c593c';

// // // Initialize New Relic Metric Client
// // const client = new MetricClient({ apiKey: NEW_RELIC_INSERT_KEY });

// // // Function to process and send data to New Relic
// // export async function sendToNewRelic(data) {
// //   if (!data) {
// //     console.log('No data to send.');
// //     return;
// //   }
// //   const metric = new CountMetric('random-user-metric');

// //   metric.record();

// //   const batch = new MetricBatch(
// //     {}, Date.now(), 1000      
// //   );

// //   batch.addMetric(metric)

// //   client.send(batch, function(err, res, body) {
// //     console.log(res.statusCode)
// //   });
// // }