import productCardImage from "../../assets/Pet Product/Pet Clothing/Tees/humble-with-a-hint-of-kanye/humble-with-a-hint-of-kanye-white-tee-product-card-1.png";

// BLACK
import blackBack from "../../assets/Pet Product/Pet Clothing/Tees/humble-with-a-hint-of-kanye/black/humble-with-a-hint-of-kanye-black-back.png";
import blackSide from "../../assets/Pet Product/Pet Clothing/Tees/humble-with-a-hint-of-kanye/black/humble-with-a-hint-of-kanye-black-side.png";
import blackFront from "../../assets/Pet Product/Pet Clothing/Tees/humble-with-a-hint-of-kanye/black/humble-with-a-hint-of-kanye-black-front.png";
import blackProduct from "../../assets/Pet Product/Pet Clothing/Tees/humble-with-a-hint-of-kanye/black/humble-with-a-hint-of-kanye-black-product.png";
import blackDetail from "../../assets/Pet Product/Pet Clothing/Tees/humble-with-a-hint-of-kanye/black/humble-with-a-hint-of-kanye-black-detail.png";

// WHITE
import whiteBack from "../../assets/Pet Product/Pet Clothing/Tees/humble-with-a-hint-of-kanye/white/humble-with-a-hint-of-kanye-white-back.png";
import whiteSide from "../../assets/Pet Product/Pet Clothing/Tees/humble-with-a-hint-of-kanye/white/humble-with-a-hint-of-kanye-white-side.png";
import whiteFront from "../../assets/Pet Product/Pet Clothing/Tees/humble-with-a-hint-of-kanye/white/humble-with-a-hint-of-kanye-white-front.png";
import whiteProduct from "../../assets/Pet Product/Pet Clothing/Tees/humble-with-a-hint-of-kanye/white/humble-with-a-hint-of-kanye-white-product.png";
import whiteDetail from "../../assets/Pet Product/Pet Clothing/Tees/humble-with-a-hint-of-kanye/white/humble-with-a-hint-of-kanye-white-detail.png";


export const humbleWithAHintOfKanye = {
  id: "humble-with-a-hint-of-kanye",

  name: "Humble With a Hint of Kanye",

  category: "clothing",
  subcategory: "tees",

  price: "$49.99",
  inStock: true,

  image: productCardImage,
  recommendationImage: whiteBack,

  colors: ["Black", "White"],

  sizes: ["XS", "S", "M", "L", "XL", "2XL"],

  description:
    "A little humble. A little iconic. A whole lot of attitude. Let your pup show off their personality in our Humble With a Hint of Kanye Dog Tee. Featuring the playful statement “humble with a hint of Kanye.” across the back, this tee is made for confident pups who know they’re fabulous—but are willing to stay somewhat humble about it. The classic sleeveless design gives your pup plenty of freedom to move while creating an effortlessly cool, streetwear-inspired look.",

  variants: [
    {
        id: "black",
        name: "Black",
        swatch: "#000000",
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

  details: {
    overview:
      "A little humble. A little iconic. A whole lot of attitude. The Humble With a Hint of Kanye Dog Tee combines playful personality with an effortlessly cool, streetwear-inspired look. Featuring the witty “humble with a hint of Kanye.” statement across the back, this sleeveless tee is made for confident pups who know they’re fabulous—but are willing to stay somewhat humble about it. Whether they’re heading to the dog park, posing for their latest social post, or simply lounging like the celebrity they know they are, this tee brings personality to every occasion.",

    features: [
      "Statement-making “humble with a hint of Kanye.” graphic",
      "Comfortable sleeveless cut for easy movement",
      "Classic tee styling for an effortlessly cool look",
      "Easy pullover design for quick and convenient dressing",
      "Picture-perfect personality for photos and social media",
      "Available in two classic colors: Black and White",
      "Great for walks, outings, vacations, parties, and everyday adventures",
    ],

    specifications: [
      "Product Type: Dog Tee",
      "Style: Sleeveless Pullover Tee",
      "Available Colors: Black and White",
      "Available Sizes: XS, S, M, L, XL, and 2XL",
      "Category: Pet Clothing",
      "Subcategory: Tees",
    ],
  },

  completeTheLook: [],
};