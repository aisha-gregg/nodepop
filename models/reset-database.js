const Tag = require("./tag").Tag;
const Ad = require("./ad");
const ArticleType = require("./article-type").ArticleType;
const Price = require("./price").Price;
const Article = require("./article").Article;

async function resetDatabase() {
  await Ad.deleteMany({}).then();
  await Tag.deleteMany({}).then();
  await ArticleType.deleteMany({}).then();
  await Price.deleteMany({}).then();
  await Article.deleteMany({}).then();
}

module.exports = resetDatabase;
