// icons imports
import Entypo from "@expo/vector-icons/Entypo";
// gifted chat imports
import { Actions, ActionsProps } from "react-native-gifted-chat";

const renderActions = (props: ActionsProps) => {
  return (
    <Actions
      {...props}
      icon={() => <Entypo name="plus" size={30} color="#6941C6" />}
    />
  );
};

export default renderActions;
