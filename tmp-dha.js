const https = require('https');

const phases = [
    'dha-phase-1-lahore',
    'dha-phase-2-lahore',
    'dha-phase-3-lahore'
];

phases.forEach(phase => {
    https.get(`https://ilaaqa.com/maps/${phase}`, (res) => {
        let html = '';
        res.on('data', d => html += d);
        res.on('end', () => {
            const setViewIndex = html.indexOf('setView');
            if (setViewIndex !== -1) {
                const str = html.substring(setViewIndex, setViewIndex + 100);
                const cMatch = str.match(/\[\s*([\d.]+)\s*,\s*([\d.]+)\s*\]/);
                console.log(`${phase}: ${cMatch ? cMatch[1] + ', ' + cMatch[2] : 'NO MATCH'} | raw: ${str.substring(0, 50)}`);
            } else {
                console.log(`${phase}: NO SETVIEW`);
            }
        });
    });
});
