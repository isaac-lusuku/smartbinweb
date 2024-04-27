import axios from 'axios';
// import fs from 'fs';

const axiosInstance = axios.create({
  httpsAgent: new axios.Agent({
    rejectUnauthorized: false,
    // ca: fs.readFileSync('./nginx-selfsigned.crt')
  })
});

export default axiosInstance;
