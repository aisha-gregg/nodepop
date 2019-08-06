const connection = require("./connection");
const resetDatabase = require("./reset-database");
const Tag = require("./tag").Tag;
const Ad = require("./ad");
const ArticleType = require("./article-type");
const Price = require("./price");
const Article = require("./article").Article;

connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", async function() {
  await resetDatabase();

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

  await work.save();
  await lifestyle.save();
  await motor.save();
  await mobile.save();

  const ad1 = new Ad({
    id: "ID01",
    article: new Article({
      id: "ARID01",
      name: "Note 6 Pro",
      description: "lorem ipsum",
      type: new ArticleType({
        id: 1
      }),
      price: new Price({
        value: 200,
        currency: "euros"
      }),
      photo: " hello",
      tags: [mobile, motor]
    })
  });
  await ad1.save();

  const ad2 = new Ad({
    id: "ID02",
    article: new Article({
      id: "ARID02",
      name: "Note ",
      description: "lorem ipsum",
      type: new ArticleType({
        id: 2
      }),
      price: new Price({
        value: 100,
        currency: "euros"
      }),
      photo: " hello",
      tags: [mobile, motor]
    })
  });
  await ad2.save();

  const ad3 = new Ad({
    id: "ID03",
    article: new Article({
      id: "ARID03",
      name: "Note ",
      description: "lorem ipsum",
      type: new ArticleType({
        id: 3
      }),
      price: new Price({
        value: 100,
        currency: "euros"
      }),
      photo: " hello",
      tags: [mobile, motor]
    })
  });
  await ad3.save();

  const ad4 = new Ad({
    id: "ID04",
    article: new Article({
      id: "ARID04",
      name: "Note ",
      description: "lorem ipsum",
      type: new ArticleType({
        id: 3
      }),
      price: new Price({
        value: 100,
        currency: "euros"
      }),
      photo: " hello",
      tags: [mobile, motor]
    })
  });
  await ad4.save();
});
