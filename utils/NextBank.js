const axios = require('axios');

const buf = Buffer.from(process.env.NEXTBANK_USER + ":" + process.env.NEXTBANK_PASSWORD);
const base64 = buf.toString('base64');

const NextBankClient = axios.create({
    baseURL: process.env.NEXTBANK_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64
    },
});

// const response = await axios({
//     baseURL: process.env.NEXTBANK_ENDPOINT,
//     url: '/api/v2/command/AccountTaggedDebitMemo',
//     method: 'post',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Basic ' + req.authentication
//     },
//     data: JSON.stringify(req.body, null, 2)
// });

// Add a request interceptor
NextBankClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
NextBankClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

module.exports = NextBankClient;
