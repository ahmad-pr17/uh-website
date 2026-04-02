const https = require('https');

function fetchTileUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                const match = data.match(/L\.tileLayer\(['"](https:\/\/maps-cdn\.bahriaplus\.com[^'"]+)['"]/);
                if (match) {
                    resolve(match[1]);
                } else {
                    reject('Not found');
                }
            });
        }).on('error', reject);
    });
}

fetchTileUrl('https://ilaaqa.com/maps/dha-phase-7-lahore').then(console.log).catch(console.error);
fetchTileUrl('https://ilaaqa.com/maps/lahore-smart-city').then(console.log).catch(console.error);
