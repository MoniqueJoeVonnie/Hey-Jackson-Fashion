
// Main Product Card
import productCardImage from "../../assets/Pet Product/Pet Clothing/Sweaters/the-parisian-bow-couture-sweater/the-parisian-bow-couture-sweater-product-image-card-1.png";

// Signature Bow Edition
import signatureBack from "../../assets/Pet Product/Pet Clothing/Sweaters/the-parisian-bow-couture-sweater/signature-bow-edition/the-parisian-bow-couture-sweater-signature-bow-edition-back.jpg";
import signatureDetail from "../../assets/Pet Product/Pet Clothing/Sweaters/the-parisian-bow-couture-sweater/signature-bow-edition/the-parisian-bow-couture-sweater-signature-bow-edition-detail.png";
import signatureFront from "../../assets/Pet Product/Pet Clothing/Sweaters/the-parisian-bow-couture-sweater/signature-bow-edition/the-parisian-bow-couture-sweater-signature-bow-edition-front.jpg";
import signatureProduct from "../../assets/Pet Product/Pet Clothing/Sweaters/the-parisian-bow-couture-sweater/signature-bow-edition/the-parisian-bow-couture-sweater-signature-bow-edition-product.png";
import signatureSide from "../../assets/Pet Product/Pet Clothing/Sweaters/the-parisian-bow-couture-sweater/signature-bow-edition/the-parisian-bow-couture-sweater-signature-bow-edition-side.jpg";

// Teddy Bow Edition
import teddyBack from "../../assets/Pet Product/Pet Clothing/Sweaters/the-parisian-bow-couture-sweater/teddy-bow-edition/the-parisian-bow-couture-sweater-teddy-bow-edition-back.png";
import teddyFront from "../../assets/Pet Product/Pet Clothing/Sweaters/the-parisian-bow-couture-sweater/teddy-bow-edition/the-parisian-bow-couture-sweater-teddy-bow-edition-front.png";
import teddyDetail from "../../assets/Pet Product/Pet Clothing/Sweaters/the-parisian-bow-couture-sweater/teddy-bow-edition/the-parisian-bow-couture-sweater-teddy-bow-edition-product-detail.png";
import teddyProduct from "../../assets/Pet Product/Pet Clothing/Sweaters/the-parisian-bow-couture-sweater/teddy-bow-edition/the-parisian-bow-couture-sweater-teddy-bow-edition-product.png";
import teddySide from "../../assets/Pet Product/Pet Clothing/Sweaters/the-parisian-bow-couture-sweater/teddy-bow-edition/the-parisian-bow-couture-sweater-teddy-bow-edition-side.png";



export const theParisianBowCoutureSweater = {
  id: "the-parisian-bow-couture-sweater",
  name: "The Parisian Bow Couture Sweater",
  category: "clothing",
  subcategory: "sweaters",
  price: "$49.99",
  inStock: true,

  image: productCardImage,
  recommendationImage: productCardImage,

  description:
    "Two Signature Styles. One Irresistibly Chic Look! Bring a touch of Parisian glamour to your pup's wardrobe with The Parisian Bow Couture Sweater, where timeless elegance meets cozy comfort! Designed for fashionable pups who love to make an entrance, this luxurious black knit sweater comes in two stunning editions, each featuring beautiful bow accents, sophisticated embellishments, and distinctive couture-inspired detailing. Crafted with soft, flexible knit fabric, this charming pullover provides comfortable warmth without restricting your pet's natural movement. Its stretchy construction and comfortable neckline make it a stylish choice for cooler days, special occasions, and picture-perfect moments.",

  gallery: [
    signatureBack,
    signatureSide,
    signatureFront,
    signatureProduct,
    signatureDetail,
  ],

  variants: [
     {
      name: "Teddy Bow Edition",
      swatch: "#E8B8C4",
      thumbnail: teddyBack,
      gallery: [
        teddyBack,
        teddySide,
        teddyFront,
        teddyProduct,
        teddyDetail,
       ],
    },
    {
      name: "Signature Bow Edition",
      swatch: "#30272A",
      thumbnail: signatureBack,
      gallery: [
        signatureBack,
        signatureSide,
        signatureFront,
        signatureProduct,
        signatureDetail,
      ],
    },
  ],

  sizes: ["XS", "S", "M", "L", "XL", "2XL"],

  details: {
    overview:
      "Two signature styles, one irresistibly chic look! The Parisian Bow Couture Sweater combines timeless elegance with cozy comfort. Choose between the sophisticated Signature Bow Edition and the glamorous Teddy Bow Edition. Both designs feature soft, flexible knit construction, distinctive decorative accents, and a comfortable pullover fit. Perfect for autumn strolls, winter outings, birthdays, holiday celebrations, and glamorous photo shoots.",

    features: [
      "Two Couture-Inspired Designs: Choose between the Signature Bow Edition and Teddy Bow Edition.",
      "Signature Bow Edition: Elegant black knit with an ivory V-shaped design, cream satin bow, leopard-print ribbon, soft brown pom-pom center, ivory ribbed trim, and delicate heart-shaped charm.",
      "Teddy Bow Edition: Luxurious black feather trim, pearl-inspired detailing along the back neckline, delicate pink embroidery, blush satin bow, sparkling heart-shaped centerpiece, and decorative accents.",
      "Soft & Stretchable Knit: Designed to provide warmth, flexibility, and everyday comfort.",
      "Elegant Embellishments: Beautiful satin bows, decorative charms, and distinctive finishing details.",
      "Comfortable Pullover Style: Easy to wear while allowing natural movement.",
      "Cozy Cold-Weather Fashion: Ideal for fall, winter, and chilly spring days.",
      "Picture-Perfect Style: Beautiful for birthdays, holidays, celebrations, and special occasions.",
    ],

    specifications: [
      "Color: Black with contrasting decorative accents",
      "Material: Soft synthetic-blend knit; supplier lists acrylic yarn and polyester/fleece/cotton",
      "Closure: Pullover",
      "Neckline: Stretch-knit neckline",
      "Available Styles: Signature Bow Edition and Teddy Bow Edition",
      "Sizes: XS, S, M, L, XL, 2XL",
      "Season: Fall, Winter & Early Spring",
      "Suitable For: Small to medium-sized dogs, depending on measurements",
      "Care: Gentle hand washing recommended. Wash in cold water and lay flat to dry to preserve delicate embellishments.",
    ],
  },

  completeTheLook: [],
};
