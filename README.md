# Housely

![License](https://img.shields.io/github/license/Eslam-Adel-Dev/housely)
![Expo](https://img.shields.io/badge/Expo-SDK%2054-000020?logo=expo)
![React Native](https://img.shields.io/badge/React%20Native-0.81-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)

A cross-platform real estate rental app built with Expo, React Native, and TypeScript. Housely gives users a polished mobile flow for discovering properties, exploring homes on a map, viewing rich property details, saving favorites, chatting with agents, and managing rental bookings.

## 📱 Showcase

![Housely app demo](assets/screenshots/Housely.gif)

## ✨ Features

- 🚀 Built with Expo SDK 54, React Native 0.81, and React 19
- 📱 Native iOS and Android support with Expo Router file-based navigation
- 🏠 Recommended, popular, and nearby property discovery feeds
- 🗺️ Map-based property exploration via MapLibre
- 📍 Location-aware nearby listings and user location handling
- 🔎 Search and filter UI for property browsing
- ❤️ Favorite properties with optimistic updates
- 🏡 Property details with galleries, specs, reviews, map location, sharing, and agent actions
- 💬 Real-time chat flow powered by Socket.IO and Gifted Chat
- 🖼️ Image and video message support with media picker and previews
- 📆 Rental booking flow with calendar date ranges and rent calculations
- 💳 Credit/debit card UI for payment details
- 👤 Profile screen with profile image upload and settings
- 🔐 Authentication flows for login, registration, verification, forgot password, and password reset
- 🧩 Modular components, hooks, API clients, contexts, and shared utilities
- 🛜 Network monitoring, skeleton loaders, error states, and empty states

## 🗂️ Project Structure

Housely is structured for scalability and developer friendliness. Here is an up-to-date view of the main folders and their purpose:

```text
housely/
├── app/                                  # Expo Router screens and route groups
│   ├── _layout.tsx                       # Root providers, app shell, toast, network monitor
│   ├── onboarding.tsx                    # Onboarding flow
│   ├── (authScreens)/                    # Authentication routes
│   │   ├── _layout.tsx
│   │   ├── login.tsx
│   │   ├── register.tsx
│   │   ├── verify-account.tsx
│   │   ├── forgot-password.tsx
│   │   ├── reset-password.tsx
│   │   └── success-screen.tsx
│   └── (AppScreens)/                     # Authenticated app routes
│       ├── _layout.tsx                   # Protected app stack
│       ├── search.tsx                    # Search screen
│       ├── notifications.tsx             # Notifications screen
│       ├── (tabs)/                       # Main bottom-tab navigation
│       │   ├── _layout.tsx
│       │   ├── index.tsx                 # Home
│       │   ├── explore.tsx               # Map explore
│       │   ├── favorite.tsx              # Saved properties
│       │   ├── booking.tsx               # User bookings
│       │   └── profile.tsx               # User profile
│       ├── chat/
│       │   ├── index.tsx                 # Conversations list
│       │   └── [chatId].tsx              # Chat messages
│       ├── profile/
│       │   └── settings.tsx              # Profile settings
│       └── property/
│           ├── [id].tsx                  # Property details
│           └── rent/
│               └── [id].tsx              # Rent/booking flow
├── api/                                  # API layer and server-state hooks
│   ├── axios/                            # Axios instance and request helpers
│   ├── config/                           # API endpoints and React Query keys
│   └── hooks/                            # Auth, chat, property, user, and socket hooks
├── assets/                               # Static assets and app branding
│   ├── icons/                            # App, tab bar, feature, and SVG icons
│   ├── images/                           # Onboarding, property, logo, and placeholder images
│   └── screenshots/                      # README/demo media
├── components/                           # Reusable UI and feature components
│   ├── auth/                             # Auth-specific UI
│   ├── bookingScreen/                    # Booking cards and booking UI
│   ├── bottomSheets/                     # Shared bottom-sheet components
│   ├── chatScreens/                      # Chat bubbles, composer, header, previews
│   ├── empty/                            # Empty-state components
│   ├── error/                            # Error-state components
│   ├── explore/                          # Map explore components
│   ├── homeScreen/                       # Home feed cards, header, ad section
│   ├── inputs/                           # Custom input and phone input components
│   ├── layout/                           # Shared layout elements
│   ├── notificationsScreen/              # Notification cards
│   ├── propertyDetails/                  # Property detail sections
│   ├── propertyScreen/                   # Property screen subcomponents
│   ├── skeletons/                        # Loading skeletons
│   ├── tabBar/                           # Tab bar icon component
│   └── ui/                               # Base UI primitives
├── context/                              # React context providers
│   ├── imageContext.tsx
│   ├── socketContext.tsx
│   └── userContext.tsx
├── data/                                 # Local demo data and country data
├── hooks/                                # Shared and feature-specific hooks
│   ├── auth/                             # Authentication session hooks
│   ├── chat/                             # Chat session, socket, and message hooks
│   ├── explore/                          # Explore map, location, and UI hooks
│   ├── home/                             # Home screen session hook
│   ├── profile/                          # Profile image upload hook
│   └── useMmkvStorage/                   # MMKV-backed persistence hooks
├── lib/                                  # Utilities, storage, and validation schemas
│   └── yupSchemas/                       # Form validation schemas
├── store/                                # Zustand stores
├── types/                                # Shared TypeScript declarations
├── android/                              # Generated native Android project
├── ios/                                  # Generated native iOS project
├── app.json                              # Expo app configuration
├── babel.config.js                       # Babel configuration
├── eas.json                              # EAS build profiles
├── eslint.config.js                      # ESLint configuration
├── global.css                            # NativeWind global styles
├── metro.config.js                       # Metro bundler configuration
├── package.json                          # Dependencies and scripts
├── tailwind.config.js                    # NativeWind/Tailwind configuration
├── tsconfig.json                         # TypeScript configuration
└── README.md                             # Project documentation
```

<details>
<summary>📦 <strong>Folder Purpose & Professional Notes</strong></summary>

- **app/**: Root of navigation and screens using Expo Router. Parentheses such as `(AppScreens)` and `(authScreens)` are route groups that organize flows without changing the URL path.
- **api/**: Keeps server communication separate from UI. Axios handles requests, config files define endpoints/query keys, and hooks expose typed app behaviors.
- **assets/**: Stores icons, images, and the demo GIF used in this README.
- **components/**: Feature and shared UI components. Larger screens stay cleaner by delegating cards, headers, chat pieces, property sections, skeletons, and empty/error states.
- **context/**: App-wide providers for user state, socket access, and image preview state.
- **data/**: Local/demo datasets and fixed data such as countries. Some booking/rent flows currently use local demo data.
- **hooks/**: Reusable app logic for location, media picking, favorites, chat sessions, home/explore orchestration, profile upload, and local persistence.
- **lib/**: Utility helpers, MMKV storage setup, and Yup validation schemas.
- **store/**: Zustand-powered auth/user store.
- **types/**: Central TypeScript declarations for properties, users, bookings, chat previews, and component props.
- **android/** and **ios/**: Native projects used by Expo development builds and native run commands.
</details>

> **✨ Pro Tips:**
> - 🧩 **Use the existing feature boundaries**: Add screen-specific UI under the nearest feature folder in `components/`, and put reusable logic in `hooks/`.
> - 📝 **Use absolute imports**: The project supports imports like `@/components/CustomButton` instead of long relative paths.
> - 🔐 **Keep env files private**: Document required variables, but never commit `.env`, `.env.*`, or secret-bearing files.
> - ⚡ **Prefer query hooks for server state**: Follow the existing TanStack Query hook pattern in `api/hooks/`.

🔗 [View complete source code on GitHub](https://github.com/Eslam-Adel-Dev/housely)

---

## 🛠️ Built With

- Expo and React Native
- TypeScript
- Expo Router
- NativeWind and Tailwind CSS
- TanStack Query
- Axios
- Zustand
- React Native MMKV
- Socket.IO Client
- MapLibre React Native
- React Hook Form and Yup
- Gifted Chat
- Gorhom Bottom Sheet
- Expo Location, Image Picker, Haptics, Linking, Splash Screen, and Web Browser
- EAS Build

## 📋 Prerequisites

- Node.js
- npm
- Expo CLI through `npx expo`
- Android Studio for Android development
- Xcode and CocoaPods for iOS development
- A running Housely backend API

Because this app uses native modules such as MMKV, MapLibre, Reanimated, and React Native Video, use an Expo development build instead of relying only on Expo Go.

## 🔐 Environment Variables

Create a local environment file with the public backend URLs expected by the app:

```bash
EXPO_PUBLIC_BACKEND_URL_DEV=http://localhost:3000
EXPO_PUBLIC_BACKEND_URL=https://your-production-api.example.com
```

The app appends `/api` internally, so each value should point to the backend origin.

## 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Eslam-Adel-Dev/housely.git
   cd housely
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install iOS dependencies if you plan to run iOS locally:

   ```bash
   cd ios
   pod install
   cd ..
   ```

## 🚀 Running the App

Start the Expo development server:

```bash
npm start
```

### iOS

```bash
npm run ios
```

### Android

```bash
npm run android
```

### Web

```bash
npm run web
```

## 📦 Building with EAS

### Development Build

```bash
eas build --profile development
```

### Preview Build

```bash
eas build --profile preview
```

### Production Build

```bash
eas build --profile production
```

The preview Android profile is configured to output an APK, and the production profile uses auto-incrementing app versions.

## 🧪 Linting

```bash
npm run lint
```

## 🌐 API Areas

The app expects backend support for:

- **Auth**: login, register, verify, resend code, logout, forgot password, reset password, and change password.
- **Properties**: recommended, popular, nearby, details, and favorites.
- **User**: location, profile, and profile image upload.
- **Chat**: conversations, messages, and conversation creation.

Axios automatically attaches the stored bearer token from MMKV when a user is signed in.

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Eslam Adel**

- GitHub: [@Eslam-Adel-Dev](https://github.com/Eslam-Adel-Dev)
