const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  await Tag.findAll({
    attributes: ["id", "tag_name"],
    include: [{
      model: Product,
      attributes: ["id", "product_name", "price", "stock", "category_id"],
      through: "ProductTag",
    }, ],
  })
  .then((parsedTagData) => {
    res.json(parsedTagData);
  })
  .catch((err) => {
    res.json(err);
  });
});

