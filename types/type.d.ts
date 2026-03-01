// types

export type size = {
  width: number;
  height: number;
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
  classNameLabel?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export interface CustomButtonProps {
  className?: string;
  textClassName?: string;
  onButtonPress?: () => void;
  children: React.ReactNode;
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
  propertyName: string;
  location?: string;
  date?: Date | string | number;
  image: React.ReactNode | ImageSourceProp | string | number;
  rate: number;
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
  user: string;
  comment: string;
  rating: number;
  image?: string;
}

export interface Agent {
  name: string;
  profession: string;
  phone: string;
}

export interface User {
  _id: number;
  name: string;
  lastMessage: string;
  messageTime: Date;
  image: string;
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

export interface Property {
  id: string;
  name: string;
  image?: string;
  images: string[];
  rentPerMonth: number;
  currency: string;
  location: string;
  coords: Coordinates;

  // details
  bedrooms: number;
  bathrooms: number;
  area: string | number;
  yearBuilt: number;
  parking: string;
  status: string;

  description: string;

  agent: Agent;
  reviews: Review[];
}

export type Properties = Property[];

//==============================================
// context types

export interface contextProviderProps {
  children: React.ReactNode;
}
