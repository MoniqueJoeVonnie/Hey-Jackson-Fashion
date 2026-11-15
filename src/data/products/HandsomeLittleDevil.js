import productCardImage from "../../assets/Pet Product/Pet Clothing/Tees/handsome-little-devil/handsome-little-devil-grey-product-card-1.png";

// BLACK
import blackBack from "../../assets/Pet Product/Pet Clothing/Tees/handsome-little-devil/black/handsome-little-devil-black-back.png";
import blackSide from "../../assets/Pet Product/Pet Clothing/Tees/handsome-little-devil/black/handsome-little-devil-black-side.png";
import blackFront from "../../assets/Pet Product/Pet Clothing/Tees/handsome-little-devil/black/handsome-little-devil-black-front.png";
import blackProduct from "../../assets/Pet Product/Pet Clothing/Tees/handsome-little-devil/black/handsome-little-devil-black-product.png";
import blackDetail from "../../assets/Pet Product/Pet Clothing/Tees/handsome-little-devil/black/handsome-little-devil-black-detail.png";

// GREY
import greyBack from "../../assets/Pet Product/Pet Clothing/Tees/handsome-little-devil/grey/handsome-little-devil-grey-back.png";
import greySide from "../../assets/Pet Product/Pet Clothing/Tees/handsome-little-devil/grey/handsome-little-devil-grey-side.png";
import greyFront from "../../assets/Pet Product/Pet Clothing/Tees/handsome-little-devil/grey/handsome-little-devil-grey-front.png";
import greyProduct from "../../assets/Pet Product/Pet Clothing/Tees/handsome-little-devil/grey/handsome-little-devil-grey-product.png";
import greyDetail from "../../assets/Pet Product/Pet Clothing/Tees/handsome-little-devil/grey/handsome-little-devil-grey-detail.png";

// RED
import redBack from "../../assets/Pet Product/Pet Clothing/Tees/handsome-little-devil/red/handsome-little-devil-red-back.png";
import redSide from "../../assets/Pet Product/Pet Clothing/Tees/handsome-little-devil/red/handsome-little-devil-red-side.png";
import redFront from "../../assets/Pet Product/Pet Clothing/Tees/handsome-little-devil/red/handsome-little-devil-red-front.png";
import redProduct from "../../assets/Pet Product/Pet Clothing/Tees/handsome-little-devil/red/handsome-little-devil-red-product.png";
import redDetail from "../../assets/Pet Product/Pet Clothing/Tees/handsome-little-devil/red/handsome-little-devil-red-detail.png";

// WHITE
import whiteBack from "../../assets/Pet Product/Pet Clothing/Tees/handsome-little-devil/white/handsome-little-devil-white-back.png";
import whiteSide from "../../assets/Pet Product/Pet Clothing/Tees/handsome-little-devil/white/handsome-little-devil-white-side.png";
import whiteFront from "../../assets/Pet Product/Pet Clothing/Tees/handsome-little-devil/white/handsome-little-devil-white-front.png";
import whiteProduct from "../../assets/Pet Product/Pet Clothing/Tees/handsome-little-devil/white/handsome-little-devil-white-product.png";
import whiteDetail from "../../assets/Pet Product/Pet Clothing/Tees/handsome-little-devil/white/handsome-little-devil-white-detail.png";



export const handsomeLittleDevil = {
  id: "handsome-little-devil",

  name: "Handsome Little Devil",

  category: "clothing",
  subcategory: "tees",

  price: "$59.99",
  inStock: true,

  image: productCardImage,
  recommendationImage: productCardImage,

  description:
    "For the pup who’s equal parts handsome and mischievous, the Handsome Little Devil Dog Tee brings plenty of personality to their wardrobe. Featuring the playful “Handsome Little Devil” graphic with a devil-tail arrow accent, this adorable dog shirt is made for little troublemakers who know exactly how cute they are. The classic sleeveless design gives your pup plenty of freedom to walk, play, lounge, and show off their style.",

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
      id: "grey",
      name: "Grey",
      swatch: "#9e9e9e",
      thumbnail: greyFront,
      gallery: [
        greyBack,
        greySide,
        greyFront,
        greyProduct,
        greyDetail,
      ],
    },
    {
      id: "red",
      name: "Red",
      swatch: "#c62828",
      thumbnail: redFront,
      gallery: [
        redBack,
        redSide,
        redFront,
        redProduct,
        redDetail,
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
  ],

  sizes: ["XS", "S", "M", "L", "XL", "2XL"],

  details: {
    overview:
      "Available in Black, Grey, Red, and White, the Handsome Little Devil Tee is an easy statement piece for everyday wear, photos, outings, parties, or whenever your handsome little guy wants some extra attention. Its sleeveless silhouette keeps the look comfortable and easy to move in while the playful graphic adds just the right amount of mischievous personality.",

    features: [
      "Fun “Handsome Little Devil” graphic",
      "Playful devil-tail arrow accent",
      "Designed especially for stylish boy pups",
      "Comfortable sleeveless design",
      "Lightweight look that’s perfect for everyday wear",
      "Available in Black, Grey, Red, and White",
      "Adorable for photos and social media",
      "A fun gift for the mischievous pup in your life",
      "Available in sizes XS through 2XL",
    ],

    specifications: [
      "Product Type: Sleeveless Dog Tee",
      "Design: Handsome Little Devil Graphic",
      "Accent: Devil-Tail Arrow Detail",
      "Available Colors: Black, Grey, Red, and White",
      "Available Sizes: XS, S, M, L, XL, and 2XL",
      "Category: Pet Clothing",
      "Subcategory: Tees",
    ],
  },

  completeTheLook: [],
};