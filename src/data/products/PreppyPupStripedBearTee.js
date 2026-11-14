import productCardImage from "../../assets/Pet Product/Pet Clothing/Tees/preppy-pup-striped-bear-tee/preppy-pup-striped-bear-tee-product-card-1.png";

import backImage from "../../assets/Pet Product/Pet Clothing/Tees/preppy-pup-striped-bear-tee/preppy-pup-striped-bear-tee-back.jpg";
import sideImage from "../../assets/Pet Product/Pet Clothing/Tees/preppy-pup-striped-bear-tee/preppy-pup-striped-bear-tee-side.jpg";
import frontImage from "../../assets/Pet Product/Pet Clothing/Tees/preppy-pup-striped-bear-tee/preppy-pup-striped-bear-tee-front.jpg";
import frontProductImage from "../../assets/Pet Product/Pet Clothing/Tees/preppy-pup-striped-bear-tee/preppy-pup-striped-bear-tee-front-product.jpg";
import productImage from "../../assets/Pet Product/Pet Clothing/Tees/preppy-pup-striped-bear-tee/preppy-pup-striped-bear-tee-product.jpg";
import detailImage from "../../assets/Pet Product/Pet Clothing/Tees/preppy-pup-striped-bear-tee/preppy-pup-striped-bear-tee-detail.jpg";


export const preppyPupStripedBearTee = {
  id: "preppy-pup-striped-bear-tee",

  name: "Preppy Pup Striped Bear Tee",

  category: "clothing",
  subcategory: "tees",

  price: "$29.99",
  inStock: true,

  image: productCardImage,
  recommendationImage: productImage,

  description:
    "Classic, preppy, and irresistibly cute. Give your pup a polished collegiate-inspired look with our Preppy Pup Striped Bear Tee. Featuring timeless black-and-white stripes, a crisp sailor-style collar, contrasting trim, and an adorable embroidered bear, this charming tee brings together classic style and playful personality. Made from soft, breathable cotton knit fabric, it’s designed to keep your pup comfortable while looking effortlessly put together.",

  variants: [
    {
      id: "black-white",
      name: "Black & White",
      swatch: "#111111",
      thumbnail: frontImage,
      gallery: [
        backImage,
        sideImage,
        frontImage,
        frontProductImage,
        productImage,
        detailImage,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL"],

  details: {
    overview:
      "The sleeveless construction gives your pup plenty of freedom to walk, run, play, and explore, while the convenient snap-button closure makes dressing quick and easy. With its soft cotton knit, classic striped pattern, sailor-inspired collar, and embroidered bear detail, the Preppy Pup Striped Bear Tee is an easy choice for everyday outings and special occasions alike.",

    features: [
      "Adorable embroidered bear detail",
      "Timeless black-and-white striped design",
      "Sailor-inspired contrasting collar",
      "Soft and breathable cotton knit fabric",
      "Sleeveless construction for comfortable movement",
      "Convenient snap-button closure",
      "Fine stitching and durable construction for repeat wear",
      "Perfect for walks, outings, parties, holidays, photos, and special occasions",
      "Available in sizes XS through XL",
    ],

    specifications: [
      "Product Type: Sleeveless Dog Tee / Vest",
      "Material: Cotton",
      "Pattern: Black & White Stripes",
      "Closure: Snap Buttons",
      "Detailing: Embroidered Bear & Contrasting Collar",
      "Season: Spring & Summer",
      "Available Sizes: XS, S, M, L, and XL",
      "Suggested Weight Range: Approximately 1–14 lbs",
      "Category: Pet Clothing",
      "Subcategory: Tees",
    ],
  },

  completeTheLook: [],
};