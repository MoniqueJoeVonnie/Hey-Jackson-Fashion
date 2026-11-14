import productCardImage from "../../assets/Pet Product/Pet Clothing/Sweaters/sniffany-knit-sweater/sniffany-knit-sweater-product-card-image-1.png";

// Black
import blackBack from "../../assets/Pet Product/Pet Clothing/Sweaters/sniffany-knit-sweater/black/sniffany-knit-sweater-black-back.png";
import blackDetail from "../../assets/Pet Product/Pet Clothing/Sweaters/sniffany-knit-sweater/black/sniffany-knit-sweater-black-detail.png";
import blackFront from "../../assets/Pet Product/Pet Clothing/Sweaters/sniffany-knit-sweater/black/sniffany-knit-sweater-black-front.png";
import blackProduct from "../../assets/Pet Product/Pet Clothing/Sweaters/sniffany-knit-sweater/black/sniffany-knit-sweater-black-product.png";
import blackSide from "../../assets/Pet Product/Pet Clothing/Sweaters/sniffany-knit-sweater/black/sniffany-knit-sweater-black-side.png";

// Blush / Pink
import blushBack from "../../assets/Pet Product/Pet Clothing/Sweaters/sniffany-knit-sweater/blush/sniffany-knit-sweater-blush-back.png";
import blushDetail from "../../assets/Pet Product/Pet Clothing/Sweaters/sniffany-knit-sweater/blush/sniffany-knit-sweater-blush-detail.png";
import blushFront from "../../assets/Pet Product/Pet Clothing/Sweaters/sniffany-knit-sweater/blush/sniffany-knit-sweater-blush-front.png";
import blushProduct from "../../assets/Pet Product/Pet Clothing/Sweaters/sniffany-knit-sweater/blush/sniffany-knit-sweater-blush-product.png";
import blushSide from "../../assets/Pet Product/Pet Clothing/Sweaters/sniffany-knit-sweater/blush/sniffany-knit-sweater-blush-side.png";

// Teal / Turquoise Blue
import tealBack from "../../assets/Pet Product/Pet Clothing/Sweaters/sniffany-knit-sweater/teal/sniffany-knit-sweater-teal-back.png";
import tealDetail from "../../assets/Pet Product/Pet Clothing/Sweaters/sniffany-knit-sweater/teal/sniffany-knit-sweater-teal-detail.png";
import tealFront from "../../assets/Pet Product/Pet Clothing/Sweaters/sniffany-knit-sweater/teal/sniffany-knit-sweater-teal-front.png";
import tealProduct from "../../assets/Pet Product/Pet Clothing/Sweaters/sniffany-knit-sweater/teal/sniffany-knit-sweater-teal-product.png";
import tealSide from "../../assets/Pet Product/Pet Clothing/Sweaters/sniffany-knit-sweater/teal/sniffany-knit-sweater-teal-side.png";


export const sniffanyDogKnitSweater = {
  id: "sniffany-dog-knit-sweater",

  name: "Sniffany Dog Knit Sweater",

  category: "clothing",
  subcategory: "sweaters",

  price: "$64.99",
  inStock: true,

  image: productCardImage,
  recommendationImage: productCardImage,

  description:
    "Classic cable-knit charm with a glamorous finishing touch. Give your pup a polished boutique look with the Sniffany Dog Knit Sweater. This cozy sleeveless sweater features a beautifully textured cable-knit design, a warm ribbed turtleneck, and an elegant white satin bow accented with a dangling heart charm on the back. The sleeveless construction keeps your pup comfortable and allows plenty of freedom for walking, playing, and posing, while the soft knit provides cozy coverage for cooler days.",

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
      id: "pink",
      name: "Pink",
      swatch: "#F2B6C8",
      thumbnail: blushFront,
      gallery: [
        blushBack,
        blushSide,
        blushFront,
        blushProduct,
        blushDetail,
      ],
    },
    {
      id: "turquoise-blue",
      name: "Turquoise Blue",
      swatch: "#3FBFC4",
      thumbnail: tealFront,
      gallery: [
        tealBack,
        tealSide,
        tealFront,
        tealProduct,
        tealDetail,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL"],

  details: {
    overview:
      "The Sniffany Dog Knit Sweater blends classic cable-knit texture with an elegant boutique-inspired finish. A crisp white satin bow and dangling heart charm decorate the back, while the ribbed turtleneck adds warmth and structure. Its sleeveless silhouette allows comfortable movement while still providing cozy coverage for cooler weather.",

    features: [
      "Statement white satin bow",
      "Elegant dangling heart charm",
      "Classic cable-knit texture",
      "Cozy ribbed turtleneck",
      "Sleeveless design for comfortable movement",
      "Boutique-inspired style for everyday wear or special occasions",
      "Available in Pink, Black, and Turquoise Blue",
      "Perfect for fall and winter styling",
      "Available in sizes XS through XL",
    ],

    specifications: [
      "Product Type: Knit Dog Sweater",
      "Style: Sleeveless Cable-Knit Turtleneck",
      "Colors: Black, Pink, and Turquoise Blue",
      "Detailing: White Satin Bow with Dangling Heart Charm",
      "Available Sizes: XS, S, M, L, and XL",
      "Season: Fall & Winter",
      "Category: Pet Clothing",
      "Subcategory: Sweaters",
    ],
  },

  completeTheLook: [],
};