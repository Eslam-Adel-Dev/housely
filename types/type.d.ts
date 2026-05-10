// imports
import { Dispatch, SetStateAction } from "react";
import { ImageSourcePropType as ImageSourceProp } from "react-native";
import { SvgProps } from "react-native-svg";
import { Socket } from "socket.io-client";

//==============================================

// types
export type BookingStatus =
  | "Waiting Payment"
  | "Cancelled"
  | "Completed"
  | "Checking";

export type size = {
  width: number;
  height: number;
};

export type fullWidthType = {
  fullWidth?: boolean;
};

//==============================================
// interfaces

export interface screenWrapperProps {
  children: React.ReactNode;
  className?: string;
  customStyle?: { width?: number; height?: number };
}

export interface CheckboxWithLabelProps {
  label: string;
  classNameContainer: string;
  classNameLabel?: string;
  classNameCheckBox?: string;
  styleLabel?: object;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export interface CustomButtonProps {
  className?: string;
  textClassName?: string;
  onButtonPress?: () => void;
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
}

export interface SearchProps {
  handleOpenFilterModal: () => void;
}

export interface BottomSheetCompProps {
  snapPoints: string[];
  children: React.ReactNode;
  index?: number;
  onChange?: (index: number) => void;
  onClose?: () => void;
  enablePanDownToClose?: boolean;
  keyboardBehavior?: "extend" | "fillParent" | "interactive";
  keyboardBlurBehavior?: "none" | "restore";
}

export interface tabBarIconProps {
  focused?: boolean;
  color?: string;
  size?: number;
  ActiveIcon: React.ComponentType<any>;
  InActiveIcon: React.ComponentType<any>;
}

export interface AdSectionProps {
  circleClassName?: string;
  containerClassName?: string;
  mainText: string;
  subText: string;
  image?: React.ReactNode | ImageSourceProp | string | number;
}

export interface BookingCardProps {
  id: number;
  propertyName: string;
  location?: string;
  date?: Date | string | number;
  image: ImageSourceProp | string | number;
  rate: number;
  status: BookingStatus;
  fullScreenWidth?: boolean;
}

export interface ChatPreviewProps {
  _id: string | number;
  name: string;
  lastMessage: string;
  messageTime: string | number | Date;
  image: React.ReactNode | ImageSourceProp | string | number;
}

export interface FilterProps {
  filterName: string;
  selectedFilter?: number;
  id?: number;
  image: React.ReactNode | ImageSourceProp | string | number;
  setSelectedFilter?: Dispatch<SetStateAction<number>>;
}

export interface ProfileProps {
  optionName: string;
  Icon: React.ComponentType<any>;
}

export interface TabsProps {
  text: string;
  textClassName?: string;
  triggerClassName?: string;
  value: string;
  tabsValue: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Review {
  _id: string | number;
  user: User;
  property: string;
  comment: string;
  rating: number;
}

export interface Agent {
  name: string;
  profession: string;
  phone: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  location: {
    type: "Point";
    coordinates: [number, number]; // [longitude, latitude]
  };
  profession?: string;
  phone: string;
  image: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface NotificationProps {
  id: number;
  text: string;
  createdAt: Date;
  type: "message" | "system" | "personal";
}

export interface ActionSheetProps {
  visible: boolean;
  onClose: () => void;
  onPickImage: () => void;
  onPickVideo: () => void;
  onPickPdf?: () => void;
}

export interface ImagePreviewProps {
  uri?: string;
  visible: boolean;
  onClose: () => void;
}

export interface CreditCardProps {
  cardData: {
    number: string;
    name: string;
    expiry: string;
    cvv: string;
  };
  setCardData: (data: any) => void;
  isFlipped: boolean;
  setIsFlipped: (flipped: boolean) => void;
}

export interface Property {
  _id: string;
  name: string;
  image?: string;
  images?: string[];
  rentPerMonth: number;
  currency: string;
  address: string;
  location: string;
  coords: Coordinates;

  // details
  bedrooms: number;
  bathrooms: number;
  area: string | number;
  yearBuilt: number;
  parking: string;
  status: string;
  averageRating: number;
  ratingCount: number;
  description: string;

  agent: Agent;
  reviews: Review[];
}

export type Properties = Property[];

export interface PropertyData2 {
  id: number;
  propertyName: string;
  location: string;
  price: number;
  image: any;
  rate: number;
  status: BookingStatus;
}

export interface EmptyStateProps {
  title: string;
  subTitle?: string | React.ReactNode;
  ImageComp: React.FC<SvgProps>;
  imageSize?: number;
}

export interface LocationFullDetailsProps {
  visible: boolean;
  onClose: () => void;
  locationName: string;
}

export interface CalendarCompProps {
  selectedRange: {
    startDate: string;
    endDate: string;
  };
  onSelectRange: (range: { startDate: string; endDate: string }) => void;
}
//==============================================
// context types

export interface contextProviderProps {
  children: React.ReactNode;
}
// context type for global image preview
export interface ImageContextType {
  visible: boolean;
  uri?: string;
  showImage: (uri: string) => void;
  hideImage: () => void;
}

export interface UserContextType {
  isLogged: boolean;
  favorites: Properties;
  login: () => void;
  logout: () => void;
  userLocation: Coordinates | null;
  setUserLocation: Dispatch<SetStateAction<Coordinates | null>>;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  setFavorites: Dispatch<SetStateAction<Properties>>;
}

//==============================================
// forms types

export type loginInput = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type registerInput = {
  email: string;
  name: string;
  phone: string;
  password: string;
  agreeToTerms: boolean;
};

export type verifyAccountInput = {
  otp: string;
};

export type resetPasswordInput = {
  newPassword: string;
  confirmPassword: string;
};

//==============================================
// zustand store types

export interface UserState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  setAuth: (user: User, token: string) => void;
  updateUser: (updates: Partial<User>) => void;
  clearUser: () => void;
}

//==============================================
// socket types

export interface SocketContextType {
  socket: Socket;
  isConnected: boolean;
  setIsConnected: (value: boolean) => void;
}

interface SocketProviderProps {
  children: React.ReactNode;
}
