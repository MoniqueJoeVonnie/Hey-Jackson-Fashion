
import backImage from "../../assets/Pet Product/Pet Clothing/Sweaters/monogram-teddy-luxe-sweater-vest/monogram-teddy-luxe-sweater-vest-back.png";
import detailImage from "../../assets/Pet Product/Pet Clothing/Sweaters/monogram-teddy-luxe-sweater-vest/monogram-teddy-luxe-sweater-vest-detail.png";
import frontImage from "../../assets/Pet Product/Pet Clothing/Sweaters/monogram-teddy-luxe-sweater-vest/monogram-teddy-luxe-sweater-vest-front.png";
import productCardImage from "../../assets/Pet Product/Pet Clothing/Sweaters/monogram-teddy-luxe-sweater-vest/monogram-teddy-luxe-sweater-vest-product-card-image-1.png";
import productImage from "../../assets/Pet Product/Pet Clothing/Sweaters/monogram-teddy-luxe-sweater-vest/monogram-teddy-luxe-sweater-vest-product.png";
import sideImage from "../../assets/Pet Product/Pet Clothing/Sweaters/monogram-teddy-luxe-sweater-vest/monogram-teddy-luxe-sweater-vest-side.png";



export const monogramTeddyLuxeSweaterVest = {
  id: "monogram-teddy-luxe-sweater-vest",
  name: "Monogram Teddy Luxe Sweater Vest",
  category: "clothing",
  subcategory: "sweaters",
  price: "$39.99",
  inStock: true,

  image: productCardImage,
  recommendationImage: productCardImage,

  description:
    "A Little Teddy Charm, A Whole Lot of Luxury! Give your fashionable pup a touch of timeless elegance with our Monogram Teddy Luxe Sweater Vest! This charming, designer-inspired knit combines cozy comfort with sophisticated style. Featuring a beautiful ivory knit adorned with playful black teddy bear faces, delicate four-leaf flowers, diamond shapes, and geometric motifs, this eye-catching sweater vest delivers an irresistible blend of luxury and personality. Crafted from a soft, stretchable polyester-cotton blend, the double-sided jacquard knit provides comfortable warmth while allowing your pet to move freely. Its classic round neckline, sleeveless silhouette, and coordinating ribbed trim create a polished fit without restricting your pup's front legs. Perfect for autumn walks, cozy winter afternoons, spring outings, birthdays, holidays, and picture-perfect photo shoots.",

  sizes: ["S", "M", "L", "XL", "2XL"],

  gallery: [
    backImage,
    sideImage,
    frontImage,
    productImage,
    detailImage,
  ],

  variants: [
    {
      name: "Ivory & Black",
      swatch: "#F3EBDD",
      thumbnail: backImage,
      gallery: [
        backImage,
        sideImage,
        frontImage,
        productImage,
        detailImage,
      ],
    },
  ],

  details: {
    overview:
      "The Monogram Teddy Luxe Sweater Vest brings together playful teddy bear charm and sophisticated boutique styling. Its ivory-and-black double-sided jacquard knit features adorable teddy bear faces, floral accents, and geometric patterns. The soft polyester-cotton blend, sleeveless construction, and coordinating ribbed trim provide comfortable warmth and freedom of movement.",

    features: [
      "Luxurious double-sided jacquard knit with teddy bear and geometric motifs",
      "Soft, stretchable polyester-cotton blend for cozy comfort",
      "Sleeveless design for unrestricted front-leg movement",
      "Coordinating ivory ribbed neckline, armholes, and hem",
      "Classic round neckline and easy pullover construction",
      "Versatile layering piece for cooler weather",
      "Timeless ivory-and-black color combination",
      "Perfect for everyday outings, holidays, birthdays, and special occasions",
    ],

    specifications: [
      "Color: Ivory/Cream with Black Teddy Bear and Geometric Patterns",
      "Material: Polyester-Cotton Blend",
      "Knit Style: Double-Sided Jacquard",
      "Neckline: Classic Round Neck",
      "Sleeves: Sleeveless",
      "Closure: Pullover",
      "Sizes: S, M, L, XL, 2XL",
      "Seasons: Fall, Winter, and Early Spring",
      "Suitable For: Small dogs and other appropriately sized pets",
    ],
  },

  completeTheLook: [],
};

