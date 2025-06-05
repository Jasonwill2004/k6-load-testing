# K6 Load Testing Project

This repository contains performance testing scripts using K6, an open-source load testing tool.

## Project Structure

```
k6_tests/
├── performance/
│   └── load_test.js
└── README.md
```

## Prerequisites

- [K6](https://k6.io/docs/getting-started/installation/) installed on your machine
- Node.js (optional, for development)

## Test Scenarios

The current test suite includes:

### Basic Load Test (`load_test.js`)
- **Virtual Users**: 10
- **Duration**: 10 seconds
- **Target API**: JSONPlaceholder API
- **Endpoint**: GET /posts/1

The test checks for:
- 200 status code response
- Response time under 500ms

## Running the Tests

To run the load test:

```bash
k6 run performance/load_test.js
```

## Test Configuration

The test is configured with the following parameters:

```javascript
export let options = {
  vus: 10,      // Number of virtual users
  duration: '10s' // Test duration
};
```

## Success Criteria

The test validates:
1. HTTP Response Status = 200
2. Response Time < 500ms

## Results Interpretation

After running the test, K6 will output:
- HTTP request statistics
- Response time metrics
- Success/failure rates for checks

