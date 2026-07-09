import sportyHarnessRedImage from "../../assets/Pet Product/Harnesses and Leashes/Harnesses/Sporty Harness/sporty-red-harness-leash.png";
import sportyHarnessGreenImage from "../../assets/Pet Product/Harnesses and Leashes/Harnesses/Sporty Harness/sporty-green-harness-leash.png";
import sportyHarnessPurpleImage from "../../assets/Pet Product/Harnesses and Leashes/Harnesses/Sporty Harness/sporty-purple-harness-leash.png";
import sportyHarnessYellowImage from "../../assets/Pet Product/Harnesses and Leashes/Harnesses/Sporty Harness/sporty-yellow-harness-leash.png";

import sportyHarnessRedCloseup from "../../assets/Pet Product/Harnesses and Leashes/Harnesses/Sporty Harness/sporty-red-harness-leash-closeup.png";
import sportyHarnessGreenCloseup from "../../assets/Pet Product/Harnesses and Leashes/Harnesses/Sporty Harness/sporty-green-harness-leash-closeup.png";
import sportyHarnessPurpleCloseup from "../../assets/Pet Product/Harnesses and Leashes/Harnesses/Sporty Harness/sporty-purple-harness-leash-closeup.png";
import sportyHarnessYellowCloseup from "../../assets/Pet Product/Harnesses and Leashes/Harnesses/Sporty Harness/sporty-yellow-harness-leash-closeup.png";

export const stepInHarness = {
  id: "step-in-harness",
  name: "Step-In Harness",
  category: "harnesses",
  price: "$34.99",

  image: sportyHarnessRedImage,
  recommendationImage: sportyHarnessRedImage,

  description: "A secure harness and leash set for stylish walks.",

  gallery: [sportyHarnessRedImage],

  variants: [
  {
    id: "red",
    name: "Red",
    swatch: "#d62828",
    thumbnail: sportyHarnessRedImage,
    gallery: [
      sportyHarnessRedImage,
      sportyHarnessRedCloseup,
    ],
  },
  {
    id: "green",
    name: "Green",
    swatch: "#16a34a",
    thumbnail: sportyHarnessGreenImage,
    gallery: [
      sportyHarnessGreenImage,
      sportyHarnessGreenCloseup,
    ],
  },
  {
    id: "purple",
    name: "Purple",
    swatch: "#7e22ce",
    thumbnail: sportyHarnessPurpleImage,
    gallery: [
      sportyHarnessPurpleImage,
      sportyHarnessPurpleCloseup,
    ],
  },
  {
    id: "yellow",
    name: "Yellow",
    swatch: "#facc15",
    thumbnail: sportyHarnessYellowImage,
    gallery: [
      sportyHarnessYellowImage,
      sportyHarnessYellowCloseup,
    ],
  },
],

  sizes: ["XS", "S", "M", "L", "XL"],

  details: {
  overview:
    "Give your pup the perfect combination of comfort, security, and sporty style with our Sporty Step-In Harness & Leash Set. This breathable step-in harness is designed for easy on-and-off wear while providing a secure, comfortable fit for everyday adventures. Lightweight mesh padding, reflective trim, and adjustable straps help keep your dog comfortable and visible on every walk. Complete with a matching leash, it's the perfect set for active pups.",

  features: [
    "Easy step-in design for quick and hassle-free dressing",
    "Soft, breathable mesh lining provides all-day comfort",
    "Reflective trim helps improve visibility during evening walks",
    "Adjustable straps create a secure, customized fit",
    "Durable metal D-ring offers a reliable leash attachment",
    "Lightweight design allows natural movement",
    "Matching leash included for a coordinated sporty look",
    "Perfect for daily walks, training, travel, and outdoor adventures",
  ],

  specifications: [
    "Includes: Step-In Harness & Matching Leash",
    "Available Colors: Red, Green, Purple, Yellow",
    "Material: Breathable Polyester Mesh & Nylon",
    "Fit: Adjustable for a secure, comfortable fit",
    "Closure: Quick-release buckle with adjustable straps",
    "Safety Features: Reflective trim for enhanced visibility",
    "Leash Attachment: Reinforced metal D-ring",
    "Best For: Daily walks, training sessions, travel, and active dogs",
    "Suitable For: Small to Medium Dogs",
    "Care: Spot clean with mild soap and air dry",
  ],
},

  completeTheLook: [
    "sporty-jersey",
    "pet-boots",
    "waste-bag-dispenser",
  ],
};