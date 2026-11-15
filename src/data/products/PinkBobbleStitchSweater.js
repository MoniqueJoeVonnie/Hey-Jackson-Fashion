import productCard from "../../assets/Pet Product/Pet Clothing/Sweaters/pink-bobble-stitch-sweater/pink-bobble-stitch-sweater-product-card-1.png";

import backImage from "../../assets/Pet Product/Pet Clothing/Sweaters/pink-bobble-stitch-sweater/pink-bobble-stitch-sweater-back.png";
import detailImage from "../../assets/Pet Product/Pet Clothing/Sweaters/pink-bobble-stitch-sweater/pink-bobble-stitch-sweater-detail.png";
import frontImage from "../../assets/Pet Product/Pet Clothing/Sweaters/pink-bobble-stitch-sweater/pink-bobble-stitch-sweater-front.png";
import productBackImage from "../../assets/Pet Product/Pet Clothing/Sweaters/pink-bobble-stitch-sweater/pink-bobble-stitch-sweater-product-back.png";
import productFrontImage from "../../assets/Pet Product/Pet Clothing/Sweaters/pink-bobble-stitch-sweater/pink-bobble-stitch-sweater-product-front.png";
import sideImage from "../../assets/Pet Product/Pet Clothing/Sweaters/pink-bobble-stitch-sweater/pink-bobble-stitch-sweater-side.png";


export const pinkBobbleStitchSweater = {
  id: "pink-bobble-stitch-sweater",

  name: "Pink Bobble Stitch Sweater",

  category: "clothing",
  subcategory: "sweaters",

  price: "$44.99",
  inStock: true,

  image: productCard,
  recommendationImage: productCard,

  description:
    "Cozy, colorful, and made for pups who love a little extra attention. Wrap your pup in cozy charm with the Pink Bobble Stitch Sweater. This adorable hand-knitted style combines a vibrant pink color with beautiful dimensional texture for a look that’s just as fashionable as it is cozy. The back features an intricate bobble-stitch pattern, while a delicate knitted flower accented with pearl-like details adds an extra feminine finishing touch.",

  variants: [
    {
      id: "pink",
      name: "Pink",
      swatch: "#ff69b4",
      thumbnail: frontImage,
      gallery: [
        backImage,
        sideImage,
        frontImage,
        productBackImage,
        productFrontImage,
        detailImage,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL"],

  details: {
    overview:
      "The Pink Bobble Stitch Sweater combines dimensional knit texture with soft, feminine detailing for a polished cold-weather look. A substantial ribbed turtleneck, coordinating sleeves, and ribbed hem create a cozy silhouette, while the knitted flower and pearl-like accents add a boutique-inspired finishing touch. The comfortable front construction allows your pup to move naturally while staying warm and stylish.",

    features: [
      "Bright pink knitted design",
      "Dimensional bobble-stitch detailing across the back",
      "Knitted flower embellishment with pearl-like accents",
      "Cozy ribbed turtleneck, sleeves, and hem",
      "Comfortable construction for natural movement",
      "Colorful hanging Klippo tag",
      "Perfect for outings, special occasions, and photos",
      "Ideal for fall, winter, and chilly-weather styling",
      "Available in sizes XS through XL",
      "Ships from the USA",
    ],

    specifications: [
      "Product Type: Knit Dog Sweater",
      "Style: Bobble-Stitch Turtleneck Sweater",
      "Color: Pink",
      "Detailing: Knitted Flower & Pearl-Like Accents",
      "Available Sizes: XS, S, M, L, and XL",
      "Season: Fall & Winter",
      "Category: Pet Clothing",
      "Subcategory: Sweaters",
    ],
  },

  completeTheLook: [],
};