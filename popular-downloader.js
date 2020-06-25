const path = require("path");
const fs = require("fs");
const rp = require("request-promise");

rp("https://reddit.com/r/popular.json")
  .then((raw) => {
    const articles = JSON.parse(raw);

    articles.data.children.forEach((article) => {
      const ext = path.extname(article.data.url);

      if (ext === ".jpg" || ext === ".png" || ext === ".gif") {
        rp(article.data.url, { encoding: "base64" })
          .then((media) => {
            fs.writeFile(
              path.join(__dirname, `./downloads/${article.data.id}${ext}`),
              media,
              { encoding: "base64" },
              (err) => {
                if (err) console.log(err);
              }
            );
          })
          .catch((e) => console.log(e));
      }
    });
  })
  .catch((e) => console.log(e));
