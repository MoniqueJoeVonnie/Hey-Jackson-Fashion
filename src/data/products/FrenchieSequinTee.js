import frenchieSequinProductCard from "../../assets/Pet Product/Pet Clothing/Tees/frenchie-sequin-tee/frenchie-sequin-tee-product-card-1.jpg";

// BLACK
import frenchieSequinBlackBack from "../../assets/Pet Product/Pet Clothing/Tees/frenchie-sequin-tee/black/frenchie-sequin-tee-black-back.png";
import frenchieSequinBlackSide from "../../assets/Pet Product/Pet Clothing/Tees/frenchie-sequin-tee/black/frenchie-sequin-tee-black-side.jpg";
import frenchieSequinBlackFront from "../../assets/Pet Product/Pet Clothing/Tees/frenchie-sequin-tee/black/frenchie-sequin-tee-black-front.png";
import frenchieSequinBlackProduct from "../../assets/Pet Product/Pet Clothing/Tees/frenchie-sequin-tee/black/frenchie-sequin-tee-black-product.png";
import frenchieSequinBlackDetail from "../../assets/Pet Product/Pet Clothing/Tees/frenchie-sequin-tee/black/frenchie-sequin-tee-black-detail.png";

// WHITE
import frenchieSequinWhiteBack from "../../assets/Pet Product/Pet Clothing/Tees/frenchie-sequin-tee/white/frenchie-sequin-tee-white-back.png";
import frenchieSequinWhiteSide from "../../assets/Pet Product/Pet Clothing/Tees/frenchie-sequin-tee/white/frenchie-sequin-tee-white-side.jpg";
import frenchieSequinWhiteFront from "../../assets/Pet Product/Pet Clothing/Tees/frenchie-sequin-tee/white/frenchie-sequin-tee-white-front.png";
import frenchieSequinWhiteProduct from "../../assets/Pet Product/Pet Clothing/Tees/frenchie-sequin-tee/white/frenchie-sequin-tee-white-product.png";
import frenchieSequinWhiteDetail from "../../assets/Pet Product/Pet Clothing/Tees/frenchie-sequin-tee/white/frenchie-sequin-tee-white-detail.jpg";

export const frenchieSequinTee = {
  id: "frenchie-sequin-tee",

  name: "Frenchie Sequin Tee",

  category: "clothing",
  subcategory: "tees",

  price: "$59.99",

  image: frenchieSequinProductCard,
  recommendationImage: frenchieSequinWhiteProduct,

  description:
    "Add a little sparkle to your pup’s wardrobe with the Frenchie Sequin Dog Tee! This adorable sleeveless shirt combines everyday comfort with a glamorous statement design made for pups who love being the center of attention. The standout feature is an eye-catching French Bulldog design embellished with shimmering sequins, including contrasting black and metallic details with a pop of gold on the ear. The sparkling embellishments give this tee a luxe, fashion-forward look that catches the light beautifully.",

  variants: [
    {
      id: "black",
      name: "Black",
      swatch: "#000000",
      thumbnail: frenchieSequinBlackFront,
      gallery: [
        frenchieSequinBlackBack,
        frenchieSequinBlackSide,
        frenchieSequinBlackFront,
        frenchieSequinBlackProduct,
        frenchieSequinBlackDetail,
      ],
    },
    {
      id: "white",
      name: "White",
      swatch: "#ffffff",
      thumbnail: frenchieSequinWhiteFront,
      gallery: [
        frenchieSequinWhiteBack,
        frenchieSequinWhiteSide,
        frenchieSequinWhiteFront,
        frenchieSequinWhiteProduct,
        frenchieSequinWhiteDetail,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL"],

  details: {
    overview:
      "Whether your pup is heading to a party, enjoying a day out, or posing for their next fabulous photo, the Frenchie Sequin Tee delivers plenty of personality and style. Its sleeveless silhouette allows comfortable movement, while the sparkling French Bulldog embellishment brings a luxe, fashion-forward finish that stands out beautifully in the light.",

    features: [
      "Sparkling sequin French Bulldog design",
      "Chic black, silver, and gold detailing",
      "Fashion-forward statement style",
      "Comfortable sleeveless design for easy movement",
      "Available in Black and White",
      "Perfect for birthdays, parties, special occasions, and photoshoots",
      "Available in sizes XS through XL",
      "Ships from the USA",
    ],

    specifications: [
      "Product Type: Sleeveless Dog Tee",
      "Design: Sequin French Bulldog Graphic",
      "Embellishment: Black, Silver, and Gold Sequin Detailing",
      "Available Colors: Black and White",
      "Available Sizes: XS, S, M, L, and XL",
      "Category: Pet Clothing",
      "Subcategory: Tees",
    ],
  },

  completeTheLook: [],
};