import sportyJerseyImage from "../../assets/Sporty jersey.png";

import jerseyRed from "../../assets/Pet Product/Pet Clothing/chicago-23-jersey/red.png";
import jerseyPink from "../../assets/Pet Product/Pet Clothing/chicago-23-jersey/pink.png";
import jerseyBlue from "../../assets/Pet Product/Pet Clothing/chicago-23-jersey/blue.png";
import jerseyBlack from "../../assets/Pet Product/Pet Clothing/chicago-23-jersey/black.png";

import jerseyBlackLifestyle from "../../assets/Pet Product/Pet Clothing/chicago-23-jersey/sporty-jersey-black.png";
import jerseyBlackFront from "../../assets/Pet Product/Pet Clothing/chicago-23-jersey/sporty-jersey-black-front.png";
import jerseyBlackBack from "../../assets/Pet Product/Pet Clothing/chicago-23-jersey/sporty-jersey-black-back.png";
import jerseyBlackCloseUp from "../../assets/Pet Product/Pet Clothing/chicago-23-jersey/sporty-jersey-black-close-up.png";

import jerseyBlueLifestyle from "../../assets/Pet Product/Pet Clothing/chicago-23-jersey/sporty-jersey-blue.png";
import jerseyBlueFront from "../../assets/Pet Product/Pet Clothing/chicago-23-jersey/sporty-jersey-blue-front.png";
import jerseyBlueBack from "../../assets/Pet Product/Pet Clothing/chicago-23-jersey/sporty-jersey-blue-back.png";
import jerseyBlueCloseUp from "../../assets/Pet Product/Pet Clothing/chicago-23-jersey/sporty-jersey-blue-close-up.png";

import jerseyPinkLifestyle from "../../assets/Pet Product/Pet Clothing/chicago-23-jersey/sporty-jersey-pink.png";
import jerseyPinkFront from "../../assets/Pet Product/Pet Clothing/chicago-23-jersey/sporty-jersey-pink-front.png";
import jerseyPinkBack from "../../assets/Pet Product/Pet Clothing/chicago-23-jersey/sporty-jersey-pink-back.png";
import jerseyPinkCloseUp from "../../assets/Pet Product/Pet Clothing/chicago-23-jersey/sporty-jersey-pink-close-up.png";

import jerseyRedLifestyle from "../../assets/Pet Product/Pet Clothing/chicago-23-jersey/sporty-jersey-red.png";
import jerseyRedFront from "../../assets/Pet Product/Pet Clothing/chicago-23-jersey/sporty-jersey-red-front.png";
import jerseyRedBack from "../../assets/Pet Product/Pet Clothing/chicago-23-jersey/sporty-jersey-red-back.png";
import jerseyRedCloseUp from "../../assets/Pet Product/Pet Clothing/chicago-23-jersey/sporty-jersey-red-close-up.png";

export const sportyJersey = {
  id: "sporty-jersey",
  name: "Sporty Jersey",
  category: "clothing",
  price: "$24.99",

  image: sportyJerseyImage,
  recommendationImage: jerseyBlack,

  description: "A sporty pet jersey made for everyday comfort and style.",

  variants: [
    {
      id: "black",
      name: "Black",
      swatch: "#111111",
      thumbnail: jerseyBlack,
      gallery: [
        jerseyBlackLifestyle,
        jerseyBlackFront,
        jerseyBlackBack,
        jerseyBlackCloseUp,
      ],
    },
    {
      id: "blue",
      name: "Blue",
      swatch: "#2d9cdb",
      thumbnail: jerseyBlue,
      gallery: [
        jerseyBlueLifestyle,
        jerseyBlueFront,
        jerseyBlueBack,
        jerseyBlueCloseUp,
      ],
    },
    {
      id: "pink",
      name: "Pink",
      swatch: "#f7a8c8",
      thumbnail: jerseyPink,
      gallery: [
        jerseyPinkLifestyle,
        jerseyPinkFront,
        jerseyPinkBack,
        jerseyPinkCloseUp,
      ],
    },
    {
      id: "red",
      name: "Red",
      swatch: "#d62828",
      thumbnail: jerseyRed,
      gallery: [
        jerseyRedLifestyle,
        jerseyRedFront,
        jerseyRedBack,
        jerseyRedCloseUp,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL"],

  details: {
    overview:
      "Let your pup show off their athletic style with our Sporty Mesh Basketball Dog Jersey. Made from lightweight, breathable mesh fabric, this jersey helps keep your dog cool and comfortable during walks, playtime, and warm-weather adventures.",

    features: [
      "Lightweight, breathable mesh fabric",
      "Soft and comfortable for everyday wear",
      "Slip-on design for quick and easy dressing",
      "Sleeveless cut allows natural movement",
      "Helps keep pets cool during warm weather",
      "Durable stitching for long-lasting wear",
      "Ideal for walks, playtime, photoshoots, sporting events, and holidays",
      "Available in multiple stylish colors and sizes",
    ],

    specifications: [
      "Product Type: Dog Jersey",
      "Material: Nylon Mesh",
      "Closure Type: Slip-On",
      "Style: Basketball Jersey",
      "Fit: Lightweight & Breathable",
      "Season: Spring & Summer",
      "Category: Dog Cooling Vests & Gear",
      "Suitable For: Small, Medium, and Large Dogs",
      "Available Colors: Black, Red, Pink, and Blue",
    ],
  },

  completeTheLook: [
    "pet-boots",
    "step-in-harness",
    "waste-bag-dispenser",
  ],
};