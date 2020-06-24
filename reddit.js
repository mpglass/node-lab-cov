const path = require("path");
const fs = require("fs");
const rp = require("request-promise");

const articleArray = [];

dataPath = path.join(__dirname, "./popular-articles.json");

rp("https://reddit.com/r/popular.json").then((raw) => {
  JSON.parse(raw).data.children.forEach((item) => {
    articleArray.push({
      title: item.data.title,
      url: item.data.url,
      author: item.data.author,
    });
  });
  fs.writeFile(dataPath, JSON.stringify(articleArray), (err) => {
    if (err) console.log(err);
  });
});
