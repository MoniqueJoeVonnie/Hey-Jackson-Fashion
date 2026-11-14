
import productCard from "../../assets/Pet Product/Pet Clothing/Tees/new-york-yankees-mlb-pet-jersey/new-york-yankees-mlb-product-card-image.png";

import jerseyFront from "../../assets/Pet Product/Pet Clothing/Tees/new-york-yankees-mlb-pet-jersey/new-york-yankees-mlb-product-front.png";
import jerseyBack from "../../assets//Pet Product/Pet Clothing/Tees/new-york-yankees-mlb-pet-jersey/new-york-yankees-mlb-pet-jersey-back.png";
import jerseySide from "../../assets/Pet Product/Pet Clothing/Tees/new-york-yankees-mlb-pet-jersey/new-york-yankees-mlb-side.png";
import jerseyModelFront from "../../assets/Pet Product/Pet Clothing/Tees/new-york-yankees-mlb-pet-jersey/new-york-yankees-mlb-pet-jersey-front.png";

import productBack from "../../assets/Pet Product/Pet Clothing/Tees/new-york-yankees-mlb-pet-jersey/new-york-yankees-mlb-pet-jersey-product-back.png";
import detailOne from "../../assets/Pet Product/Pet Clothing/Tees/new-york-yankees-mlb-pet-jersey/new-york-yankees-mlb-pet-jersey-detail1.png";
import detailTwo from "../../assets/Pet Product/Pet Clothing/Tees/new-york-yankees-mlb-pet-jersey/new-york-yankees-mlb-pet-jersey-detail2.png";
import fittingGuide from "../../assets/Pet Product/Pet Clothing/Tees/new-york-yankees-mlb-pet-jersey/new-york-yankees-mlb-pet-jersey-fitting-guide.png";

export const newYorkYankeesMLBPetJersey = {
  id: "new-york-yankees-mlb-pet-jersey",
  name: "New York Yankees MLB Pet Jersey",
  category: "clothing",
  subcategory: "tees",
  price: "$20.50",

  image: productCard,
  recommendationImage: jerseyBack,

  
description:
  "Let Your Pup Step Up to the Plate in Major League Style! Batter up, fashionable pups! ⚾🐾 Bring the excitement of baseball season to your furry MVP with the New York Yankees MLB Dog Jersey by Pets First! This officially licensed jersey combines authentic Yankees pride with sporty style and everyday comfort.",

details: {
  overview:
    "Batter up, fashionable pups! ⚾🐾 Bring the excitement of baseball season to your furry MVP with the New York Yankees MLB Dog Jersey by Pets First! Whether your pup is cheering from the couch, joining you for game day, or turning heads on a neighborhood stroll, this officially licensed jersey combines authentic Yankees pride with sporty style and everyday comfort.\n\nFeaturing the iconic New York Yankees logo, classic white fabric with navy blue pinstripes, and a bold “01” design on the back, this jersey gives your four-legged fan a winning look worthy of the big leagues!\n\nCrafted from lightweight, breathable fabric, this sporty jersey helps keep your pup comfortable while allowing freedom of movement. The convenient pullover design makes getting dressed quick and easy, so your furry superstar is always ready for the next adventure.\n\nFrom baseball watch parties and family outings to adorable game-day photoshoots, this jersey is a home run for pups who love to look their best!",

  features: [
    "Officially Licensed MLB Merchandise: Authentic Major League Baseball pet apparel featuring the legendary New York Yankees.",
    "Classic Yankees Style: Crisp white fabric, signature navy pinstripes, embroidered-style MLB detailing, and the recognizable Yankees logo.",
    "Sporty 01 Back Design: Bold navy numbering and New York Yankees script give your pup an authentic baseball-inspired look.",
    "Lightweight & Breathable: Comfortable fabric designed to help your furry friend stay cool during everyday activities.",
    "Comfortable Fit: Designed to allow natural movement for walking, playing, lounging, and cheering on your favorite team.",
    "Easy Pullover Style: Simple to slip on and take off for hassle-free dressing.",
    "Perfect for Game Day & Beyond: Ideal for baseball games, watch parties, outdoor adventures, pet photoshoots, and everyday fashion.",
    "A Grand Slam Gift: A fun and thoughtful gift for Yankees fans, baseball enthusiasts, and fashionable pet parents.",
  ],

  specifications: [
    "Brand: Pets First",
    "Team: New York Yankees",
    "League: Major League Baseball (MLB)",
    "Product Type: Dog Baseball Jersey",
    "Color: White with Navy Blue Pinstripes",
    "Design: Yankees Logo, MLB Detailing & Number 01",
    "Style: Short-Sleeve Pullover Jersey",
    "Material: Lightweight, Breathable Fabric",
    "Officially Licensed: Yes",
    "Available Sizes: XS, S, M, L, XL, 2XL, 3XL",
    "Sizing: Measure your dog's back length and chest girth before ordering. Compare measurements with the official Pets First sizing chart included in the product images.",
    "Sizing Tip: If your pup falls between sizes, review both measurements carefully and consider their body shape for a comfortable fit.",
    "Every Pup Deserves a Winning Look! Add the New York Yankees MLB Dog Jersey to your pup's wardrobe today and let them steal the spotlight—one adorable inning at a time! ⚾🐾💙",
    "Hey Jackson! Fashion — Where Every Pup Is an MVP!",
  ],
},
  
  variants: [
    {
      id: "white",
      name: "White Jersey",
      swatch: "#ffffff",
      thumbnail: jerseyFront,
      gallery: [
        jerseyBack,
        jerseySide,
        jerseyModelFront,
        productBack,
        jerseyFront,
        detailOne,
        detailTwo,
        fittingGuide,
      ],
    },
  ],


  sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],


  completeTheLook: [
    "pet-boots",
    "step-in-harness",
    "waste-bag-dispenser",
  ],
};
