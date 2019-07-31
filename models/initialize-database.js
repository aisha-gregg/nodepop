const connection = require("./connection");
const resetDatabase = require("./reset-database");
const Tag = require("./tag").Tag;
const Ad = require ("./ad");
const ArticleType = require ("./article-type");
const Price = require ("./price");
const Article = require ("./article").Article;


connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", function() {
  resetDatabase();


  const work = new Tag({
    id: 1,
    name: "Work"
  });

  const lifestyle = new Tag({
    id: 2,
    name: "Lifestyle"
  });

  const motor = new Tag({
    id: 3,
    name: "Motor"
  });

  const mobile = new Tag({
    id: 4,
    name: "Mobile"
  });

  work.save();
  lifestyle.save();
  motor.save();
  mobile.save();

  const ad = new Ad({
    id: "ID01",
    article: new Article({
      id: "ARID01",
      name: "New camera",
      type: new ArticleType({
        id: 1
      }),
      price: new Price({
        value: 200,
        currency:"euros"
      }),
      photo: " hello",
      tags: [mobile, motor]
    })
  });
  ad.save();
});
