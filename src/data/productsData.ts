export const productsDatabase = {
  "iPhone 15 Pro": {
    name: "iPhone 15 Pro",
    image: "https://images.unsplash.com/photo-1696446702094-944d0c87d4fe?w=800&q=80",
    description: "The iPhone 15 Pro features a titanium design, A17 Pro chip, and enhanced camera capabilities with advanced computational photography.",
    features: [
      "A17 Pro chip with 6-core CPU",
      "Pro camera system (48MP Main, Ultra Wide, Telephoto)",
      "Titanium design with textured matte glass back",
      "6.1-inch Super Retina XDR display with ProMotion",
      "Up to 23 hours video playback",
      "Action button for quick shortcuts"
    ],
    stores: [
      {
        name: "Apple Store",
        logo: "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=100&q=80",
        price: 999,
        rating: 4.8,
        reviews: 15420,
        link: "https://apple.com"
      },
      {
        name: "Amazon",
        logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&q=80",
        price: 949,
        rating: 4.6,
        reviews: 8932,
        link: "https://amazon.com"
      },
      {
        name: "Best Buy",
        logo: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=100&q=80",
        price: 979,
        rating: 4.5,
        reviews: 5643,
        link: "https://bestbuy.com"
      },
      {
        name: "Walmart",
        logo: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=100&q=80",
        price: 969,
        rating: 4.4,
        reviews: 3210,
        link: "https://walmart.com"
      }
    ]
  },
  "Sony WH-1000XM5": {
    name: "Sony WH-1000XM5",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80",
    description: "Industry-leading noise canceling headphones with exceptional sound quality, all-day comfort, and smart features for the ultimate listening experience.",
    features: [
      "Industry-leading noise cancellation",
      "30-hour battery life with quick charging",
      "Multipoint connection for seamless switching",
      "Speak-to-Chat technology",
      "Premium sound quality with LDAC",
      "Lightweight and comfortable design"
    ],
    stores: [
      {
        name: "Sony",
        logo: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=100&q=80",
        price: 399,
        rating: 4.7,
        reviews: 12340,
        link: "https://sony.com"
      },
      {
        name: "Amazon",
        logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&q=80",
        price: 349,
        rating: 4.6,
        reviews: 18765,
        link: "https://amazon.com"
      },
      {
        name: "Best Buy",
        logo: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=100&q=80",
        price: 379,
        rating: 4.5,
        reviews: 7654,
        link: "https://bestbuy.com"
      }
    ]
  },
  "MacBook Pro M3": {
    name: "MacBook Pro M3",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
    description: "The most advanced MacBook Pro ever with the powerful M3 chip, stunning Liquid Retina XDR display, and all-day battery life.",
    features: [
      "Apple M3 chip with 8-core CPU",
      "14-inch Liquid Retina XDR display",
      "Up to 22 hours battery life",
      "16GB unified memory",
      "512GB SSD storage",
      "Three Thunderbolt 4 ports"
    ],
    stores: [
      {
        name: "Apple Store",
        logo: "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=100&q=80",
        price: 1599,
        rating: 4.9,
        reviews: 9876,
        link: "https://apple.com"
      },
      {
        name: "Amazon",
        logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&q=80",
        price: 1549,
        rating: 4.7,
        reviews: 5432,
        link: "https://amazon.com"
      },
      {
        name: "Best Buy",
        logo: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=100&q=80",
        price: 1579,
        rating: 4.6,
        reviews: 3210,
        link: "https://bestbuy.com"
      }
    ]
  },
  "Samsung Galaxy S24": {
    name: "Samsung Galaxy S24",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80",
    description: "The Galaxy S24 brings AI-powered features, exceptional camera capabilities, and stunning display quality in a premium design.",
    features: [
      "Dynamic AMOLED 2X display, 120Hz",
      "50MP main camera with AI enhancements",
      "Snapdragon 8 Gen 3 processor",
      "All-day intelligent battery",
      "Galaxy AI features",
      "IP68 water and dust resistance"
    ],
    stores: [
      {
        name: "Samsung",
        logo: "https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=100&q=80",
        price: 799,
        rating: 4.6,
        reviews: 11234,
        link: "https://samsung.com"
      },
      {
        name: "Amazon",
        logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&q=80",
        price: 749,
        rating: 4.5,
        reviews: 14567,
        link: "https://amazon.com"
      },
      {
        name: "Best Buy",
        logo: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=100&q=80",
        price: 779,
        rating: 4.4,
        reviews: 6789,
        link: "https://bestbuy.com"
      },
      {
        name: "Walmart",
        logo: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?w=100&q=80",
        price: 769,
        rating: 4.3,
        reviews: 4321,
        link: "https://walmart.com"
      }
    ]
  }
};

export type ProductName = keyof typeof productsDatabase;
