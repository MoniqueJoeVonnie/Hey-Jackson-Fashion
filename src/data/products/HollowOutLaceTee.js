import productCardImage from "../../assets/Pet Product/Pet Clothing/Tees/hollow-out-lace-tee/hollow-out-lace-tee-green-product-card-1.png";

// BLUE
import blueBack from "../../assets/Pet Product/Pet Clothing/Tees/hollow-out-lace-tee/blue/hollow-out-lace-tee-blue-back.png";
import blueFront from "../../assets/Pet Product/Pet Clothing/Tees/hollow-out-lace-tee/blue/hollow-out-lace-tee-blue-front.png";
import blueBackProduct from "../../assets/Pet Product/Pet Clothing/Tees/hollow-out-lace-tee/blue/hollow-out-lace-tee-blue-back-product.png";
import blueFrontProduct from "../../assets/Pet Product/Pet Clothing/Tees/hollow-out-lace-tee/blue/hollow-out-lace-tee-blue-front-product.jpg";
import blueDetail from "../../assets/Pet Product/Pet Clothing/Tees/hollow-out-lace-tee/blue/hollow-out-lace-tee-blue-detail.png";

// GREEN
import greenBack from "../../assets/Pet Product/Pet Clothing/Tees/hollow-out-lace-tee/green/hollow-out-lace-tee-green-back.jpg";
import greenFront from "../../assets/Pet Product/Pet Clothing/Tees/hollow-out-lace-tee/green/hollow-out-lace-tee-green-front.png";
import greenBackProduct from "../../assets/Pet Product/Pet Clothing/Tees/hollow-out-lace-tee/green/hollow-out-lace-tee-green-back-product.jpg";
import greenFrontProduct from "../../assets/Pet Product/Pet Clothing/Tees/hollow-out-lace-tee/green/hollow-out-lace-tee-green-front-product.jpg";
import greenDetail from "../../assets/Pet Product/Pet Clothing/Tees/hollow-out-lace-tee/green/hollow-out-lace-tee-green-detail.png";

// PURPLE
import purpleBack from "../../assets/Pet Product/Pet Clothing/Tees/hollow-out-lace-tee/purple/hollow-out-lace-tee-purple-back.png";
import purpleFront from "../../assets/Pet Product/Pet Clothing/Tees/hollow-out-lace-tee/purple/hollow-out-lace-tee-purple-front.png";
import purpleBackProduct from "../../assets/Pet Product/Pet Clothing/Tees/hollow-out-lace-tee/purple/hollow-out-lace-tee-purple-back-product.png";
import purpleFrontProduct from "../../assets/Pet Product/Pet Clothing/Tees/hollow-out-lace-tee/purple/hollow-out-lace-tee-purple-front-product.jpg";
import purpleDetail from "../../assets/Pet Product/Pet Clothing/Tees/hollow-out-lace-tee/purple/hollow-out-lace-tee-purple-detail.png";

// YELLOW
import yellowBack from "../../assets/Pet Product/Pet Clothing/Tees/hollow-out-lace-tee/yellow/hollow-out-lace-tee-yellow-back.jpg";
import yellowFront from "../../assets/Pet Product/Pet Clothing/Tees/hollow-out-lace-tee/yellow/hollow-out-lace-tee-yellow-front.png";
import yellowBackProduct from "../../assets/Pet Product/Pet Clothing/Tees/hollow-out-lace-tee/yellow/hollow-out-lace-tee-yellow-back-product.jpg";
import yellowFrontProduct from "../../assets/Pet Product/Pet Clothing/Tees/hollow-out-lace-tee/yellow/hollow-out-lace-tee-yellow-front-product.jpg";
import yellowDetail from "../../assets/Pet Product/Pet Clothing/Tees/hollow-out-lace-tee/yellow/hollow-out-lace-tee-yellow-detail.png";

export const hollowOutLaceTee = {
  id: "hollow-out-lace-tee",

  name: "Hollow Out Lace Tee",

  category: "clothing",
  subcategory: "tees",

  price: "$34.99",
  inStock: true,

  image: productCardImage,
  recommendationImage: greenFrontProduct,

  description:
    "Give your pup’s warm-weather wardrobe a touch of sweet sophistication with the Hollow Out Lace Tee. Delicate, lightweight, and undeniably adorable, this charming sleeveless vest combines airy lace-inspired detailing with dainty bow accents for a boutique look made for fashionable pups. The lightweight mesh construction promotes airflow to help your furry fashionista stay comfortable on warmer days, while the soft, stretchy fabric allows plenty of freedom for walking, playing, lounging, and posing for those picture-perfect moments.",

  variants: [
    {
      id: "blue",
      name: "Blue",
      swatch: "#b9e8ef",
      thumbnail: blueFront,
      gallery: [
        blueBack,
        blueFront,
        blueBackProduct,
        blueFrontProduct,
        blueDetail,
      ],
    },
    {
      id: "green",
      name: "Green",
      swatch: "#c6d8b0",
      thumbnail: greenFront,
      gallery: [
        greenBack,
        greenFront,
        greenBackProduct,
        greenFrontProduct,
        greenDetail,
      ],
    },
    {
      id: "purple",
      name: "Purple",
      swatch: "#c9b0e8",
      thumbnail: purpleFront,
      gallery: [
        purpleBack,
        purpleFront,
        purpleBackProduct,
        purpleFrontProduct,
        purpleDetail,
      ],
    },
    {
      id: "yellow",
      name: "Yellow",
      swatch: "#f4e7a1",
      thumbnail: yellowFront,
      gallery: [
        yellowBack,
        yellowFront,
        yellowBackProduct,
        yellowFrontProduct,
        yellowDetail,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL", "2XL"],

  details: {
    overview:
      "With its easy pullover design, the Hollow Out Lace Tee slips on without buckles or complicated straps. The lightweight polyester mesh, flexible fit, and sleeveless construction make it a comfortable warm-weather choice for summer strolls, vacations, brunch dates, parties, photoshoots, and everyday lounging.",

    features: [
      "Dainty bow details for a feminine boutique-inspired finish",
      "Intricate hollow-out lace design",
      "Lightweight and breathable mesh construction",
      "Comfortable stretch for natural movement",
      "Easy pullover design with no buckles or straps",
      "Sleeveless construction for warm-weather comfort",
      "Soft seams designed to help minimize rubbing",
      "Quick-drying polyester fabric",
      "Easy-care construction for everyday wear",
      "Available in Blue, Green, Purple, and Yellow",
      "Available in sizes XS through 2XL",
    ],

    specifications: [
      "Product Type: Sleeveless Lace Dog Vest / Tank Top",
      "Material: Polyester",
      "Closure: Pullover",
      "Fit: Stretchy Comfort Fit",
      "Season: Spring & Summer",
      "Features: Hollow-Out Lace, Decorative Bows, Breathable Mesh",
      "Available Colors: Blue, Green, Purple, and Yellow",
      "Available Sizes: XS, S, M, L, XL, and 2XL",
      "Category: Pet Clothing",
      "Subcategory: Tees",
    ],
  },

  completeTheLook: [],
};