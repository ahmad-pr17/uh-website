const https = require('https');
const fs = require('fs');

https.get('https://ilaaqa.com/maps/dha-phase-2-lahore', (res) => {
    let html = '';
    res.on('data', d => html += d);
    res.on('end', () => {
        const scripts = html.match(/<script[\s\S]*?<\/script>/gi);
        let targetScript = scripts.find(s => s.includes('L.tileLayer'));
        if (targetScript) {
            fs.writeFileSync('tmp-dha-script.js', targetScript);
        }
    });
});
