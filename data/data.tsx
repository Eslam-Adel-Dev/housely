// images imports
import building1 from "@/assets/images/building1.jpg";
import building2 from "@/assets/images/building2.jpg";
import building3 from "@/assets/images/building3.jpg";
import building4 from "@/assets/images/building4.jpg";
import building5 from "@/assets/images/building5.jpg";
import onboardingImage from "@/assets/images/onboardingImg1.png";
import onboardingImage2 from "@/assets/images/onboardingImg2.png";
import onboardingImage3 from "@/assets/images/onboardingImg3.png";
// icons imports
import Info from "@/assets/icons/profileScreen/Info.svg";
import Notification from "@/assets/icons/profileScreen/Notification.svg";
import Setting from "@/assets/icons/profileScreen/Setting.svg";
import Time from "@/assets/icons/profileScreen/Time.svg";
import Wallet from "@/assets/icons/profileScreen/Wallet.svg";
//=========================================================

export const onboardingData = [
  {
    id: 1,
    title: "Find the perfect place for your future house",
    description:
      "find the best place for your dream house with your family and loved ones",
    image: onboardingImage,
  },
  {
    id: 2,
    title: "Fast sell your property in just one click",
    description:
      "Simplify the property sales process with just your smartphone",
    image: onboardingImage2,
  },
  {
    id: 3,
    title: "find your dream home with us",
    description:
      "Just search and select your favorite property you want to locate",
    image: onboardingImage3,
  },
];

//=========================================================

export const propertyData = [
  {
    id: 1,
    propertyName: "Ayana Homestay",
    location: "Imogiri, Yogyakarta",
    price: 310,
    image: building1,
  },
  {
    id: 2,
    propertyName: "Ayana Homestay",
    location: "Imogiri, Yogyakarta",
    price: 310,
    image: building2,
  },
  {
    id: 3,
    propertyName: "Ayana Homestay",
    location: "Imogiri, Yogyakarta",
    price: 310,
    image: building3,
  },
  {
    id: 4,
    propertyName: "Ayana Homestay",
    location: "Imogiri, Yogyakarta",
    price: 310,
    image: building4,
  },
  {
    id: 5,
    propertyName: "Ayana Homestay",
    location: "Imogiri, Yogyakarta",
    price: 310,
    image: building5,
  },
];

//=========================================================

export const propertyData2 = [
  {
    id: 1,
    propertyName: "Ayana Homestay",
    location: "Imogiri, Yogyakarta",
    price: 310,
    image: building1,
    rate: 5,
  },
  {
    id: 2,
    propertyName: "Ayana Homestay",
    location: "Imogiri, Yogyakarta",
    price: 310,
    image: building2,
    rate: 4.3,
  },
  {
    id: 3,
    propertyName: "Ayana Homestay",
    location: "Imogiri, Yogyakarta",
    price: 310,
    image: building3,
    rate: 5,
  },
  {
    id: 4,
    propertyName: "Ayana Homestay",
    location: "Imogiri, Yogyakarta",
    price: 310,
    image: building4,
    rate: 2.5,
  },
  {
    id: 5,
    propertyName: "Ayana Homestay",
    location: "Imogiri, Yogyakarta",
    price: 310,
    image: building5,
    rate: 4.4,
  },
];

//=========================================================

export const filtersData = [
  {
    id: 1,
    filterName: "Cairo",
    image: building1,
  },
  {
    id: 2,
    filterName: "Bali",
    image: building2,
  },
  {
    id: 3,
    filterName: "Tokyo",
    image: building3,
  },
  {
    id: 4,
    filterName: "New York",
    image: building4,
  },
  {
    id: 5,
    filterName: "London",
    image: building5,
  },
];

//=========================================================

export const ProfileScreenOptions = [
  {
    id: 1,
    optionName: "Settings",
    Icon: Setting,
  },
  {
    id: 2,
    optionName: "Payment",
    Icon: Wallet,
  },
  {
    id: 3,
    optionName: "Notifications",
    Icon: Notification,
  },
  {
    id: 4,
    optionName: "Recent Viewed",
    Icon: Time,
  },
  {
    id: 5,
    optionName: "About",
    Icon: Info,
  },
];

//=========================================================

export const users = {
  alice: {
    _id: 2,
    name: "Alice",
    lastMessage: "Hey, how are you?",
    messageTime: new Date("2026-02-07T05:28:00Z"),
    image: "https://i.pravatar.cc/150?img=2",
  },
  bob: {
    _id: 3,
    name: "Bob",
    lastMessage: "See you tomorrow!",
    messageTime: new Date("2026-02-06T18:45:00Z"),
    image: "https://i.pravatar.cc/150?img=3",
  },
  eslam: {
    _id: 5,
    name: "Eslam",
    lastMessage: "Thanks for the help!",
    messageTime: new Date("2026-02-07T04:15:00Z"),
    image: "https://i.pravatar.cc/150?img=6",
  },
  me: {
    _id: 1,
    name: "You",
    lastMessage: "Got it, will do.",
    messageTime: new Date("2026-02-07T05:20:00Z"),
    image: "https://i.pravatar.cc/150?img=1",
  },
  support: {
    _id: 4,
    name: "Support Bot",
    lastMessage: "How can we assist you?",
    messageTime: new Date("2026-02-07T03:30:00Z"),
    image: "https://i.pravatar.cc/150?img=5",
  },
};
//=========================================================

