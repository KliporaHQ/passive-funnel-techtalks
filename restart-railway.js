const https = require('https');

const token = '0f76c4a9-959e-44cd-83c6-1378cb7377d0';
const serviceId = 'd0f12ea3-ed4b-4016-b371-1a3ab0cba389';

// Try to restart the service
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
  query: `mutation { serviceRestart(id: "${serviceId}") { id } }`
});

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => console.log('Status:', res.statusCode, '\nBody:', body));
});

req.on('error', (e) => console.error('Error:', e.message));
req.write(data);
req.end();
