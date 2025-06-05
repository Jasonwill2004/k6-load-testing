import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '10s', target: 5 },   // Ramp-up to 5 VUs
    { duration: '10s', target: 5 },   // Stay at 5 VUs
    { duration: '10s', target: 0 },   // Ramp-down to 0 VUs
  ],
};

export default function () {
  let res = http.get('https://jsonplaceholder.typicode.com/posts/1');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}
