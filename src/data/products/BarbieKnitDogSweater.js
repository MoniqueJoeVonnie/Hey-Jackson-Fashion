import productCardImage from "../../assets/Pet Product/Pet Clothing/Sweaters/fancy-barbie-knit-dog-sweater/fancy-barbie-knit-dog-sweater-product-card-1.png";

// BLACK
import blackBack from "../../assets/Pet Product/Pet Clothing/Sweaters/fancy-barbie-knit-dog-sweater/black/fancy-barbie-knit-dog-sweater-black-back.png";
import blackSide from "../../assets/Pet Product/Pet Clothing/Sweaters/fancy-barbie-knit-dog-sweater/black/fancy-barbie-knit-dog-sweater-black-side.png";
import blackFront from "../../assets/Pet Product/Pet Clothing/Sweaters/fancy-barbie-knit-dog-sweater/black/fancy-barbie-knit-dog-sweater-black-front.png";
import blackProduct from "../../assets/Pet Product/Pet Clothing/Sweaters/fancy-barbie-knit-dog-sweater/black/fancy-barbie-knit-dog-sweater-black-product.png";
import blackDetail from "../../assets/Pet Product/Pet Clothing/Sweaters/fancy-barbie-knit-dog-sweater/black/fancy-barbie-knit-dog-sweater-black-detail.png";

// HOT PINK
import hotPinkBack from "../../assets/Pet Product/Pet Clothing/Sweaters/fancy-barbie-knit-dog-sweater/hot-pink/fancy-barbie-knit-dog-sweater-hot-pink-back.png";
import hotPinkSide from "../../assets/Pet Product/Pet Clothing/Sweaters/fancy-barbie-knit-dog-sweater/hot-pink/fancy-barbie-knit-dog-sweater-hot-pink-side.png";
import hotPinkFront from "../../assets/Pet Product/Pet Clothing/Sweaters/fancy-barbie-knit-dog-sweater/hot-pink/fancy-barbie-knit-dog-sweater-hot-pink-front.png";
import hotPinkProduct from "../../assets/Pet Product/Pet Clothing/Sweaters/fancy-barbie-knit-dog-sweater/hot-pink/fancy-barbie-knit-dog-sweater-hot-pink-product.png";
import hotPinkDetail from "../../assets/Pet Product/Pet Clothing/Sweaters/fancy-barbie-knit-dog-sweater/hot-pink/fancy-barbie-knit-dog-sweater-hot-pink-detail.png";




export const barbieKnitDogSweater = {
  id: "barbie-knit-dog-sweater",

  name: "Barbie Knit Dog Sweater",

  category: "clothing",
  subcategory: "sweaters",

  price: "$59.99",
  inStock: true,

  image: productCardImage,
  recommendationImage: productCardImage,

  description:
    "Come on, Barbie—let’s go for a walk! Give your fashionable pup a little extra glam with this adorable Barbie Knit Dog Sweater. Designed in a cozy knit with a classic turtleneck silhouette, this statement-making sweater combines warmth, comfort, and unmistakable Barbie-inspired style. Available in bold hot pink or classic black, the sweater features the iconic Barbie script across the back, accented with a sweet satin pink bow for an extra feminine finishing touch.",

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
      id: "hot-pink",
      name: "Hot Pink",
      swatch: "#ff1493",
      thumbnail: hotPinkFront,
      gallery: [
        hotPinkBack,
        hotPinkSide,
        hotPinkFront,
        hotPinkProduct,
        hotPinkDetail,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL"],

  details: {
    overview:
      "The Barbie Knit Dog Sweater blends cozy knit construction with playful, fashion-forward detail. Ribbed finishing around the turtleneck, arm openings, and hem helps create a polished fit, while the sleeveless design allows comfortable movement. Whether your pup is heading out for a chilly walk, a shopping trip, a photoshoot, or a special occasion, this sweater brings a fun dose of glam to the look.",

    features: [
      "Available in Hot Pink and Black",
      "Barbie script design displayed across the back",
      "Adorable satin pink bow accent",
      "Soft, cozy knit construction",
      "Classic turtleneck silhouette",
      "Ribbed neckline, arm openings, and hem",
      "Sleeveless design for comfortable movement",
      "Perfect for chilly walks, outings, photos, and everyday fashion",
      "Available in sizes XS through XL",
    ],

    specifications: [
      "Product Type: Knit Dog Sweater",
      "Style: Sleeveless Turtleneck Sweater",
      "Available Colors: Black and Hot Pink",
      "Detailing: Barbie Script & Satin Bow Accent",
      "Available Sizes: XS, S, M, L, and XL",
      "Category: Pet Clothing",
      "Subcategory: Sweaters",
    ],
  },

  completeTheLook: [],
};