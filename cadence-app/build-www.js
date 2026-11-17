// Copie le prototype (../cadence.html) dans www/index.html avec une page HTML complète.
const fs = require('fs');
const path = require('path');
const src = fs.readFileSync(path.join(__dirname, '..', 'cadence.html'), 'utf8');
const html = '<!doctype html>\n<html lang="fr">\n<head>\n' +
  '<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}</style>\n' +
  src + '\n</html>\n';
fs.mkdirSync(path.join(__dirname, 'www'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'www', 'index.html'), html);
console.log('www/index.html écrit (' + html.length + ' caractères)');
