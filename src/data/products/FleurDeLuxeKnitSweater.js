
// Product Card Image
import productCardImage from "../../assets/Pet Product/Pet Clothing/Sweaters/fleur-de-luxe-knit-sweater/fleur-de-luxe-knit-sweater-product-image-card-1.png";

// Ginger — Orange/Yellow
import gingerBack from "../../assets/Pet Product/Pet Clothing/Sweaters/fleur-de-luxe-knit-sweater/ginger/fleur-de-luxe-knit-sweater-ginger-back.png";
import gingerDetail from "../../assets/Pet Product/Pet Clothing/Sweaters/fleur-de-luxe-knit-sweater/ginger/fleur-de-luxe-knit-sweater-ginger-detail.png";
import gingerFront from "../../assets/Pet Product/Pet Clothing/Sweaters/fleur-de-luxe-knit-sweater/ginger/fleur-de-luxe-knit-sweater-ginger-front.png";
import gingerProduct from "../../assets/Pet Product/Pet Clothing/Sweaters/fleur-de-luxe-knit-sweater/ginger/fleur-de-luxe-knit-sweater-ginger-product.png";
import gingerSide from "../../assets/Pet Product/Pet Clothing/Sweaters/fleur-de-luxe-knit-sweater/ginger/fleur-de-luxe-knit-sweater-ginger-side.png";

// Neon — Grey/Lime Green
import neonBack from "../../assets/Pet Product/Pet Clothing/Sweaters/fleur-de-luxe-knit-sweater/neon/fleur-de-luxe-knit-sweater-neon-back.png";
import neonDetail from "../../assets/Pet Product/Pet Clothing/Sweaters/fleur-de-luxe-knit-sweater/neon/fleur-de-luxe-knit-sweater-neon-detail.png";
import neonFront from "../../assets/Pet Product/Pet Clothing/Sweaters/fleur-de-luxe-knit-sweater/neon/fleur-de-luxe-knit-sweater-neon-front.png";
import neonProduct from "../../assets/Pet Product/Pet Clothing/Sweaters/fleur-de-luxe-knit-sweater/neon/fleur-de-luxe-knit-sweater-neon-product.png";
import neonSide from "../../assets/Pet Product/Pet Clothing/Sweaters/fleur-de-luxe-knit-sweater/neon/fleur-de-luxe-knit-sweater-neon-side.png";



export const fleurDeLuxeKnitSweater = {
  id: "fleur-de-luxe-knit-sweater",
  name: "Fleur de Luxe Knit Sweater",
  category: "clothing",
  subcategory: "sweaters",
  price: "$44.99",
  inStock: true,

  image: productCardImage,
  recommendationImage: productCardImage,

  description:
    "A Little Luxury, A Lot of Personality! Give your fashionable pup the perfect combination of cozy comfort and sophisticated style with our Fleur de Luxe Knit Sweater! This charming pullover features an eye-catching geometric floral pattern that brings designer-inspired elegance to your furry friend's wardrobe. Crafted with a soft, stretchable knit, it provides warmth and flexibility without sacrificing comfort. A ribbed mock neckline, short sleeves, and coordinating ribbed trim create a polished look for chilly autumn strolls, winter outings, birthdays, holiday gatherings, and picture-perfect moments.",

  sizes: ["XS", "S", "M", "L", "XL", "2XL"],

  gallery: [
    neonBack,
    neonSide,
    neonFront,
    neonProduct,
    neonDetail,
  ],

  variants: [
    {
      name: "Grey & Lime Green",
      swatch: "#B7D832",
      thumbnail: neonBack,
      gallery: [
        neonBack,
        neonSide,
        neonFront,
        neonProduct,
        neonDetail,
      ],
    },
    {
      name: "Orange & Yellow",
      swatch: "#F47B20",
      thumbnail: gingerBack,
      gallery: [
        gingerBack,
        gingerSide,
        gingerFront,
        gingerProduct,
        gingerDetail,
      ],
    },
  ],

  details: {
    overview:
      "The Fleur de Luxe Knit Sweater combines designer-inspired geometric floral motifs with cozy, stretchable comfort. Its ribbed mock neckline, short sleeves, and matching hem create a sophisticated silhouette while allowing your pup to move naturally. Available in two statement color combinations, this sweater adds a fashionable finishing touch to everyday adventures and special occasions.",

    features: [
      "Designer-inspired geometric floral pattern",
      "Soft, cozy knitted construction",
      "Stretchable fabric for comfortable movement",
      "Classic ribbed mock neckline",
      "Comfortable short sleeves",
      "Ribbed sleeve cuffs and bottom hem",
      "Easy-to-wear pullover design",
      "Available in two statement color combinations",
      "Perfect for autumn and winter styling",
      "Ideal for walks, birthdays, holidays, and photoshoots",
    ],

    specifications: [
      "Material: Soft knitted fabric (supplier describes acrylic yarn; specification lists cotton)",
      "Style: Designer-Inspired Geometric Floral Knit",
      "Neckline: Ribbed Mock Neck",
      "Sleeves: Short Sleeves",
      "Closure: Pullover",
      "Colors: Grey & Lime Green / Orange & Yellow",
      "Sizes: XS, S, M, L, XL, 2XL",
      "Seasons: Fall & Winter",
      "Suitable For: Small to medium-sized dogs, depending on measurements",
    ],
  },

  completeTheLook: [],
};
