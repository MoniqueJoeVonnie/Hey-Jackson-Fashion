
import backImage from "../../assets/Pet Product/Pet Clothing/Sweaters/royal-teddy-luxe-knit-sweater/royal-teddy-luxe-knit-sweater-back.png";
import detailImage from "../../assets/Pet Product/Pet Clothing/Sweaters/royal-teddy-luxe-knit-sweater/royal-teddy-luxe-knit-sweater-detail.png";
import frontImage from "../../assets/Pet Product/Pet Clothing/Sweaters/royal-teddy-luxe-knit-sweater/royal-teddy-luxe-knit-sweater-front.png";
import productCardImage from "../../assets/Pet Product/Pet Clothing/Sweaters/royal-teddy-luxe-knit-sweater/royal-teddy-luxe-knit-sweater-product-card-image-1.png";
import productImage from "../../assets/Pet Product/Pet Clothing/Sweaters/royal-teddy-luxe-knit-sweater/royal-teddy-luxe-knit-sweater-product.png";
import sideImage from "../../assets/Pet Product/Pet Clothing/Sweaters/royal-teddy-luxe-knit-sweater/royal-teddy-luxe-knit-sweater-side.png";


export const royalTeddyLuxeKnitSweater = {
  id: "royal-teddy-luxe-knit-sweater",
  name: "Royal Teddy Luxe Knit Sweater",
  category: "clothing",
  subcategory: "sweaters",
  price: "$49.99",
  inStock: true,

  image: productCardImage,
  recommendationImage: productCardImage,

  description:
    "A Little Royalty, A Lot of Cuteness! Give your fashionable pup the royal treatment with our Royal Teddy Luxe Knit Sweater! This charming, designer-inspired sweater combines cozy comfort with playful sophistication. Featuring a vibrant royal-blue knit, adorable teddy bear motifs, and golden-yellow geometric detailing, this eye-catching sweater brings a touch of luxury to your furry friend's wardrobe. Its soft, stretchable acrylic knit provides warmth while allowing comfortable movement. A classic ribbed turtleneck, comfortable sleeves, and fitted ribbed hem complete this cozy statement piece for chilly walks, holidays, birthdays, and picture-perfect moments.",

  sizes: ["XS", "S", "M", "L", "XL", "2XL"],

  gallery: [
    backImage,
    sideImage,
    frontImage,
    productImage,
    detailImage,
  ],

  variants: [
    {
      name: "Royal Blue",
      swatch: "#1645B8",
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
      "The Royal Teddy Luxe Knit Sweater combines classic cable-knit-inspired charm with playful teddy bear motifs and golden-yellow geometric accents. Its soft acrylic knit, ribbed turtleneck, comfortable sleeves, and matching hem make it a stylish choice for cooler weather.",

    features: [
      "Soft, stretchable acrylic knit for cozy everyday comfort",
      "Playful teddy bear motifs with golden-yellow geometric accents",
      "Classic ribbed turtleneck for added coverage",
      "Comfortable, flexible knit for easy movement",
      "Ribbed sleeve cuffs and matching bottom hem",
      "Ideal for fall and winter walks, birthdays, holidays, and special occasions",
    ],

    specifications: [
      "Material: Acrylic knit yarn",
      "Color: Royal Blue with Golden-Yellow Accents",
      "Pattern: Teddy Bear and Geometric Motifs",
      "Neckline: Ribbed Turtleneck",
      "Closure: Pullover",
      "Style: Designer-Inspired Knit Sweater",
      "Season: Fall and Winter",
      "Sizes: XS, S, M, L, XL, 2XL",
      "Fit: Stretchable, comfortable knit",
      "Suitable For: Small dogs and other pets when measurements allow",
      "Care: Hand washing recommended; supplier also permits cold machine washing and tumble drying",
    ],
  },

  completeTheLook: [],
};
