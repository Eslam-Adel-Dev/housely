// react imports
import { Alert, Share } from "react-native";
// expo imports
import * as Linking from "expo-linking";

//===============================================

// phone dialing hook
export const usePhoneLinking = (number: string) => {
  const uri = `tel:${number}`;
  const handleLinking = async () => {
    try {
      const canOpen = await Linking.canOpenURL(uri);

      if (!canOpen) {
        Alert.alert("Cannot open this URL");
        return;
      }
      await Linking.openURL(uri);
    } catch (error) {
      console.log(error);
      Alert.alert("Cannot open this URL");
    }
  };
  return { handleLinking };
};

//===============================================

// share property link hook
export const useSharePropertyLink = (id: string) => {
  const handleShare = async () => {
    try {
      const link = Linking.createURL(`property/${id}`);
      await Share.share({
        message: `Check out this property: ${"www.google.com"}`,
        url: link,
        title: "Property link",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { handleShare };
};

//===============================================
