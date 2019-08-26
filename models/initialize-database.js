const connection = require("./connection");
const resetDatabase = require("./reset-database");
const Tag = require("./tag").Tag;
const Ad = require("./ad");
const Photo = require("./photo").Photo;
const ArticleType = require("./article-type").ArticleType;
const Price = require("./price").Price;
const Article = require("./article").Article;

connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", async function() {
  await resetDatabase();

  const photos = await Photo.find({}).then();
  const photo1 = photos[0];
  const photo2 = photos[1];
  const photo3 = photos[2];
  const photo4 = photos[3];
  const photo5 = photos[4];
  const photo6 = photos[5];
  const photo7 = photos[6];
  const photo8 = photos[7];
  const photo9 = photos[8];
  const photo10 = photos[9];
  const photo11 = photos[10];
  const photo12 = photos[11];
  const photo13 = photos[12];
  const photo14 = photos[13];

  const price100 = new Price({
    value: 100,
    currency: "euros"
  });

  const price200 = new Price({
    value: 200,
    currency: "euros"
  });

  const price300 = new Price({
    value: 300,
    currency: "euros"
  });

  const price10000 = new Price({
    value: 10000,
    currency: "euros"
  });

  const price20000 = new Price({
    value: 20000,
    currency: "euros"
  });

  const price7000 = new Price({
    value: 7000,
    currency: "euros"
  });

  const price8000 = new Price({
    value: 8000,
    currency: "euros"
  });

  const price1000 = new Price({
    value: 1000,
    currency: "euros"
  });

  const selling = new ArticleType({
    id: 1
  });

  const buying = new ArticleType({
    id: 2
  });

  await selling.save();
  await buying.save();

  await price100.save();
  await price200.save();
  await price300.save();
  await price1000.save();
  await price10000.save();
  await price7000.save();
  await price8000.save();
  await price20000.save();

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
      type: buying,
      price: price100,
      photo: photo1,
      tags: [mobile]
    })
  });
  await ad1.save();

  const ad2 = new Ad({
    id: "ID02",
    article: new Article({
      id: "ARID02",
      name: "Note 6",
      description: " Se vende en condiciones excelentes.Color:Negro.64GB",
      type: selling,
      price: price300,
      photo: photo2,
      tags: [mobile]
    })
  });
  await ad2.save();

  const ad3 = new Ad({
    id: "ID03",
    article: new Article({
      id: "ARID03",
      name: "galaxy s6 ",
      description: " Se vende en condiciones excelentes.Color:Negro.64GBm",
      type: selling,
      price: price100,
      photo: photo3,
      tags: [mobile, lifestyle]
    })
  });
  await ad3.save();

  const ad4 = new Ad({
    id: "ID04",
    article: new Article({
      id: "ARID04",
      name: "Apple iphone x ",
      description: " Se vende en condiciones excelentes.Color:Negro.64GB",
      type: buying,
      price: price300,
      photo: photo4,
      tags: [work]
    })
  });
  await ad4.save();

  const ad5 = new Ad({
    id: "ID05",
    article: new Article({
      id: "ARID05",
      name: "Huawei Mate 20",
      description: " Se vende en condiciones excelentes.Color:Negro.64GB",
      type: selling,
      price: price200,
      photo: photo5,
      tags: [mobile]
    })
  });
  await ad5.save();

  const ad6 = new Ad({
    id: "ID04",
    article: new Article({
      id: "ARID04",
      name: "Iphone xs ",
      description: "Compro nuevo Iphone xs",
      type: selling,
      price: price100,
      photo: photo6,
      tags: [mobile]
    })
  });
  await ad6.save();

  const ad7 = new Ad({
    id: "ID04",
    article: new Article({
      id: "ARID04",
      name: "LG Flex 3 ",
      description:
        " Se compra en condiciones excelentes.Perfecto para el trabajo.Color:Negro.64GB",
      type: selling,
      price: price200,
      photo: photo7,
      tags: [mobile, work]
    })
  });
  await ad7.save();

  const ad8 = new Ad({
    id: "ID04",
    article: new Article({
      id: "ARID04",
      name: "Xaiomi ",
      description: " Se compra en condiciones excelentes.Color:Negro.64GB",
      type: selling,
      price: price300,
      photo: photo8,
      tags: [mobile, motor]
    })
  });
  await ad8.save();

  const ad9 = new Ad({
    id: "ID09",
    article: new Article({
      id: "ARID09",
      name: "Volkswagen",
      description: " Se vende en condiciones excelentes.Color:Negro.64GB",
      type: selling,
      price: price10000,
      photo: photo9,
      tags: [motor]
    })
  });
  await ad9.save();

  const ad10 = new Ad({
    id: "ID10",
    article: new Article({
      id: "ARID10",
      name: "Toyota",
      description: " Se vende en condiciones excelentes.Color:Negro.64GB",
      type: selling,
      price: price8000,
      photo: photo10,
      tags: [motor, lifestyle]
    })
  });
  await ad10.save();

  const ad11 = new Ad({
    id: "ID11",
    article: new Article({
      id: "ARID11",
      name: "BMW",
      description: " Se compra en condiciones excelentes.Color:Negro.64GB",
      type: buying,
      price: price20000,
      photo: photo11,
      tags: [motor, lifestyle]
    })
  });
  await ad11.save();

  const ad12 = new Ad({
    id: "ID12",
    article: new Article({
      id: "ARID12",
      name: "Ibiza",
      description: " Se compra en condiciones excelentes.Color:Negro.64GB",
      type: buying,
      price: price7000,
      photo: photo12,
      tags: [motor]
    })
  });
  await ad12.save();

  const ad13 = new Ad({
    id: "ID13",
    article: new Article({
      id: "ARID13",
      name: "Macboook Air",
      description: " Se compra en condiciones excelentes.Color:Negro.64GB",
      type: buying,
      price: price1000,
      photo: photo13,
      tags: [lifestyle, work]
    })
  });
  await ad13.save();

  const ad14 = new Ad({
    id: "ID14",
    article: new Article({
      id: "ARID14",
      name: "PlayStation 5",
      description: " Se vende condiciones excelentes.Color:Negro.64GB",
      type: selling,
      price: price1000,
      photo: photo14,
      tags: [lifestyle]
    })
  });
  await ad14.save();
});
