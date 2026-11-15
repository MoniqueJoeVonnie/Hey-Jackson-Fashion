import productCardImage from "../../assets/Pet Product/Pet Clothing/Sweaters/cozy-holiday-sweater/cozy-holiday-sweater-product-card-1.png";

import backImage from "../../assets/Pet Product/Pet Clothing/Sweaters/cozy-holiday-sweater/cozy-holiday-sweater-back.png";

import sideImage from "../../assets/Pet Product/Pet Clothing/Sweaters/cozy-holiday-sweater/cozy-holiday-sweater-side.png";

import frontImage from "../../assets/Pet Product/Pet Clothing/Sweaters/cozy-holiday-sweater/cozy-holiday-sweater-front.png";

import productImage from "../../assets/Pet Product/Pet Clothing/Sweaters/cozy-holiday-sweater/cozy-holiday-sweater-product.png";

import detailImage from "../../assets/Pet Product/Pet Clothing/Sweaters/cozy-holiday-sweater/cozy-holiday-sweater-detail.png";



export const cozyHolidaySweater = {
  id: "cozy-holiday-sweater",

  name: "Cozy Holiday Sweater",

  category: "clothing",
  subcategory: "sweaters",

  price: "$62.99",
  inStock: true,

  image: productCardImage,
  recommendationImage: productCardImage,

  description:
    "Holiday magic looks even better with a little sparkle. Dress your pup for the most wonderful time of the year in the Cozy Holiday Sweater. Designed to bring together festive charm, cozy texture, and show-stopping style, this luxurious red sweater is made for pups who deserve to shine all season long. The sweater features a beautifully plush textured red design with a comfortable ribbed neckline and coordinating trim, finished with an elegant oversized white satin bow and sparkling jeweled centerpiece.",

  variants: [
    {
      id: "red",
      name: "Red",
      swatch: "#c62828",
      thumbnail: frontImage,
      gallery: [
        backImage,
        sideImage,
        frontImage,
        productImage,
        detailImage,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL"],

  details: {
    overview:
      "The Cozy Holiday Sweater combines festive color, plush texture, and elegant detailing for a polished cold-weather look. Its sleeveless construction allows comfortable movement, while the ribbed neckline and trim create a finished silhouette. The oversized white satin bow and jeweled center accent make this sweater especially suited for holiday photos, gatherings, parties, and other seasonal occasions.",

    features: [
      "Oversized white satin bow for an elegant statement",
      "Sparkling jeweled centerpiece adds holiday shine",
      "Rich festive red color",
      "Plush textured design for a cozy look",
      "Ribbed neckline and coordinating trim",
      "Sleeveless construction for comfortable movement",
      "Perfect for Christmas photos, holiday parties, and winter outings",
      "A beautiful holiday gift for fashionable pups",
      "Available in sizes XS through XL",
    ],

    specifications: [
      "Product Type: Holiday Dog Sweater",
      "Style: Sleeveless Textured Sweater",
      "Color: Red",
      "Detailing: White Satin Bow & Jeweled Center Accent",
      "Available Sizes: XS, S, M, L, and XL",
      "Category: Pet Clothing",
      "Subcategory: Sweaters",
    ],
  },

  completeTheLook: [],
};