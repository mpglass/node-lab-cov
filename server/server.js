const path = require('path');
const fs = require('fs');

// const serverPath = path.join(__dirname, './server/server.js'); 
const chortlesPath = path.join(__dirname, '../chortles.json'); 
// const mewsPath = path.join(__dirname, './data/mews.txt');

chortles = [
    {
        name: 'Michelle',
        mew: 'Node is pretty cool'
        
    },
    {
        name: 'Luke',
        mew: 'I can show off cool tricks in Node'
    },
    {
        name: 'Adam',
        mew: 'Why is she talking about cats'
    },
    {
        name: 'Nibby',
        mew: 'If I scratch Mom, she will pet me'
    },
    {
        name: 'FuFu',
        mew: 'I am so fast and sneaky'
    },
    {
        name: 'Lady',
        mew: 'Is it time for lunch yet'
    }
];

fs.writeFile(chortlesPath, JSON.stringify(chortles), (err) => {
    if (err){
        console.log('crap!');
        console.log(err);
    }
    console.log('done');
});

fs.readFile(chortlesPath, (err, data) => {
    if (err) console.log(err);
  const test = JSON.parse(data);
  console.log(test);
});
