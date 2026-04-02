const fs = require('fs');
const html = fs.readFileSync('map-html.txt', 'utf16le');
const setViewMatch = html.match(/setView\s*\(\s*\[\s*([\d.-]+)\s*,\s*([\d.-]+)\s*\]\s*,\s*(\d+)\s*\)/);
console.log(JSON.stringify({
    center: setViewMatch ? [parseFloat(setViewMatch[1]), parseFloat(setViewMatch[2])] : null,
    zoom: setViewMatch ? parseInt(setViewMatch[3]) : null
}));
