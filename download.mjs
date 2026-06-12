import fs from 'fs';
import https from 'https';

const url = "https://drive.google.com/uc?export=download&id=1ci3pLsZZ1DHPc-QR7O36t8qEVfnyHYSa";
const dest = "./public/images/new_logo.png";

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 303) {
        return download(res.headers.location, dest).then(resolve, reject);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', reject);
  });
}

download(url, dest).then(() => console.log('Downloaded successfully')).catch(console.error);
