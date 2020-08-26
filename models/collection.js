const mongoose = require("mongoose");

const CollectionSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  routeName: {
    type: String,
  },
  items: [
    {
      name: {
        type: String,
      },
      imageUrl: {
        type: String,
      },
      description: {
        type: String,
      },
      sizes: [
        {
          size: {
            type: String,
          },
          quantity: {
            type: String,
          },
          price: {
            type: Number,
          },
        },
      ],
      reviews: [
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
          },
          content: {
            type: String,
          },
          likes: [
            {
              user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Users",
              },
            },
          ],
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Collection", CollectionSchema);
