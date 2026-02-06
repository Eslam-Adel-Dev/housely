// types imports
import { tabBarIconProps } from "@/types/type";

const TabBarIcon = ({ focused, ActiveIcon, InActiveIcon }: tabBarIconProps) => {
  return <>{focused ? <ActiveIcon /> : <InActiveIcon />}</>;
};

export default TabBarIcon;
