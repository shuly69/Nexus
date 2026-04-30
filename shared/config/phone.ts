
import { CardPhone } from "@/entities/Card/type/model";
import { slugify } from "@/shared/lib/slugify/slug";
export const spotlightProducts = [
    { id: 1, brand: "Apple", name: "iPhone 15 Pro", image: '', price: 999 },
    { id: 2, brand: "Samsung", name: "Galaxy S24+", image: '', price: 999 },
    { id: 3, brand: "Google", name: "Pixel 8", image: '', price: 699 },
  ];

export const phoneCards = [
  {
    id: 1,
    brand: "Apple",
    model: "iPhone 13",
    imageUrl: "/images/phone-section/phone.jpg",
    price: 999,
    rating: 4.5,
    reviews: 120,
    status: "hot",
    createdAt: "2024-02-10T09:00:00Z",
    variants: [
      {
        capacity: "128GB",
        colors: [
          { name: "black", stock: 10, },
          { name: "green", stock: 5 , },
          { name: "yellow", stock: 5, }
        ]
      }
    ]
  },

  {
    id: 2,
    brand: "Samsung",
    model: "Galaxy S21",
    imageUrl: "/images/phone-section/phone2.jpg",
    price: 799,
    oldPrice: 899,
    rating: 4.3,
    reviews: 95,
    status: "best",
    createdAt: "2026-02-20T12:00:00Z",
    variants: [
      {
        capacity: "256GB",
        colors: [
          { name: "white", stock: 15 }
        ]
      }
    ]
  },

  {
    id: 3,
    brand: "Google",
    model: "Pixel 6",
    imageUrl: "/images/phone-section/phone1.jpg",
    price: 699,
    oldPrice: 799,
    rating: 4.2,
    reviews: 80,
    status: "new",
    createdAt: "2026-03-15T14:00:00Z",
    variants: [
      {
        capacity: "128GB",
        colors: [
          { name: "black", stock: 10 }
        ]
      }
    ]
  },

  {
    id: 4,
    brand: "Google",
    model: "Pixel 6",
    imageUrl: "/images/phone-section/phone1.jpg",
    price: 299,
    oldPrice: 799,
    rating: 4.2,
    reviews: 80,
    status: "new",
    createdAt: "2024-02-18T10:30:00Z",
    variants: [
      {
        capacity: "128GB",
        colors: [
          { name: "blue", stock: 10 }
        ]
      }
    ]
  },

  {
    id: 5,
    brand: "Sony",
    model: "Xperia 5 III",
    imageUrl: "/images/phone-section/phone.jpg",
    price: 1299,
    rating: 4.0,
    reviews: 60,
    status: "hot",
    createdAt: "2024-01-05T08:00:00Z",
    variants: [
      {
        capacity: "128GB",
        colors: [
          { name: "black", stock: 12 }
        ]
      }
    ]
  },

  {
    id: 6,
    brand: "OnePlus",
    model: "9 Pro",
    imageUrl: "/images/phone-section/phone.jpg",
    price: 969,
    oldPrice: 1069,
    rating: 4.4,
    reviews: 110,
    status: "best",
    createdAt: "2026-02-28T11:00:00Z",
    variants: [
      {
        capacity: "256GB",
        colors: [
          { name: "green", stock: 8 }
        ]
      }
    ]
  },

  {
    id: 7,
    brand: "Xiaomi",
    model: "Mi 11",
    imageUrl: "/images/phone-section/phone.jpg",
    price: 349,
    oldPrice: 849,
    rating: 4.1,
    reviews: 70,
    status: "new",
    createdAt: "2024-02-12T16:00:00Z",
    variants: [
      {
        capacity: "128GB",
        colors: [
          { name: "white", stock: 14 }
        ]
      }
    ]
  },

  {
    id: 8,
    brand: "Huawei",
    model: "P40 Pro",
    imageUrl: "/images/phone-section/phone.jpg",
    price: 1199,
    rating: 4.3,
    reviews: 90,
    status: "hot",
    createdAt: "2026-03-11T09:30:00Z",
    variants: [
      {
        capacity: "256GB",
        colors: [
          { name: "silver", stock: 9 }
        ]
      }
    ]
  }
];
  
