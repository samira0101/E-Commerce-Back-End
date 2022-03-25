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

// create new product
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});
