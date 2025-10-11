const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'public', 'admin', 'index.html');
const customCssLink = '<link rel="stylesheet" href="/admin/custom-styles.css">';

if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // Aggiungi il CSS personalizzato solo se non è già presente
  if (!content.includes('custom-styles.css')) {
    content = content.replace('</head>', `  ${customCssLink}\n  </head>`);
    fs.writeFileSync(indexPath, content, 'utf8');
    console.log('✅ Custom CSS aggiunto a Tina Admin');
  }
}
