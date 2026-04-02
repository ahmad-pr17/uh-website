const https = require('https');

const slugs = [
    'dha-phase-1-lahore', 'dha-phase-2-lahore', 'dha-phase-3-lahore', 'dha-phase-4-lahore',
    'dha-phase-5-lahore', 'dha-phase-6-lahore', 'dha-phase-7-lahore', 'dha-phase-8-lahore',
    'dha-phase-8-ivy-green-lahore', 'dha-phase-8-park-view-lahore', 'dha-phase-8-air-avenue-lahore',
    'dha-phase-9-town-lahore', 'dha-phase-11-rahbar-lahore'
];

slugs.forEach(slug => {
    https.get(`https://ilaaqa.com/maps/${slug}`, (res) => {
        console.log(`${slug}: ${res.statusCode}`);
    });
});
