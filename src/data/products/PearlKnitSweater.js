import pearlKnitAerial from "../../assets/Pet Product/Pet Clothing/Sweaters/pearl-knit-sweater/pearl-knit-sweater-aerial.png";
import pearlKnitBack from "../../assets/Pet Product/Pet Clothing/Sweaters/pearl-knit-sweater/pearl-knit-sweater-back.png";
import pearlKnitDetail from "../../assets/Pet Product/Pet Clothing/Sweaters/pearl-knit-sweater/pearl-knit-sweater-detail.png";
import pearlKnitFront from "../../assets/Pet Product/Pet Clothing/Sweaters/pearl-knit-sweater/pearl-knit-sweater-front.png";
import pearlKnitProductCard from "../../assets/Pet Product/Pet Clothing/Sweaters/pearl-knit-sweater/pearl-knit-sweater-product-image-card-1.png";
import pearlKnitProduct from "../../assets/Pet Product/Pet Clothing/Sweaters/pearl-knit-sweater/pearl-knit-sweater-product.png";
import pearlKnitSide from "../../assets/Pet Product/Pet Clothing/Sweaters/pearl-knit-sweater/pearl-knit-sweater-side.png";

export const pearlKnitSweater = {
  id: "pearl-knit-sweater",

  name: "Pearl Knit Sweater",

  category: "clothing",
  subcategory: "sweaters",

  price: "$54.99",
  inStock: true,

  image: pearlKnitProductCard,
  recommendationImage: pearlKnitProductCard,

  description:
    "Cozy cable-knit charm with a sweet little touch of elegance. Wrap your pup in warm, timeless style with the Pearl Knit Sweater. Designed in a beautiful warm taupe shade, this sophisticated knit combines classic cold-weather coziness with delicate details that make it anything but ordinary. The back features a richly textured cable-knit pattern, finished with three ivory rose-shaped embellishments for an elegant, feminine touch. A substantial ribbed turtleneck adds extra coziness around the neck, while the coordinating ribbed hem creates a polished finish.",

  variants: [
    {
      id: "warm-taupe",
      name: "Warm Taupe",
      swatch: "#A98B78",
      thumbnail: pearlKnitFront,
      gallery: [
        pearlKnitBack,
        pearlKnitSide,
        pearlKnitAerial,
        pearlKnitFront,
        pearlKnitProduct,
        pearlKnitDetail,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL"],

  details: {
    overview:
      "The Pearl Knit Sweater combines timeless cable-knit texture with delicate feminine detailing for a refined cold-weather look. Three ivory rose-shaped embellishments decorate the back, while a substantial ribbed turtleneck and coordinating hem create a cozy, polished silhouette. The sleeveless construction keeps your pup’s front legs unrestricted for comfortable movement during chilly-weather outings.",

    features: [
      "Beautiful warm taupe neutral color",
      "Classic cable-knit texture",
      "Three delicate ivory rose-shaped embellishments",
      "Cozy ribbed turtleneck and hem",
      "Sleeveless design for comfortable movement",
      "Perfect for fall and winter styling",
      "Beautiful for family photos, outings, and special occasions",
      "Available in sizes XS through XL",
      "Ships from the USA",
    ],

    specifications: [
      "Product Type: Knit Dog Sweater",
      "Style: Sleeveless Cable-Knit Turtleneck",
      "Color: Warm Taupe",
      "Detailing: Three Ivory Rose-Shaped Embellishments",
      "Available Sizes: XS, S, M, L, and XL",
      "Season: Fall & Winter",
      "Category: Pet Clothing",
      "Subcategory: Sweaters",
    ],
  },

  completeTheLook: [],
};