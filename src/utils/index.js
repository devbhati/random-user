// // const { MetricBatch, MetricClient } = require('@newrelic-telemetry-sdk');
// // import {MetricBatch, MetricClient} from '@newrelic/telemetry-sdk';
// const {MetricBatch, CountMetric, MetricClient} = require('@newrelic/telemetry-sdk').telemetry.metrics

// // New Relic API key
// const NEW_RELIC_INSERT_KEY = 'NRBR-27e5bca8273c03c593c';

// // Initialize New Relic Metric Client
// const client = new MetricClient({ apiKey: NEW_RELIC_INSERT_KEY });

// // Function to process and send data to New Relic
// export async function sendToNewRelic(data) {
//   if (!data) {
//     console.log('No data to send.');
//     return;
//   }
//   const metric = new CountMetric('random-user-metric');

//   metric.record();

//   const batch = new MetricBatch(
//     {}, Date.now(), 1000      
//   );

//   batch.addMetric(metric)

//   client.send(batch, function(err, res, body) {
//     console.log(res.statusCode)
//   });
// }