export const phoneDeals = [
  {
    id: 1,
    brand: "Apple",
    model: "iPhone 13 Pro",
    imageUrl: "/images/phone-section/galaxy.png",
    price: 899,
    oldPrice: 999,
    rating: 4.5,
    reviews: 120,
    status: "save",
    stock: 20,
    variants: [
      {
        capacity: "128GB",
        colors: [
          { name: "black", stock: 10 },
          { name: "green", stock: 5 },
          { name: "yellow", stock: 5 }
        ]
      }
    ]
  },

  {
    id: 2,
    brand: "Samsung",
    model: "Galaxy S21 Ultra",
    imageUrl: "/images/phone-section/phone1.jpg",
    price: 1099,
    oldPrice: 1199,
    rating: 4.3,
    reviews: 95,
    status: "off",
    stock: 15,
    variants: [
      {
        capacity: "256GB",
        colors: [
          { name: "white", stock: 15 }
        ]
      }
    ]
  },

  {
    id: 3,
    brand: "Google",
    model: "Pixel 6 Pro",
    imageUrl: "/images/phone-section/pixel.png",
    price: 899,
    oldPrice: 999,
    rating: 4.2,
    reviews: 80,
    status: "limited",
    stock: 10,
    variants: [
      {
        capacity: "128GB",
        colors: [
          { name: "black", stock: 10 }
        ]
      }
    ]
  }
];


export const COLOR_MAP: Record<string, string> = {
  "black": "#000000",
  "white": "#ffffff",
  "blue": "#1e40af",
  "green": "#10b981",
  "yellow": "#facc15",
  "silver": "#c0c0c0",
  "titanium gray": "#8e8e93",
  "natural titanium": "#b8b8b8",
  "deep purple": "#5b4b8a",
  "midnight": "#1e293b",
  "starlight": "#f5f5dc",
  "phantom black": "#0f0f0f",
  "emerald forest": "#0f5132",
};

export const products = [
  {
    id: 1,
    model: "iPhone 16 Pro Max",
    variants: [
      {
        capacity: "256GB",
        colors: [
          { name: "Desert Titanium", stock: 10 }
        ]
      }
    ],
    price: 1199,
    brand: "Apple",
    category: "iPhone",
    rating: 4.9,
    imageUrl: "/images/phone-section/phone1.jpg",
    badge: "Limited Time Offer"
  },
  {
    id: 2,
    model: "iPhone 15 Pro",
    variants: [
      {
        capacity: "128GB",
        colors: [
          { name: "Natural Titanium", stock: 7 }
        ]
      }
    ],
    price: 900,
    brand: "Apple",
    category: "iPhone",
    rating: 4.8,
    imageUrl: "/images/phone-section/phone1.jpg"
  },
  {
    id: 3,
    model: "Galaxy S24 Ultra",
    variants: [
      {
        capacity: "256GB",
        colors: [
          { name: "Titanium Gray", stock: 12 }
        ]
      }
    ],
    price: 800,
    brand: "Samsung",
    category: "Galaxy",
    rating: 4.7,
    imageUrl: "/images/phone-section/phone1.jpg"
  },
  {
    id: 4,
    model: "iPhone 14 Pro Max",
    variants: [
      {
        capacity: "256GB",
        colors: [
          { name: "Deep Purple", stock: 4 }
        ]
      }
    ],
    price: 799,
    brand: "Apple",
    category: "iPhone",
    rating: 4.7,
    imageUrl: "/images/phone-section/phone1.jpg"
  },
  {
    id: 5,
    model: "iPhone 13 Mini",
    variants: [
      {
        capacity: "128GB",
        colors: [
          { name: "Midnight", stock: 6 }
        ]
      }
    ],
    price: 600,
    brand: "Apple",
    category: "iPhone",
    rating: 4.6,
    imageUrl: "/images/phone-section/phone1.jpg"
  },
  {
    id: 6,
    model: "iPhone 12",
    variants: [
      {
        capacity: "64GB",
        colors: [
          { name: "Blue", stock: 8 }
        ]
      }
    ],
    price: 500,
    brand: "Apple",
    category: "iPhone",
    rating: 4.5,
    imageUrl: "/images/phone-section/phone1.jpg"
  },
  {
    id: 7,
    model: "iPhone 11",
    variants: [
      {
        capacity: "64GB",
        colors: [
          { name: "White", stock: 3 }
        ]
      }
    ],
    price: 400,
    brand: "Apple",
    category: "iPhone",
    rating: 4.4,
    imageUrl: "/images/phone-section/phone1.jpg"
  },
  {
    id: 8,
    model: "iPhone SE",
    variants: [
      {
        capacity: "256GB",
        colors: [
          { name: "Black", stock: 5 },
          { name: "White", stock: 0 },
          { name: "Blue", stock: 2 }
        ]
      },
      {
        capacity: "512GB",
        colors: [
          { name: "Black", stock: 0 },
          { name: "White", stock: 1 }
        ]
      }
    ],
    price: 300,
    brand: "Apple",
    category: "iPhone",
    rating: 4.3,
    imageUrl: "/images/phone-section/phone1.jpg"
  },
  {
    id: 9,
    model: "OnePlus 10 Pro",
    variants: [
      {
        capacity: "128GB",
        colors: [
          { name: "Emerald Forest", stock: 9 }
        ]
      }
    ],
    price: 649,
    brand: "OnePlus",
    category: "OnePlus",
    rating: 4.6,
    imageUrl: "/images/phone-section/phone1.jpg"
  },
  {
    id: 10,
    model: "Xiaomi Mi 11 Pro",
    variants: [
      {
        capacity: "256GB",
        colors: [
          { name: "Phantom Blue", stock: 11 }
        ]
      }
    ],
    price: 599,
    brand: "Xiaomi",
    category: "Xiaomi",
    rating: 4.5,
    imageUrl: "/images/phone-section/phone1.jpg"
  },
  {
    id: 11,
    model: "Samsung Galaxy S23",
    variants: [
      {
        capacity: "256GB",
        colors: [
          { name: "Phantom Black", stock: 7 }
        ]
      }
    ],
    price: 699,
    brand: "Samsung",
    category: "Galaxy",
    rating: 4.6,
    imageUrl: "/images/phone-section/phone1.jpg"
  },
  {
    id: 12,
    model: "Google Pixel 8 Pro",
    variants: [
      {
        capacity: "128GB",
        colors: [
          { name: "Porcelain", stock: 5 }
        ]
      }
    ],
    price: 799,
    brand: "Google",
    category: "Pixel",
    rating: 4.7,
    imageUrl: "/images/phone-section/phone1.jpg"
  },
  {
    id: 13,
    model: "Sony Xperia 1 V",
    variants: [
      {
        capacity: "256GB",
        colors: [
          { name: "Black", stock: 4 }
        ]
      }
    ],
    price: 1099,
    brand: "Sony",
    category: "Xperia",
    rating: 4.4,
    imageUrl: "/images/phone-section/phone1.jpg"
  },
  {
    id: 14,
    model: "Motorola Edge 40",
    variants: [
      {
        capacity: "256GB",
        colors: [
          { name: "Interstellar Black", stock: 6 }
        ]
      }
    ],
    price: 549,
    brand: "Motorola",
    category: "Edge",
    rating: 4.3,
    imageUrl: "/images/phone-section/phone1.jpg"
  }
];