export const conversations = {
  [users.alice._id]: [
    {
      _id: "g-1",
      text: "Hey! Did you push the latest changes?",
      createdAt: new Date(Date.now() - 1000 * 60 * 2),
      user: users.alice,
    },
    {
      _id: "g-2",
      text: "Yep, just did. Please review 🙏",
      createdAt: new Date(Date.now() - 1000 * 60 * 5),
      user: users.me,
    },
    {
      _id: "g-3",
      text: "Looks good so far. One small comment on the auth flow.",
      createdAt: new Date(Date.now() - 1000 * 60 * 10),
      user: users.alice,
    },
    {
      _id: "g-4",
      text: "Got it, I’ll fix that now.",
      createdAt: new Date(Date.now() - 1000 * 60 * 15),
      user: users.me,
    },
  ],

  [users.bob._id]: [
    {
      _id: "a-1",
      text: "Daily sync: blockers?",
      createdAt: new Date(Date.now() - 1000 * 60 * 30),
      user: users.bob,
    },
    {
      _id: "a-2",
      text: "Only waiting on API creds.",
      createdAt: new Date(Date.now() - 1000 * 60 * 32),
      user: users.me,
    },
    {
      _id: "a-3",
      text: "I’ll send them shortly.",
      createdAt: new Date(Date.now() - 1000 * 60 * 35),
      user: users.bob,
    },
    {
      _id: "a-4",
      text: "Perfect 👍",
      createdAt: new Date(Date.now() - 1000 * 60 * 37),
      user: users.me,
    },
    {
      _id: "a-5",
      text: "Let’s aim to ship by Friday.",
      createdAt: new Date(Date.now() - 1000 * 60 * 40),
      user: users.bob,
    },
  ],

  [users.support._id]: [
    {
      _id: "s-1",
      text: "Welcome to support! How can I help you today?",
      createdAt: new Date(Date.now() - 1000 * 60 * 60),
      user: users.support,
    },
    {
      _id: "s-2",
      text: "My app crashes when I open the profile screen.",
      createdAt: new Date(Date.now() - 1000 * 60 * 62),
      user: users.me,
    },
    {
      _id: "s-3",
      text: "Sorry about that! What device are you using?",
      createdAt: new Date(Date.now() - 1000 * 60 * 63),
      user: users.support,
    },
    {
      _id: "s-4",
      text: "iPhone 14, iOS 17.",
      createdAt: new Date(Date.now() - 1000 * 60 * 65),
      user: users.me,
    },
    {
      _id: "s-5",
      text: "Thanks! We’re investigating this issue now.",
      createdAt: new Date(Date.now() - 1000 * 60 * 67),
      user: users.support,
    },
  ],
  [users.eslam._id]: [
    {
      _id: "s-1",
      text: "Welcome to support! How can I help you today?",
      createdAt: new Date(Date.now() - 1000 * 60 * 60),
      user: users.support,
    },
    {
      _id: "s-2",
      text: "My app crashes when I open the profile screen.",
      createdAt: new Date(Date.now() - 1000 * 60 * 62),
      user: users.me,
    },
    {
      _id: "s-3",
      text: "Sorry about that! What device are you using?",
      createdAt: new Date(Date.now() - 1000 * 60 * 63),
      user: users.support,
    },
    {
      _id: "s-4",
      text: "iPhone 14, iOS 17.",
      createdAt: new Date(Date.now() - 1000 * 60 * 65),
      user: users.me,
    },
    {
      _id: "s-5",
      text: "Thanks! We’re investigating this issue now.",
      createdAt: new Date(Date.now() - 1000 * 60 * 67),
      user: users.support,
    },
  ],
};

//=========================================================

