import sportySneakersTop from "../../assets/Pet Product/Pet Shoes/Sporty Sneakers/sporty-black-white-red-sneakers-top.png";
import sportySneakersSide from "../../assets/Pet Product/Pet Shoes/Sporty Sneakers/sporty-black-white-red-sneakers-side.png";
import sportySneakersFront from "../../assets/Pet Product/Pet Shoes/Sporty Sneakers/sporty-black-white-red-sneakers-front.png";
import sportySneakersCloseUp from "../../assets/Pet Product/Pet Shoes/Sporty Sneakers/sporty-black-white-red-sneakers-close-up.png";

import sportyRedSneakersFront from "../../assets/Pet Product/Pet Shoes/Sporty Sneakers/sporty-red-white-black-sneakers-front.png";
import sportyRedSneakersSide from "../../assets/Pet Product/Pet Shoes/Sporty Sneakers/sporty-red-white-black-sneakers-side.png";
import sportyRedSneakersTop from "../../assets/Pet Product/Pet Shoes/Sporty Sneakers/sporty-red-white-black-sneakers-top.png";
import sportyRedSneakersCloseUp from "../../assets/Pet Product/Pet Shoes/Sporty Sneakers/sporty-red-white-black-sneakers-close-up.png";

import sportyBlackSneakersThumbnail from "../../assets/Pet Product/Pet Shoes/Sporty Sneakers/sporty-black-white-red-sneakers-thumbnail.png";
import sportyRedSneakersThumbnail from "../../assets/Pet Product/Pet Shoes/Sporty Sneakers/sporty-red-white-black-sneakers-thumbnail.png";

export const designerPawProtectors = {
  id: "pet-boots",
  name: "Designer Paw Protectors",
  category: "shoes",
  price: "$29.99",

  image: sportySneakersFront,
  recommendationImage: sportySneakersTop,

  description: "Stylish protective sneakers for fashionable pups.",

  gallery: [
    sportySneakersFront,
    sportySneakersSide,
    sportySneakersTop,
    sportySneakersCloseUp,
  ],

  variants: [
    {
      id: "black",
      name: "Black",
      swatch: "#111111",
      thumbnail: sportyBlackSneakersThumbnail,
      gallery: [
        sportySneakersFront,
        sportySneakersSide,
        sportySneakersTop,
        sportySneakersCloseUp,
      ],
    },
    {
      id: "red",
      name: "Red",
      swatch: "#d62828",
      thumbnail: sportyRedSneakersThumbnail,
      gallery: [
        sportyRedSneakersFront,
        sportyRedSneakersSide,
        sportyRedSneakersTop,
        sportyRedSneakersCloseUp,
      ],
    },
  ],

  sizes: ["2", "3", "4", "5", "6"],

  details: {
    overview:
      "Protect your pup's paws in style with our Designer Paw Protectors. These fashionable high-top dog sneakers are lightweight, comfortable, and designed to help shield paws from hot pavement, rough sidewalks, and outdoor surfaces. Featuring a secure hook-and-loop strap with lace-up styling, they provide a snug fit for everyday walks, special occasions, and photo-worthy adventures.",

    features: [
      "Premium high-top sneaker design",
      "Lightweight, soft, and comfortable",
      "Helps protect paws from hot pavement and rough surfaces",
      "Secure hook-and-loop strap with decorative laces",
      "Easy to put on and remove",
      "Durable construction with quality craftsmanship",
      "Machine washable for easy cleaning",
      "Suitable for daily walks, outdoor adventures, photoshoots, holidays, and special occasions",
    ],

    specifications: [
      "Product Type: Dog Shoes",
      "Material: Fiber",
      "Style: Classic High-Top Sneaker",
      "Season: Summer",
      "Pattern: Letter Design",
      "Toe Shape: Round",
      "Gender: Male & Female (Unisex)",
      "Category: Dog Boots & Shoes",
      "Size 2: 4.5 cm × 3.5 cm",
      "Size 3: 5.5 cm × 4.3 cm",
      "Size 4: 5.7 cm × 4.4 cm",
      "Size 5: 6.5 cm × 4.9 cm",
      "Size 6: 6.8 cm × 5.2 cm",
    ],
  },

  completeTheLook: [
    "step-in-harness",
    "waste-bag-dispenser",
    "zebra-pup-scruff",
  ],
};