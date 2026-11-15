import backImage from "../../assets/Pet Product/Pet Clothing/Tees/dapper-dog-tee-black-tie/dapper-dog-black-tie-back.png";

import frontLayImage from "../../assets/Pet Product/Pet Clothing/Tees/dapper-dog-tee-black-tie/dapper-dog-black-tie-front-lay.png";

import frontProductImage from "../../assets/Pet Product/Pet Clothing/Tees/dapper-dog-tee-black-tie/dapper-dog-black-tie-front-product.png";

import frontUpcloseImage from "../../assets/Pet Product/Pet Clothing/Tees/dapper-dog-tee-black-tie/dapper-dog-black-tie-front-upclose.png";

import frontImage from "../../assets/Pet Product/Pet Clothing/Tees/dapper-dog-tee-black-tie/dapper-dog-black-tie-front.png";

import sideImage from "../../assets/Pet Product/Pet Clothing/Tees/dapper-dog-tee-black-tie/dapper-dog-black-tie-side.png";

import productCardImage from "../../assets/Pet Product/Pet Clothing/Tees/dapper-dog-tee-black-tie/designer-dog-dapper-tee-black-tie-product-card-1.png";



export const dapperDogBlackTie = {
  id: "dapper-dog-black-tie",

  name: "Dapper Dog Black Tie",

  category: "Clothing",
  subcategory: "Tees",

  price: 69.99,
  inStock: true,

  image: productCardImage,
  recommendationImage: frontProductImage,

  description:
    "Give your pup a polished look with a little attitude! The Dapper Dog Black Tie combines classic sophistication with everyday comfort, making it the perfect statement piece for pups who like to dress to impress. This sleek black dog tee features an attached black necktie accented with a subtle gold pattern, creating the look of a perfectly coordinated outfit without the hassle of separate accessories. The gold “Bark Fifth Avenue” detail near the hem adds an upscale finishing touch.",

  colors: ["Black"],

  sizes: ["XS", "S", "M", "L", "XL", "2XL"],

  gallery: [
    backImage,
    sideImage,
    frontImage,
    frontLayImage,
    frontProductImage,
    frontUpcloseImage,
  ],

  variants: [
    {
        id: "black",
        name: "Black",
        swatch: "#000000",
        thumbnail: frontImage,
        gallery: [
        frontImage,
        sideImage,
        frontLayImage,
        backImage,
        
        frontProductImage,
        frontUpcloseImage,
        ],
    },
    ],

  details: {
    overview:
      "Whether your pup is headed to a special event, posing for photos, celebrating a holiday, or simply turning the sidewalk into a runway, the Dapper Dog Black Tie brings instant dapper style. Its classic black design, sophisticated necktie detail, and gold accents create a polished look that stands out without sacrificing everyday comfort.",

    features: [
      "Sleek, classic black design",
      "Attached decorative necktie for an instant dressed-up look",
      "Black necktie accented with a subtle gold pattern",
      "Gold “Bark Fifth Avenue” accent near the hem",
      "Perfect for photos, parties, special occasions, holidays, and everyday fashion",
      "Available in sizes XS through 2XL",
      "Ships from the USA",
    ],

    specifications: [
      "Product Type: Dog Tee / Shirt",
      "Color: Black",
      "Tie: Attached Decorative Necktie",
      "Tie Detail: Subtle Gold Pattern",
      "Accent: Gold “Bark Fifth Avenue” Detail",
      "Available Sizes: XS, S, M, L, XL, and 2XL",
      "Category: Pet Clothing",
      "Subcategory: Tees",
    ],
  },

  completeTheLook: [],
};