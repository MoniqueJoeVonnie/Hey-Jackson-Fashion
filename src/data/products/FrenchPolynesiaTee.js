import productCardImage from "../../assets/Pet Product/Pet Clothing/Tees/french-polynesia-tee/french-polynesia-tee-product-card-1.png";

// Aqua
import aquaBack from "../../assets/Pet Product/Pet Clothing/Tees/french-polynesia-tee/blue/french-polynesia-tee-blue-back.png";
import aquaSide from "../../assets/Pet Product/Pet Clothing/Tees/french-polynesia-tee/blue/french-polynesia-tee-blue-side.png";
import aquaFront from "../../assets/Pet Product/Pet Clothing/Tees/french-polynesia-tee/blue/french-polynesia-tee-blue-front.png";
import aquaProduct from "../../assets/Pet Product/Pet Clothing/Tees/french-polynesia-tee/blue/french-polynesia-tee-blue-product.png";
import aquaDetail from "../../assets/Pet Product/Pet Clothing/Tees/french-polynesia-tee/blue/french-polynesia-tee-blue-detail.png";

// White
import whiteBack from "../../assets/Pet Product/Pet Clothing/Tees/french-polynesia-tee/white/french-polynesia-tee-white-back.png";
import whiteSide from "../../assets/Pet Product/Pet Clothing/Tees/french-polynesia-tee/white/french-polynesia-tee-white-side.png";
import whiteFront from "../../assets/Pet Product/Pet Clothing/Tees/french-polynesia-tee/white/french-polynesia-tee-white-front.png";
import whiteProduct from "../../assets/Pet Product/Pet Clothing/Tees/french-polynesia-tee/white/french-polynesia-tee-white-product.png";
import whiteDetail from "../../assets/Pet Product/Pet Clothing/Tees/french-polynesia-tee/white/french-polynesia-tee-white-detail.png";

// Yellow
import yellowBack from "../../assets/Pet Product/Pet Clothing/Tees/french-polynesia-tee/yellow/french-polynesia-tee-yellow-back.png";
import yellowSide from "../../assets/Pet Product/Pet Clothing/Tees/french-polynesia-tee/yellow/french-polynesia-tee-yellow-side.png";
import yellowFront from "../../assets/Pet Product/Pet Clothing/Tees/french-polynesia-tee/yellow/french-polynesia-tee-yellow-front.png";
import yellowProduct from "../../assets/Pet Product/Pet Clothing/Tees/french-polynesia-tee/yellow/french-polynesia-tee-yellow-product.png";
import yellowDetail from "../../assets/Pet Product/Pet Clothing/Tees/french-polynesia-tee/yellow/french-polynesia-tee-yellow-detail.png";


export const frenchPolynesiaTee = {
  id: "french-polynesia-tee",

  name: "French Polynesia Tee",

  category: "clothing",
  subcategory: "tees",

  price: "$39.99",

  image: productCardImage,
  recommendationImage: aquaProduct,

  description:
    "Ia Ora na to Summer! Bring tropical island vibes to your pup’s wardrobe with the French Polynesia Paradise Dog Tee. Inspired by sunny skies, swaying palms, and dreamy island escapes, this adorable tee is made for pups who are always ready for their next adventure. Featuring a colorful French Polynesia sunset and palm tree graphic, this cheerful sleeveless shirt adds the perfect splash of vacation style to summer walks, beach trips, backyard adventures, and those all-important photo sessions.",

  variants: [
    {
      id: "aqua",
      name: "Aqua",
      swatch: "#25c7d9",
      thumbnail: aquaFront,
      gallery: [
        aquaBack,
        aquaSide,
        aquaFront,
        aquaProduct,
        aquaDetail,
      ],
    },
    {
      id: "white",
      name: "White",
      swatch: "#ffffff",
      thumbnail: whiteFront,
      gallery: [
        whiteBack,
        whiteSide,
        whiteFront,
        whiteProduct,
        whiteDetail,
      ],
    },
    {
      id: "yellow",
      name: "Yellow",
      swatch: "#f7c928",
      thumbnail: yellowFront,
      gallery: [
        yellowBack,
        yellowSide,
        yellowFront,
        yellowProduct,
        yellowDetail,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL", "2XL"],

  details: {
    overview:
      "Made from a comfortable poly/cotton blend, the French Polynesia Tee combines tropical style with everyday comfort. The sleeveless construction allows easy movement, while double stitching in all the right places adds durability for pups on the go. Available in Aqua, White, and Yellow, it’s a cheerful choice for vacations, beach days, summer walks, and warm-weather adventures.",

    features: [
      "Tropical French Polynesia sunset and palm tree design",
      "Bright, summery island-inspired style",
      "Comfortable poly/cotton blend",
      "Double-stitched for added durability",
      "Sleeveless construction for comfortable movement",
      "Available in Aqua, White, and Yellow",
      "Available in sizes XS through 2XL",
      "Perfect for vacations, beach days, summer walks, and photos",
      "Ships from the USA",
    ],

    specifications: [
      "Product Type: Sleeveless Dog Tee",
      "Material: Poly/Cotton Blend",
      "Design: French Polynesia Sunset & Palm Tree Graphic",
      "Construction: Double-Stitched",
      "Available Colors: Aqua, White, and Yellow",
      "Available Sizes: XS, S, M, L, XL, and 2XL",
      "Category: Pet Clothing",
      "Subcategory: Tees",
    ],
  },

  completeTheLook: [],
};