// Product Card
import productCardImage from "../../assets/Pet Product/Pet Clothing/Sweaters/pout-and-posh-fuzzy-dog-sweater/pout-and-posh-fuzzy-dog-sweater-blue-product-card-1.png";
// Navy Blue
import blueAerial from "../../assets/Pet Product/Pet Clothing/Sweaters/pout-and-posh-fuzzy-dog-sweater/blue/pout-and-posh-fuzzy-dog-sweater-blue-aerial.jpg";
import blueBack from "../../assets/Pet Product/Pet Clothing/Sweaters/pout-and-posh-fuzzy-dog-sweater/blue/pout-and-posh-fuzzy-dog-sweater-blue-back.jpg";
import blueDetail from "../../assets/Pet Product/Pet Clothing/Sweaters/pout-and-posh-fuzzy-dog-sweater/blue/pout-and-posh-fuzzy-dog-sweater-blue-detail.png";
import blueFront from "../../assets/Pet Product/Pet Clothing/Sweaters/pout-and-posh-fuzzy-dog-sweater/blue/pout-and-posh-fuzzy-dog-sweater-blue-front.png";
import blueProduct from "../../assets/Pet Product/Pet Clothing/Sweaters/pout-and-posh-fuzzy-dog-sweater/blue/pout-and-posh-fuzzy-dog-sweater-blue-product.png";

// Light Pink
import pinkAerial from "../../assets/Pet Product/Pet Clothing/Sweaters/pout-and-posh-fuzzy-dog-sweater/pink/pout-and-posh-fuzzy-dog-sweater-pink-aerial.png";
import pinkBack from "../../assets/Pet Product/Pet Clothing/Sweaters/pout-and-posh-fuzzy-dog-sweater/pink/pout-and-posh-fuzzy-dog-sweater-pink-back.jpg";
import pinkDetail from "../../assets/Pet Product/Pet Clothing/Sweaters/pout-and-posh-fuzzy-dog-sweater/pink/pout-and-posh-fuzzy-dog-sweater-pink-detail.png";
import pinkFront from "../../assets/Pet Product/Pet Clothing/Sweaters/pout-and-posh-fuzzy-dog-sweater/pink/pout-and-posh-fuzzy-dog-sweater-pink-front.png";
import pinkProduct from "../../assets/Pet Product/Pet Clothing/Sweaters/pout-and-posh-fuzzy-dog-sweater/pink/pout-and-posh-fuzzy-dog-sweater-pink-product.png";

// Red
import redAerial from "../../assets/Pet Product/Pet Clothing/Sweaters/pout-and-posh-fuzzy-dog-sweater/red/pout-and-posh-fuzzy-dog-sweater-red-aerial.png";
import redBack from "../../assets/Pet Product/Pet Clothing/Sweaters/pout-and-posh-fuzzy-dog-sweater/red/pout-and-posh-fuzzy-dog-sweater-red-back.jpg";
import redDetail from "../../assets/Pet Product/Pet Clothing/Sweaters/pout-and-posh-fuzzy-dog-sweater/red/pout-and-posh-fuzzy-dog-sweater-red-detail.png";
import redFront from "../../assets/Pet Product/Pet Clothing/Sweaters/pout-and-posh-fuzzy-dog-sweater/red/pout-and-posh-fuzzy-dog-sweater-red-front.png";
import redProduct from "../../assets/Pet Product/Pet Clothing/Sweaters/pout-and-posh-fuzzy-dog-sweater/red/pout-and-posh-fuzzy-dog-sweater-red-product.png";


export const poutAndPoshFuzzyDogSweater = {
  id: "pout-and-posh-fuzzy-dog-sweater",

  name: "Pout & Posh Fuzzy Dog Sweater",

  category: "clothing",
  subcategory: "sweaters",

  price: "$39.99",
  inStock: true,

  image: productCardImage,
  recommendationImage: productCardImage,

  description:
    "A Little Sass, A Lot of Style! Let your pup show off their playful personality in our Pout & Posh Fuzzy Dog Sweater! Designed for fashion-forward pups, this irresistibly soft sweater combines cozy comfort with a bold, eye-catching design. Featuring a plush fleece texture and a distinctive split graphic on the back, this sweater adds a fun, high-fashion twist to your furry friend's wardrobe. Its comfortable pullover design and soft, cozy feel make it perfect for everyday outings, special occasions, and picture-perfect moments.",

  variants: [
    {
      id: "navy-blue",
      name: "Navy Blue",
      swatch: "#172A4A",
      thumbnail: blueBack,
      gallery: [
        blueBack,
        blueAerial,
        blueFront,
        blueProduct,
        blueDetail,
      ],
    },
    {
      id: "light-pink",
      name: "Light Pink",
      swatch: "#F5B6C8",
      thumbnail: pinkBack,
      gallery: [
        pinkBack,
        pinkAerial,
        pinkFront,
        pinkProduct,
        pinkDetail,
      ],
    },
    {
      id: "red",
      name: "Red",
      swatch: "#D71920",
      thumbnail: redBack,
      gallery: [
        redBack,
        redAerial,
        redFront,
        redProduct,
        redDetail,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "2XL"],

  details: {
    overview:
      "The Pout & Posh Fuzzy Dog Sweater combines plush polyester-cotton fleece with a playful split graphic for a bold, boutique-inspired look. Its comfortable pullover construction provides cozy coverage while allowing your pup to move naturally. Perfect for birthdays, Valentine's Day, holiday gatherings, celebrations, and stylish everyday adventures.",

    features: [
      "Ultra-soft polyester-cotton fleece blend",
      "Playful split graphic with contrasting details on the back",
      "Comfortable pullover design",
      "Soft, plush texture for cozy warmth",
      "Available in Navy Blue, Light Pink, and Red",
      "Ideal for birthdays, holidays, and special occasions",
      "Great for everyday outings and photos",
      "Available in sizes XS, S, M, L, and 2XL",
    ],

    specifications: [
      "Product Type: Fuzzy Dog Sweater / Sweatshirt",
      "Material: Polyester-Cotton Fleece",
      "Style: Plush Pullover",
      "Closure: Pullover",
      "Colors: Navy Blue, Light Pink, Red",
      "Available Sizes: XS, S, M, L, 2XL",
      "Suitable For: Small Dogs and Other Pets When Measurements Allow",
      "Category: Pet Clothing",
      "Subcategory: Sweaters",
    ],
  },

  completeTheLook: [],
};