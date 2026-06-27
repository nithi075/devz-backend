const Featured =
  require("../models/Featured");

/* =========================================
   ADD FEATURED
========================================= */

const addFeatured =
  async (req, res) => {

    try {

      /* IMAGE URLS */

      const imageUrls =
        req.files.map(
          (file) =>
            `https://korniza-backend.onrender.com/uploads/images/${file.filename}`
        );

      /* CREATE ITEMS ARRAY */

      const newItems =
        imageUrls.map(
          (url, index) => ({
            title:
              req.body.itemTitles?.[index] ||
              "",

            image:
              url,

            category:
              req.body.categories?.[index] ||
              ""
          })
        );

      /* FIND EXISTING */

      let existingFeatured =
        await Featured.findOne();

      /* =========================================
         UPDATE EXISTING
      ========================================= */

      if (existingFeatured) {

        let updatedItems = [

          ...existingFeatured.items,

          ...newItems

        ];

        /* KEEP ONLY LATEST 5 */

        if (
          updatedItems.length > 5
        ) {

          updatedItems =
            updatedItems.slice(-5);

        }

        existingFeatured.title =
          req.body.title;

        existingFeatured.items =
          updatedItems;

        await existingFeatured.save();

        return res.json({

          message:
            "Featured updated successfully",

          data:
            existingFeatured

        });

      }

      /* =========================================
         CREATE NEW
      ========================================= */

      const data =
        new Featured({

          title:
            req.body.title,

          items:
            newItems

        });

      await data.save();

      res.json({

        message:
          "Featured added successfully",

        data

      });

    } catch (error) {

      res.status(500).json({

        error:
          error.message

      });

    }

  };

/* =========================================
   GET FEATURED
========================================= */

const getFeatured =
  async (req, res) => {

    try {

      const data =
        await Featured.findOne();

      if (!data) {

        return res.json({

          message:
            "No featured data found",

          items: []

        });

      }

      res.json(data);

    } catch (error) {

      res.status(500).json({

        error:
          error.message

      });

    }

  };

module.exports = {

  addFeatured,

  getFeatured

};