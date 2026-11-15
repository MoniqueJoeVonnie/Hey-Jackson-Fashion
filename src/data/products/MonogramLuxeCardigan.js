import backImage from "../../assets/Pet Product/Pet Clothing/Sweaters/monogram-luxe-cardigan/monogram-luxe-cardigan-back.png";
import detailImage from "../../assets/Pet Product/Pet Clothing/Sweaters/monogram-luxe-cardigan/monogram-luxe-cardigan-detail.png";
import frontImage from "../../assets/Pet Product/Pet Clothing/Sweaters/monogram-luxe-cardigan/monogram-luxe-cardigan-front.png";
import productCardImage from "../../assets/Pet Product/Pet Clothing/Sweaters/monogram-luxe-cardigan/monogram-luxe-cardigan-product-card-1.png";
import productBackImage from "../../assets/Pet Product/Pet Clothing/Sweaters/monogram-luxe-cardigan/monogram-luxe-cardigan-product-back.png";
import productFrontImage from "../../assets/Pet Product/Pet Clothing/Sweaters/monogram-luxe-cardigan/monogram-luxe-cardigan-product-front.png";
import sideImage from "../../assets/Pet Product/Pet Clothing/Sweaters/monogram-luxe-cardigan/monogram-luxe-cardigan-side.png";



export const monogramLuxeCardigan = {
  id: "monogram-luxe-cardigan",

  name: "Monogram Luxe Cardigan",

  category: "clothing",
  subcategory: "sweaters",

  price: "$49.99",
  inStock: true,

  image: productCardImage,
  recommendationImage: productCardImage,

  description:
    "Give your pup a polished designer-inspired look with the Monogram Luxe Cardigan. Featuring a soft blush-pink knit accented with an all-over black geometric pattern, this statement sweater brings boutique style to chilly-day dressing. Contrasting black ribbed details create a sophisticated finish, while the soft, flexible knit helps keep your pup cozy without restricting natural movement.",

  variants: [
    {
      id: "blush-pink-black",
      name: "Blush Pink & Black",
      swatch: "#D9A3A8",
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

  sizes: ["XS", "S", "M", "L", "XL", "2XL"],

  details: {
    overview:
      "The Monogram Luxe Cardigan combines a soft blush-pink knit with an all-over black geometric pattern for a polished boutique-inspired look. Contrasting black ribbed detailing along the neckline, sleeves, and hem gives the cardigan a sophisticated finish, while its soft, flexible construction provides comfortable warmth for cooler days.",

    features: [
      "Soft, comfortable knit construction",
      "Stylish blush-pink and black patterned design",
      "Contrasting black ribbed neckline, sleeves, and hem",
      "Classic button-front cardigan styling",
      "Stretchy fit for comfortable movement",
      "Cozy warmth for cooler weather",
      "Great for everyday wear, holidays, photos, parties, and special occasions",
      "Available in sizes XS through 2XL",
    ],

    specifications: [
      "Product Type: Knit Dog Cardigan",
      "Style: Patterned Button-Front Cardigan",
      "Color: Blush Pink & Black",
      "Available Sizes: XS, S, M, L, XL, and 2XL",
      "Season: Fall & Winter",
      "Care: Hand washing recommended",
      "Machine Care: Cold water on a gentle cycle",
      "Category: Pet Clothing",
      "Subcategory: Sweaters",
    ],
  },

  completeTheLook: [],
};