export const properties = [
  {
    id: "prop1",
    name: "Luxury Apartment in Zamalek",
    images: [
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
      "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?w=900",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=900",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900",
    ],
    rentPerMonth: 380,
    currency: "USD",
    location: "Zamalek, Cairo, Egypt",
    coords: { latitude: 30.0646, longitude: 31.2125 },
    bedrooms: 3,
    bathrooms: 2,
    area: "180 m²",
    yearBuilt: 2018,
    parking: "1 outdoor",
    status: "For Rent",
    description:
      "A spacious and modern apartment in the prestigious Zamalek district with Nile views and an elegant interior.",
    agent: {
      name: "Ahmed Naguib",
      profession: "Senior Real Estate Agent",
      phone: "+20 100 234 5678",
    },
    reviews: [
      {
        id: 1,
        image: "https://www.loremfaces.net/128/id/2.jpg",
        user: "Sami H.",
        comment:
          "Amazing location and beautiful design! Amazing location and beautiful design! Amazing location and beautiful design! Amazing location and beautiful design!",
        rating: 4.5,
      },
      {
        id: 2,
        image: "https://www.loremfaces.net/128/id/3.jpg",
        user: "Laila M.",
        comment: "Spacious and well-maintained apartment.",
        rating: 2.8,
      },
    ],
  },

  {
    id: "prop2",
    name: "Modern Villa in New Cairo",
    images: [
      "https://images.pexels.com/photos/259602/pexels-photo-259602.jpeg",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg",
      "https://images.pexels.com/photos/259602/pexels-photo-259602.jpeg",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    ],
    rentPerMonth: 560,
    currency: "USD",
    location: "Fifth Settlement, New Cairo",
    coords: { latitude: 30.0157, longitude: 31.5049 },
    bedrooms: 5,
    bathrooms: 4,
    area: "350 m²",
    yearBuilt: 2022,
    parking: "2 indoor",
    status: "For Rent",
    description:
      "Luxurious modern villa with a large garden, pool and panoramic views of New Cairo’s skyline.",
    agent: {
      name: "Sara El-Mansy",
      profession: "Top Listing Specialist",
      phone: "+20 122 345 6789",
    },
    reviews: [
      {
        id: 1,
        user: "Mark T.",
        comment: "Stunning property and very helpful agent!",
        rating: 5.0,
      },
      {
        id: 2,
        user: "Nour E.",
        comment: "Perfect for families, great space.",
        rating: 4.7,
      },
    ],
  },

  {
    id: "prop3",
    name: "Cozy Studio in Maadi",
    images: [
      "https://images.pexels.com/photos/259591/pexels-photo-259591.jpeg",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      "https://images.pexels.com/photos/271627/pexels-photo-271627.jpeg",
      "https://images.pexels.com/photos/259591/pexels-photo-259591.jpeg",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    ],
    rentPerMonth: 140,
    currency: "USD",
    location: "Maadi, Cairo",
    coords: { latitude: 29.9623, longitude: 31.2766 },
    bedrooms: 1,
    bathrooms: 1,
    area: "65 m²",
    yearBuilt: 2015,
    parking: "1 outdoor",
    status: "Already Rented",
    description:
      "A cozy, fully furnished studio in the leafy Maadi district — perfect for professionals or couples.",
    agent: {
      name: "Omar Hassan",
      profession: "Local Property Expert",
      phone: "+20 111 987 6543",
    },
    reviews: [
      {
        id: 1,
        user: "Maya S.",
        comment: "Great neighborhood and quick response from agent!",
        rating: 4.4,
      },
    ],
  },

  {
    id: "prop4",
    name: "Family Apartment in Dokki",
    images: [
      "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg",
      "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg",
      "https://images.pexels.com/photos/271645/pexels-photo-271645.jpeg",
      "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg",
      "https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg",
    ],
    rentPerMonth: 250,
    currency: "USD",
    location: "Dokki, Giza (Cairo Area)",
    coords: { latitude: 30.0603, longitude: 31.213 },
    bedrooms: 3,
    bathrooms: 2,
    area: "145 m²",
    yearBuilt: 2012,
    parking: "1 outdoor",
    status: "For Rent",
    description:
      "Spacious 3-BR apartment near metro, cafes, and shopping areas — ideal for families.",
    agent: {
      name: "Fatima Youssef",
      profession: "Residential Specialist",
      phone: "+20 122 998 7766",
    },
    reviews: [
      {
        id: 1,
        user: "Hassan A.",
        comment: "Convenient location and child-friendly environment.",
        rating: 4.3,
      },
      {
        id: 2,
        user: "Rania K.",
        comment: "Affordable rent for the space!",
        rating: 4.1,
      },
    ],
  },

  {
    id: "prop5",
    name: "Elegant Townhouse in New Heliopolis",
    images: [
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
      "https://images.pexels.com/photos/271628/pexels-photo-271628.jpeg",
      "https://images.pexels.com/photos/259594/pexels-photo-259594.jpeg",
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
      "https://images.pexels.com/photos/271628/pexels-photo-271628.jpeg",
    ],
    rentPerMonth: 320,
    currency: "USD",
    location: "New Heliopolis, Cairo",
    coords: { latitude: 30.1153, longitude: 31.383 },
    bedrooms: 4,
    bathrooms: 3,
    area: "220 m²",
    yearBuilt: 2019,
    parking: "2 indoor",
    status: "For Rent",
    description:
      "Elegant and modern townhouse with a large living area and private garden — perfect for a moving-in ready home.",
    agent: {
      name: "Karim Fathy",
      profession: "Property Consultant",
      phone: "+20 100 543 2198",
    },
    reviews: [
      {
        id: 1,
        user: "Sara B.",
        comment: "Excellent design with lots of natural light!",
        rating: 4.9,
      },
      {
        id: 2,
        user: "Ali Z.",
        comment: "Excellent value for money.",
        rating: 4.6,
      },
    ],
  },
];
