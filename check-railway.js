const https = require('https');

const token = '0f76c4a9-959e-44cd-83c6-1378cb7377d0';
const projectId = '9946880c-1e4d-417d-bedf-e212605cc890';

const options = {
  hostname: 'backboard.railway.app',
  path: '/graphql/v2',
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  }
};

const data = JSON.stringify({
  query: `query { project(id: "${projectId}") { id name services { edges { node { id name } } } } }`
});

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => console.log('Status:', res.statusCode, '\nBody:', body.substring(0, 500)));
});

req.on('error', (e) => console.error('Error:', e.message));
req.write(data);
req.end();
