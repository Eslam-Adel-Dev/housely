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
import AC from "@/assets/icons/Ac.svg";
import Info from "@/assets/icons/profileScreen/Info.svg";
import Notification from "@/assets/icons/profileScreen/Notification.svg";
import Setting from "@/assets/icons/profileScreen/Setting.svg";
import Time from "@/assets/icons/profileScreen/Time.svg";
import Wallet from "@/assets/icons/profileScreen/Wallet.svg";
import Bath from "@/assets/icons/searchScreen/bath.svg";
import Bed from "@/assets/icons/searchScreen/bed.svg";
import WIFI from "@/assets/icons/Wifi.svg";
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

export const SearchFiltersData = [
  {
    id: 1,
    filterName: "Bet Room",
    image: Bed,
  },
  {
    id: 2,
    filterName: "Bathub",
    image: Bath,
  },
  {
    id: 3,
    filterName: "AC",
    image: AC,
  },
  {
    id: 4,
    filterName: "WIFI",
    image: WIFI,
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
  ahmedNaguib: {
    _id: 2,
    name: "Ahmed Naguib",
    lastMessage: "The apartment is available for viewing anytime!",
    messageTime: new Date("2026-02-07T05:28:00Z"),
    image: "https://www.loremfaces.net/128/id/2.jpg",
  },
  saraElMansy: {
    _id: 3,
    name: "Sara El-Mansy",
    lastMessage: "I'll send you the contract details shortly.",
    messageTime: new Date("2026-02-06T18:45:00Z"),
    image: "https://www.loremfaces.net/128/id/3.jpg",
  },
  omarHassan: {
    _id: 5,
    name: "Omar Hassan",
    lastMessage: "The studio is move-in ready!",
    messageTime: new Date("2026-02-07T04:15:00Z"),
    image: "https://www.loremfaces.net/128/id/6.jpg",
  },
  me: {
    _id: 1,
    name: "You",
    lastMessage: "Got it, will do.",
    messageTime: new Date("2026-02-07T05:20:00Z"),
    image: "https://i.pravatar.cc/150?img=1",
  },
  fatimaYoussef: {
    _id: 4,
    name: "Fatima Youssef",
    lastMessage: "Great family-friendly area, come check it out!",
    messageTime: new Date("2026-02-07T03:30:00Z"),
    image: "https://www.loremfaces.net/128/id/5.jpg",
  },
  karimFathy: {
    _id: 6,
    name: "Karim Fathy",
    lastMessage: "The townhouse has a beautiful private garden.",
    messageTime: new Date("2026-02-07T02:00:00Z"),
    image: "https://www.loremfaces.net/128/id/7.jpg",
  },
};
//=========================================================

export const conversations = {
  [users.ahmedNaguib._id]: [
    {
      _id: "g-1",
      text: "Is the Zamalek apartment still available?",
      createdAt: new Date(Date.now() - 1000 * 60 * 2),
      user: users.me,
    },
    {
      _id: "g-2",
      text: "Yes, it is! Would you like to schedule a viewing?",
      createdAt: new Date(Date.now() - 1000 * 60 * 5),
      user: users.ahmedNaguib,
    },
    {
      _id: "g-3",
      text: "That would be great, when are you free?",
      createdAt: new Date(Date.now() - 1000 * 60 * 10),
      user: users.me,
    },
    {
      _id: "g-4",
      text: "Got it, I’ll fix that now.",
      createdAt: new Date(Date.now() - 1000 * 60 * 15),
      user: users.ahmedNaguib,
    },
  ],

  [users.saraElMansy._id]: [
    {
      _id: "a-1",
      text: "Hi Sara, I'm interested in the New Cairo villa.",
      createdAt: new Date(Date.now() - 1000 * 60 * 30),
      user: users.me,
    },
    {
      _id: "a-2",
      text: "Great choice! It has a pool and lovely garden.",
      createdAt: new Date(Date.now() - 1000 * 60 * 32),
      user: users.saraElMansy,
    },
    {
      _id: "a-3",
      text: "I’ll send them shortly.",
      createdAt: new Date(Date.now() - 1000 * 60 * 35),
      user: users.me,
    },
    {
      _id: "a-4",
      text: "Minimum 1 year. I'll send you the contract details shortly.",
      createdAt: new Date(Date.now() - 1000 * 60 * 37),
      user: users.saraElMansy,
    },
    {
      _id: "a-5",
      text: "Let’s aim to ship by Friday.",
      createdAt: new Date(Date.now() - 1000 * 60 * 40),
      user: users.me,
    },
  ],

  [users.fatimaYoussef._id]: [
    {
      _id: "s-1",
      text: "Hello! Is the Dokki apartment pet-friendly?",
      createdAt: new Date(Date.now() - 1000 * 60 * 60),
      user: users.me,
    },
    {
      _id: "s-2",
      text: "Yes it is! Great family-friendly area, come check it out!",
      createdAt: new Date(Date.now() - 1000 * 60 * 62),
      user: users.fatimaYoussef,
    },
    {
      _id: "s-3",
      text: "Wonderful, I'll come by this weekend.",
      createdAt: new Date(Date.now() - 1000 * 60 * 63),
      user: users.me,
    },
    {
      _id: "s-4",
      text: "Saturday at 11am works for me!",
      createdAt: new Date(Date.now() - 1000 * 60 * 65),
      user: users.fatimaYoussef,
    },
    {
      _id: "s-5",
      text: "Thanks! We’re investigating this issue now.",
      createdAt: new Date(Date.now() - 1000 * 60 * 67),
      user: users.me,
    },
  ],
  [users.omarHassan._id]: [
    {
      _id: "s-1",
      text: "Hi Omar, is the Maadi studio furnished?",
      createdAt: new Date(Date.now() - 1000 * 60 * 60),
      user: users.me,
    },
    {
      _id: "s-2",
      text: "Yes, fully furnished! The studio is move-in ready!",
      createdAt: new Date(Date.now() - 1000 * 60 * 62),
      user: users.omarHassan,
    },
    {
      _id: "s-3",
      text: "That's exactly what I need. What's included?",
      createdAt: new Date(Date.now() - 1000 * 60 * 63),
      user: users.me,
    },
    {
      _id: "s-4",
      text: "Kitchen appliances, AC, and a full bed set.",
      createdAt: new Date(Date.now() - 1000 * 60 * 65),
      user: users.omarHassan,
    },
    {
      _id: "s-5",
      text: "Thanks! We’re investigating this issue now.",
      createdAt: new Date(Date.now() - 1000 * 60 * 67),
      user: users.me,
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
      id: 2,
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
      id: 3,
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
      id: 5,
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
      id: 4,
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
      id: 6,
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

//==============================================
export const notifications = [
  {
    id: 3,
    text: "Please complete your profile",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    type: "system",
  },
  {
    id: 4,
    text: "Start your day with a quote",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    type: "personal",
  },
  {
    id: 5,
    text: "New property listed",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
    type: "property",
  },
  {
    id: 8,
    text: "New message from Omar",
    createdAt: new Date(Date.now() - 1000 * 60 * 10),
    type: "message",
  },

  {
    id: 14,
    text: "New notification from the system",
    createdAt: new Date(Date.now() - 1000 * 60 * 22),
    type: "system",
  },
  {
    id: 15,
    text: "New property listed",
    createdAt: new Date(Date.now() - 1000 * 60 * 24),
    type: "property",
  },
];
