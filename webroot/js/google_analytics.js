
var CONFIG = require('./config.json');
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', CONFIG.google_gtag);