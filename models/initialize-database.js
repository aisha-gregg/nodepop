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
      description: "Se vende en condiciones excelentes.Color:Negro.64GB.",
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
      name: "Note 6",
      description: " Se vende en condiciones excelentes.Color:Negro.64GB",
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
      name: "galaxy s6 ",
      description: " Se vende en condiciones excelentes.Color:Negro.64GBm",
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
      name: "Apple iphone x ",
      description: " Se vende en condiciones excelentes.Color:Negro.64GB",
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

  const ad5 = new Ad({
    id: "ID04",
    article: new Article({
      id: "ARID04",
      name: "Huawei Mate 20",
      description: " Se vende en condiciones excelentes.Color:Negro.64GB",
      type: new ArticleType({
        id: 4
      }),
      price: new Price({
        value: 100,
        currency: "euros"
      }),
      photo: " hello",
      tags: [mobile, motor]
    })
  });
  await ad5.save();

  const ad6 = new Ad({
    id: "ID04",
    article: new Article({
      id: "ARID04",
      name: "Iphone xs ",
      description: "Se vende",
      type: new ArticleType({
        id: 6
      }),
      price: new Price({
        value: 100,
        currency: "euros"
      }),
      photo: " hello",
      tags: [mobile, motor]
    })
  });
  await ad6.save();

  const ad7 = new Ad({
    id: "ID04",
    article: new Article({
      id: "ARID04",
      name: "LG Flex 3 ",
      description: " Se vende en condiciones excelentes.Color:Negro.64GB",
      type: new ArticleType({
        id: 7
      }),
      price: new Price({
        value: 100,
        currency: "euros"
      }),
      photo: " hello",
      tags: [mobile, motor]
    })
  });
  await ad7.save();

  const ad8 = new Ad({
    id: "ID04",
    article: new Article({
      id: "ARID04",
      name: "Xaiomi ",
      description: " Se vende en condiciones excelentes.Color:Negro.64GB",
      type: new ArticleType({
        id: 8
      }),
      price: new Price({
        value: 100,
        currency: "euros"
      }),
      imageUrl: "images/galaxy s6.jpg",
      tags: [mobile, motor]
    })
  });
  await ad8.save();
});
