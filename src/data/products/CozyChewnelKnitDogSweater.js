import productCardImage from "../../assets/Pet Product/Pet Clothing/Sweaters/cozy-chewnel-knit-sweater/cozy-chewnel-knit-sweater-product-card-1.png";

// BLACK

import blackBack from "../../assets/Pet Product/Pet Clothing/Sweaters/cozy-chewnel-knit-sweater/black/cozy-chewnel-knit-sweater-black-back.png";

import blackSide from "../../assets/Pet Product/Pet Clothing/Sweaters/cozy-chewnel-knit-sweater/black/cozy-chewnel-knit-sweater-black-side.png";

import blackFront from "../../assets/Pet Product/Pet Clothing/Sweaters/cozy-chewnel-knit-sweater/black/cozy-chewnel-knit-sweater-black-front.png";

import blackProduct from "../../assets/Pet Product/Pet Clothing/Sweaters/cozy-chewnel-knit-sweater/black/cozy-chewnel-knit-sweater-black-product.png";

import blackDetail from "../../assets/Pet Product/Pet Clothing/Sweaters/cozy-chewnel-knit-sweater/black/cozy-chewnel-knit-sweater-black-detail.png";

// LIGHT PINK

import lightPinkBack from "../../assets/Pet Product/Pet Clothing/Sweaters/cozy-chewnel-knit-sweater/light-pink/cozy-chewnel-knit-sweater-light pink-back.png";

import lightPinkSide from "../../assets/Pet Product/Pet Clothing/Sweaters/cozy-chewnel-knit-sweater/light-pink/cozy-chewnel-knit-sweater-light pink-side.png";

import lightPinkFront from "../../assets/Pet Product/Pet Clothing/Sweaters/cozy-chewnel-knit-sweater/light-pink/cozy-chewnel-knit-sweater-light pink-front.png";

import lightPinkProduct from "../../assets/Pet Product/Pet Clothing/Sweaters/cozy-chewnel-knit-sweater/light-pink/cozy-chewnel-knit-sweater-light pink-product.png";

import lightPinkDetail from "../../assets/Pet Product/Pet Clothing/Sweaters/cozy-chewnel-knit-sweater/light-pink/cozy-chewnel-knit-sweater-light pink-detail.png";


export const cozyChewnelKnitDogSweater = {
  id: "cozy-chewnel-knit-dog-sweater",

  name: "Cozy Chewnel Knit Dog Sweater",

  category: "clothing",
  subcategory: "sweaters",

  price: "$54.99",
  inStock: true,

  image: productCardImage,
  recommendationImage: productCardImage,

  description:
    "Because cozy should always come with a little couture. Give your pup’s cold-weather wardrobe a luxurious upgrade with the Cozy Chewnel Knit Dog Sweater. This sophisticated cable-knit sweater combines classic winter style with a glamorous designer-inspired touch, making it perfect for pups who were born to stand out. Designed in a beautifully textured cable-knit pattern, the sweater features a cozy ribbed turtleneck and coordinating ribbed trim for a polished, comfortable fit.",

  variants: [
    {
      id: "black",
      name: "Black",
      swatch: "#111111",
      thumbnail: blackFront,
      gallery: [
        blackBack,
        blackSide,
        blackFront,
        blackProduct,
        blackDetail,
      ],
    },
    {
      id: "light-pink",
      name: "Light Pink",
      swatch: "#f4c2c2",
      thumbnail: lightPinkFront,
      gallery: [
        lightPinkBack,
        lightPinkSide,
        lightPinkFront,
        lightPinkProduct,
        lightPinkDetail,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL"],

  details: {
    overview:
      "The Cozy Chewnel Knit Dog Sweater combines a classic cable-knit silhouette with refined designer-inspired detailing. A ribbed turtleneck, coordinating trim, and sleeveless construction create a polished fit while allowing comfortable movement. The back is finished with a sparkling crystal-embellished jewelry accent featuring delicate bow and pearl detailing for just the right amount of shine.",

    features: [
      "Sparkling jeweled accent with crystal, bow, and pearl details",
      "Classic cable-knit design for a cozy, sophisticated look",
      "Ribbed turtleneck and coordinating trim",
      "Available in Black and Light Pink",
      "Sleeveless construction for comfortable movement",
      "Designer-inspired styling with a polished finish",
      "Perfect for chilly walks, holidays, brunch dates, photos, and special occasions",
      "Available in sizes XS through XL",
      "Ships from the USA",
    ],

    specifications: [
      "Product Type: Knit Dog Sweater",
      "Style: Sleeveless Cable-Knit Turtleneck",
      "Available Colors: Black and Light Pink",
      "Detailing: Crystal, Bow & Pearl Jewelry Accent",
      "Available Sizes: XS, S, M, L, and XL",
      "Category: Pet Clothing",
      "Subcategory: Sweaters",
    ],
  },

  completeTheLook: [],
};