export const productsSingle : CardPhone[] = [
  {
    id: 1,
    brand: "Apple",
    model: "iPhone 16 Pro Max",
    fullName: "iPhone 16 Pro Max",
    slug: slugify("iPhone 16 Pro Max"),
    imageUrl: "/images/iphone-16-pro-max.jpg",
    price: 1199,
    oldPrice: 1299,
    rating: 4.9,
    reviews: 2847,
    status: "hot",
    createdAt: "2024-02-10T09:00:00Z",

    description:
      "The iPhone 16 Pro Max is Apple's flagship device featuring an improved camera system, the powerful A18 Bionic chip, and a premium titanium design.",

    specs: {
      display: "6.9-inch LTPO Super Retina XDR",
      resolution: "2796 × 1290",
      refreshRate: "120Hz ProMotion",
      processor: "Apple A18 Bionic",
      battery: "4850 mAh",
      camera: "48MP + 12MP + 12MP",
      frontCamera: "12MP",
      os: "iOS 18",
      connectivity: ["5G", "Wi‑Fi 7", "Bluetooth 5.4", "USB‑C"],
    },

    features: [
      "Next‑generation titanium body",
      "Enhanced Night Mode photography",
      "Up to 29 hours of video playback",
      "Satellite connectivity support",
    ],

    variants: [
      {
        capacity: "256GB",
        colors: [{ name: "desert-titanium", stock: 10 }],
      },
    ],
  },

  {
    id: 2,
    brand: "Apple",
    model: "iPhone 15 Pro",
    fullName: "iPhone 15 Pro",
    slug: slugify("iPhone 15 Pro"),
    imageUrl: "/images/iphone-15-pro.jpg",
    price: 900,
    oldPrice: 999,
    rating: 4.8,
    reviews: 3251,
    status: "hot",
    createdAt: "2024-02-10T09:00:00Z",

    description:
      "The iPhone 15 Pro is a compact flagship with a titanium frame, the A17 Pro chip, and a professional‑grade camera system.",

    specs: {
      display: "6.1-inch LTPO Super Retina XDR",
      resolution: "2556 × 1179",
      refreshRate: "120Hz ProMotion",
      processor: "Apple A17 Pro",
      battery: "3274 mAh",
      camera: "48MP + 12MP + 12MP",
      frontCamera: "12MP",
      os: "iOS 17",
      connectivity: ["5G", "Wi‑Fi 6E", "Bluetooth 5.3", "USB‑C"],
    },

    features: [
      "Titanium frame",
      "A17 Pro 3nm chipset",
      "USB‑C support",
      "4K Cinematic Mode",
    ],

    variants: [
      {
        capacity: "128GB",
        colors: [{ name: "natural-titanium", stock: 10 }],
      },
    ],
  },

  {
    id: 3,
    brand: "Samsung",
    model: "Galaxy S24 Ultra",
    fullName: "Samsung Galaxy S24 Ultra",
    slug: slugify("Samsung Galaxy S24 Ultra"),
    imageUrl: "/images/galaxy-s24-ultra.jpg",
    price: 800,
    oldPrice: 1299,
    rating: 4.7,
    reviews: 2156,
    status: "hot",
    createdAt: "2024-02-10T09:00:00Z",

    description:
      "The Samsung Galaxy S24 Ultra is a powerful flagship featuring a 200MP camera, a large AMOLED display, and full S‑Pen support.",

    specs: {
      display: "6.8-inch Dynamic AMOLED 2X",
      resolution: "3120 × 1440",
      refreshRate: "120Hz",
      processor: "Snapdragon 8 Gen 3",
      battery: "5000 mAh",
      camera: "200MP + 50MP + 12MP + 10MP",
      frontCamera: "12MP",
      os: "Android 14",
      connectivity: ["5G", "Wi‑Fi 7", "Bluetooth 5.3", "USB‑C"],
    },

    features: [
      "Built‑in S‑Pen support",
      "200MP main camera",
      "Titanium frame",
      "8K video recording",
    ],

    variants: [
      {
        capacity: "256GB",
        colors: [{ name: "titanium-gray", stock: 10 }],
      },
    ],
  },

  {
    id: 4,
    brand: "Apple",
    model: "iPhone 14 Pro Max",
    fullName: "iPhone 14 Pro Max",
    slug: slugify("iPhone 14 Pro Max"),
    imageUrl: "/images/phone-section/phone1.jpg",
    price: 799,
    oldPrice: 1099,
    rating: 4.7,
    reviews: 5234,
    status: "hot",
    createdAt: "2024-02-10T09:00:00Z",

    description:
      "The iPhone 14 Pro Max features Dynamic Island, a 48MP camera system, and excellent battery life.",

    specs: {
      display: "6.7-inch LTPO Super Retina XDR",
      resolution: "2796 × 1290",
      refreshRate: "120Hz",
      processor: "Apple A16 Bionic",
      battery: "4323 mAh",
      camera: "48MP + 12MP + 12MP",
      frontCamera: "12MP",
      os: "iOS 16",
      connectivity: ["5G", "Wi‑Fi 6", "Bluetooth 5.3", "Lightning"],
    },

    features: [
      "Dynamic Island interface",
      "48MP main camera",
      "Up to 29 hours of video playback",
      "120Hz ProMotion display",
    ],

    variants: [
      {
        capacity: "256GB",
        colors: [{ name: "deep-purple", stock: 10 }],
      },
    ],
  },

  {
    id: 5,
    brand: "OnePlus",
    model: "OnePlus 10 Pro",
    fullName: "OnePlus 10 Pro",
    slug: slugify("OnePlus 10 Pro"),
    imageUrl: "/images/oneplus-10-pro.jpg",
    price: 649,
    oldPrice: 899,
    rating: 4.6,
    reviews: 1872,
    status: "hot",
    createdAt: "2024-02-10T09:00:00Z",

    description:
      "The OnePlus 10 Pro offers fast performance, a Hasselblad‑tuned camera system, and 80W fast charging.",

    specs: {
      display: "6.7-inch AMOLED 120Hz",
      resolution: "3216 × 1440",
      refreshRate: "120Hz",
      processor: "Snapdragon 8 Gen 1",
      battery: "5000 mAh",
      camera: "48MP + 50MP + 8MP",
      frontCamera: "32MP",
      os: "Android 12",
      connectivity: ["5G", "Wi‑Fi 6", "Bluetooth 5.2", "USB‑C"],
    },

    features: [
      "Hasselblad camera tuning",
      "80W fast charging",
      "120Hz AMOLED display",
      "Gorilla Glass Victus protection",
    ],

    variants: [
      {
        capacity: "128GB",
        colors: [{ name: "emerald-forest", stock: 10 }],
      },
    ],
  },

  {
    id: 6,
    brand: "Xiaomi",
    model: "Xiaomi Mi 11 Pro",
    fullName: "Xiaomi Mi 11 Pro",
    slug: slugify("Xiaomi Mi 11 Pro"),
    imageUrl: "/images/xiaomi-mi-11-pro.jpg",
    price: 599,
    oldPrice: 799,
    rating: 4.5,
    reviews: 1245,
    status: "hot",
    createdAt: "2024-02-10T09:00:00Z",

    description:
      "The Xiaomi Mi 11 Pro delivers strong performance, a high‑quality camera, and fast charging in a sleek design.",

    specs: {
      display: "6.81-inch AMOLED 120Hz",
      resolution: "3200 × 1440",
      refreshRate: "120Hz",
      processor: "Snapdragon 888",
      battery: "5000 mAh",
      camera: "50MP + 13MP + 8MP",
      frontCamera: "20MP",
      os: "Android 11",
      connectivity: ["5G", "Wi‑Fi 6", "Bluetooth 5.2", "USB‑C"],
    },

    features: [
      "120Hz AMOLED display",
      "50MP main camera",
      "67W fast charging",
      "Harman Kardon stereo speakers",
    ],

    variants: [
      {
        capacity: "256GB",
        colors: [{ name: "phantom-blue", stock: 10 }],
      },
    ],
  },

  {
    id: 7,
    brand: "Samsung",
    model: "Galaxy S23",
    fullName: "Samsung Galaxy S23",
    slug: slugify("Samsung Galaxy S23"),
    imageUrl: "/images/galaxy-s23.jpg",
    price: 699,
    oldPrice: 799,
    rating: 4.6,
    reviews: 3421,
    status: "hot",
    createdAt: "2024-02-10T09:00:00Z",

    description:
      "The Samsung Galaxy S23 is a compact flagship powered by the Snapdragon 8 Gen 2 with an excellent camera system.",

    specs: {
      display: "6.1-inch Dynamic AMOLED 2X",
      resolution: "2340 × 1080",
      refreshRate: "120Hz",
      processor: "Snapdragon 8 Gen 2",
      battery: "3900 mAh",
      camera: "50MP + 12MP + 10MP",
      frontCamera: "12MP",
      os: "Android 14",
      connectivity: ["5G", "Wi‑Fi 6E", "Bluetooth 5.3", "USB‑C"],
    },

    features: [
      "Compact premium design",
      "Snapdragon 8 Gen 2 performance",
      "120Hz AMOLED display",
      "50MP main camera",
    ],

    variants: [
      {
        capacity: "256GB",
        colors: [{ name: "phantom-black", stock: 10 }],
      },
    ],
  },

  {
    id: 8,
    brand: "Google",
    model: "Pixel 8 Pro",
    fullName: "Google Pixel 8 Pro",
    slug: slugify("Google Pixel 8 Pro"),
    imageUrl: "/images/pixel-8-pro.jpg",
    price: 799,
    oldPrice: 999,
    rating: 4.7,
    reviews: 1893,
    status: "hot",
    createdAt: "2024-02-10T09:00:00Z",

    description:
      "The Google Pixel 8 Pro features advanced AI capabilities, a high‑end camera system, and a clean Android experience.",

    specs: {
      display: "6.7-inch LTPO OLED",
      resolution: "2992 × 1344",
      refreshRate: "120Hz",
      processor: "Google Tensor G3",
      battery: "5050 mAh",
      camera: "50MP + 48MP + 48MP",
      frontCamera: "10.5MP",
      os: "Android 14",
      connectivity: ["5G", "Wi‑Fi 7", "Bluetooth 5.3", "USB‑C"],
    },

    features: [
      "Advanced AI features",
      "50MP main camera",
      "120Hz OLED display",
      "7 years of software updates",
    ],

    variants: [
      {
        capacity: "128GB",
        colors: [{ name: "porcelain", stock: 10 }],
      },
    ],
  },
];