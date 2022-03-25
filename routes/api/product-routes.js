const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  await Product.findAll({
		attributes: ["id", "product_name", "price", "stock", "category_id"],
		include: [
			{
				model: Tag,
				attributes: ["id", "tag_name"],
				through: "ProductTag",
			},
			{
				model: Category,
				attributes: ["id", "category_name"],
			},
		],
	})
		.then((productData) => {
			res.json(productData);
		})
		.catch((err) => {
			res.json(err);
		});
});

// get one product
router.get('/:id', (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  Product.findByPk(req.params.id, {
		include: [
			{
				model: Tag,
				attributes: ["id", "tag_name"],
				through: "ProductTag",
			},
			{
				model: Category,
				attributes: ["id", "category_name"],
			},
		],
	})
		.then((specificProduct) => {
			res.json(specificProduct);
		})
		.catch((err) => {
			res.json(err);
		});
});

