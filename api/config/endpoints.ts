export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    VERIFY: "/auth/verify",
    VERIFY_RESET: "/auth/verify-reset",
    RESEND_CODE: "/auth/resend-code",
    LOGOUT: "/auth/logout",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
    CHANGE_PASSWORD: "/auth/change-password",
  },
  PROPERTIES: {
    RECOMMENDED: "/properties/recommended",
    POPULAR: "/properties/popular",
    NEARBY: "/properties/nearby",
    PROPERTY: "/properties",
    FAVORITES: "/properties/favorites",
  },
  USER: {
    LOCATION: "/user/location",
    PROFILE: "/user/profile",
    PROFILE_IMAGE: "/user/profile/image",
  },
  MESSAGES: {
    CONVERSATIONS: "chat/conversations",
    MESSAGES: "chat/messages",
    CREATE_CONVERSATION: "chat/conversation",
  },
};
