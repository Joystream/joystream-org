const https = require('https');
const fs = require('fs');
const path = require('path');

const HOSTNAME = 'api.github.com';
const REPO_URL = '/repos/joystream/design';
const SAVE_FILE_PATH = path.join(__dirname, '../data/pages/brand/assets-full.json');

// https://api.github.com/repos/joystream/design/git/trees/039e61cbab10c221e9a226b3ee49b262605f2d5d
// https://api.github.com/repos/joystream/design/contents/Assets-full/Illustrations

const get = (path, options) => {
  return new Promise((resolve, reject) => {
    const req = https
      .request(
        {
          method: 'GET',
          hostname: HOSTNAME,
          path: encodeURI(REPO_URL + path),
          headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0',
          },
          ...options,
        },
        res => {
          let data = '';
          res.on('data', chunk => (data += chunk));
          res.on('end', () => resolve(JSON.parse(data)));
        }
      )
      .on('error', err => {
        reject(err);
      });

    req.end();
  });
};

const saveJsonData = data => {
  const fileCommentary =
    'This file was created using `npm run fetch-assets-data`.' +
    'It fetches assets data from joystream/design repo.' +
    'If files change there, is should be re-run.';

  return fs.writeFile(SAVE_FILE_PATH, JSON.stringify({ fileCommentary, data }, null, 2), 'utf8', err => {
    if (err) throw err;
  });
};

const getAllData = async () => {
  const logo = await get('/contents/Assets-full/Logo/SVG');
  const logoIcon = await get('/contents/Assets-full/Logo Icon/SVG');
  const descriptiveIcons = await get('/contents/Assets-full/Descriptive Icons/SVG');
  const systemIcons = await get('/contents/Assets-full/System Icons/Line Basic');
  const illustrations = await get('/contents/Assets-full/Illustrations/SVG');
  const twitterCovers = await get('/contents/Assets-full/Twitter Covers/SVG');
  const blogCovers = await get('/contents/Assets-full/Blog Covers/SVG');

  return {
    illustrations,
    descriptiveIcons,
    systemIcons,
    logo,
    twitterCovers,
    blogCovers,
    logoIcon,
  };
};

getAllData().then(data => saveJsonData(data));
