import productCardImage from "../../assets/Pet Product/Pet Clothing/Tees/designer-dapper-dog-tee/dapper-dog-tee-product-card-1.png";

// Green
import greenBack from "../../assets/Pet Product/Pet Clothing/Tees/designer-dapper-dog-tee/green/designer-dapper-dog-tee-green-back.png";
import greenSide from "../../assets/Pet Product/Pet Clothing/Tees/designer-dapper-dog-tee/green/designer-dapper-dog-tee-green-side.png";
import greenFront from "../../assets/Pet Product/Pet Clothing/Tees/designer-dapper-dog-tee/green/designer-dapper-dog-tee-green-front.png";
import greenProduct from "../../assets/Pet Product/Pet Clothing/Tees/designer-dapper-dog-tee/green/designer-dapper-dog-tee-green-product.png";
import greenDetail from "../../assets/Pet Product/Pet Clothing/Tees/designer-dapper-dog-tee/green/designer-dapper-dog-tee-green-detail.png";

// Red
import redBack from "../../assets/Pet Product/Pet Clothing/Tees/designer-dapper-dog-tee/red/designer-dapper-dog-tee-red-back.png";
import redSide from "../../assets/Pet Product/Pet Clothing/Tees/designer-dapper-dog-tee/red/designer-dapper-dog-tee-red-side.png";
import redFront from "../../assets/Pet Product/Pet Clothing/Tees/designer-dapper-dog-tee/red/designer-dapper-dog-tee-red-front.png";
import redProduct from "../../assets/Pet Product/Pet Clothing/Tees/designer-dapper-dog-tee/red/designer-dapper-dog-tee-red-product.png";
import redDetail from "../../assets/Pet Product/Pet Clothing/Tees/designer-dapper-dog-tee/red/designer-dapper-dog-tee-red-detail.png";

// Yellow
import yellowBack from "../../assets/Pet Product/Pet Clothing/Tees/designer-dapper-dog-tee/yellow/designer-dapper-dog-tee-yellow-back.png";
import yellowSide from "../../assets/Pet Product/Pet Clothing/Tees/designer-dapper-dog-tee/yellow/designer-dapper-dog-tee-yellow-side.png";
import yellowFront from "../../assets/Pet Product/Pet Clothing/Tees/designer-dapper-dog-tee/yellow/designer-dapper-dog-tee-yellow-front.png";
import yellowProduct from "../../assets/Pet Product/Pet Clothing/Tees/designer-dapper-dog-tee/yellow/designer-dapper-dog-tee-yellow-product.png";
import yellowDetail from "../../assets/Pet Product/Pet Clothing/Tees/designer-dapper-dog-tee/yellow/designer-dapper-dog-tee-yellow-detail.png";


export const designerDapperDogTee = {
  id: "designer-dapper-dog-tee",

  name: "Designer Dapper Dog Tee",

  category: "clothing",
  subcategory: "tees",
  price: "$39.99",
  inStock: true,

  image: productCardImage,
  recommendationImage: yellowProduct,

  description:
    "Fashion-forward pups love designers, too! Give your stylish pup a wardrobe upgrade with the Designer Dapper Dog Tee, a playful statement shirt made for dogs who were born to stand out. Featuring the fun “Dapper Dog” design with oversized sunglasses, this adorable sleeveless tee brings designer-inspired attitude to walks, outings, photoshoots, parties, and everyday adventures. The poly/cotton fabric offers a comfortable feel, while double stitching in all the right places adds durability for pups on the move.",

  variants: [
    {
      id: "green",
      name: "Green",
      swatch: "#2f6b3c",
      thumbnail: greenFront,
      gallery: [
        greenBack,
        greenSide,
        greenFront,
        greenProduct,
        greenDetail,
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
      id: "yellow",
      name: "Yellow",
      swatch: "#f4c430",
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
      "Available in Red, Green, and Yellow, the Designer Dapper Dog Tee makes it easy to choose a color that matches your pup’s personality. Its sleeveless silhouette allows comfortable movement, while the poly/cotton construction and reinforced double stitching make it a practical choice for stylish everyday wear.",

    features: [
      "Fun, fashion-forward Dapper Dog graphic",
      "Statement oversized sunglasses design",
      "Comfortable poly/cotton blend",
      "Double-stitched for added durability and comfort",
      "Sleeveless design for easy movement",
      "Available in Red, Green, and Yellow",
      "Available in sizes XS through 2XL",
      "Fabulous for walks, photos, parties, and special occasions",
      "Ships from the USA",
    ],

    specifications: [
      "Product Type: Sleeveless Dog Tee",
      "Material: Poly/Cotton Blend",
      "Design: Dapper Dog Graphic with Oversized Sunglasses",
      "Construction: Double-Stitched",
      "Available Colors: Green, Red, and Yellow",
      "Available Sizes: XS, S, M, L, XL, and 2XL",
      "Category: Pet Clothing",
      "Subcategory: Tees",
    ],
  },

  disclaimer:
    "All product names, logos, and brands are the property of their respective owners. All company, product, and service names used on this website are for identification purposes only. Use of these names, logos, and brands does not imply endorsement.",

  completeTheLook: [],
};