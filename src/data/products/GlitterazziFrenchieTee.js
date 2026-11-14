import glitterazziProductCard from "../../assets/Pet Product/Pet Clothing/Tees/glitterazzi-frenchie-tee/glitterazzi-frenchie-tee-product-card-1.png";

import glitterazziBack from "../../assets/Pet Product/Pet Clothing/Tees/glitterazzi-frenchie-tee/glitterazzi-frenchie-tee-back.png";
import glitterazziSide from "../../assets/Pet Product/Pet Clothing/Tees/glitterazzi-frenchie-tee/glitterazzi-frenchie-tee-side.png";
import glitterazziFront from "../../assets/Pet Product/Pet Clothing/Tees/glitterazzi-frenchie-tee/glitterazzi-frenchie-tee-front.png";
import glitterazziProduct from "../../assets/Pet Product/Pet Clothing/Tees/glitterazzi-frenchie-tee/glitterazzi-frenchie-tee-product.png";
import glitterazziDetail from "../../assets/Pet Product/Pet Clothing/Tees/glitterazzi-frenchie-tee/glitterazzi-frenchie-tee-detail.png";


export const glitterazziFrenchieTee = {
  id: "glitterazzi-frenchie-tee",
  name: "Glitterazzi Frenchie Tee",
  category: "clothing",
  subcategory: "tees",
  price: "$54.99",
  inStock: true,

  image: glitterazziProductCard,
  recommendationImage: glitterazziProductCard,

  description:
    "Give your pup’s wardrobe a little extra sparkle with the Glitterazzi Frenchie Tee! This chic black sleeveless dog shirt combines a sleek, fashion-forward look with an eye-catching touch of glam—perfect for pups who were born to stand out. The centerpiece features a stylish French Bulldog silhouette in shimmering pink glitter, framed by an elegant coordinating border. A decorative pink bow with a sparkling center embellishment adds the perfect finishing touch, creating a boutique-inspired look that’s playful, polished, and undeniably fabulous.",

  colors: ["Black"],
  sizes: ["XS", "S", "M", "L", "XL"],

  gallery: [
    glitterazziBack,
    glitterazziSide,
    glitterazziFront,
    glitterazziProduct,
    glitterazziDetail,
  ],

  variants: [
    {
      id: "black",
      name: "Black",
      swatch: "#111111",
      thumbnail: glitterazziFront,
      gallery: [
        glitterazziBack,
        glitterazziSide,
        glitterazziFront,
        glitterazziProduct,
        glitterazziDetail,
      ],
    },
  ],

  details: {
    overview:
      "Add a little sparkle to your pup’s wardrobe with the Glitterazzi Frenchie Tee. This chic black sleeveless dog shirt combines a sleek, fashion-forward look with an eye-catching touch of glam. The shimmering pink French Bulldog design and decorative bow create a boutique-inspired statement piece made for fashionable pups who love to stand out.",

    features: [
      "Sparkling pink glitter Frenchie design",
      "Decorative pink bow with jeweled-style accent",
      "Classic black fabric makes the pink details pop",
      "Comfortable sleeveless design for easy movement",
      "Stylish curved hem for a polished fit",
      "Perfect for photos, outings, parties, birthdays, and special occasions",
      "Available in sizes XS through XL",
    ],

    specifications: [
      "Product Type: Sleeveless Dog Tee",
      "Color: Black",
      "Design: Pink Glitter French Bulldog",
      "Accent: Decorative Pink Bow with Sparkling Center",
      "Style: Sleeveless",
      "Hem: Curved Hem",
      "Available Sizes: XS, S, M, L, and XL",
      "Category: Pet Clothing",
      "Subcategory: Tees",
    ],
  },

  completeTheLook: [],
};