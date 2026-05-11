import {
  RefreshControl,
  ScrollView,
  View,
} from "react-native";
// components imports
import CustomButton from "@/components/CustomButton";
import ErrorState from "@/components/error/ErrorState";
import ScreenWrapper from "@/components/ScreenWrapper";
import PropertyDetailsSkeleton from "@/components/skeletons/PropertyDetailsSkeleton";

// property details sub-components
import PropertyHeader from "@/components/propertyDetails/PropertyHeader";
import PropertyImages from "@/components/propertyDetails/PropertyImages";
import PropertyMainInfo from "@/components/propertyDetails/PropertyMainInfo";
import PropertySpecs from "@/components/propertyDetails/PropertySpecs";
import PropertyDescription from "@/components/propertyDetails/PropertyDescription";
import PropertyAgent from "@/components/propertyDetails/PropertyAgent";
import PropertyMap from "@/components/propertyDetails/PropertyMap";
import PropertyReviews from "@/components/propertyDetails/PropertyReviews";

// expo imports
import { useLocalSearchParams, useRouter } from "expo-router";
// hooks imports
import { usePropertyDetails } from "@/api/hooks/useProperties";
import { usePhoneLinking, useSharePropertyLink } from "@/hooks/useDeepLinking";
import { useFavoriteProperties } from "@/hooks/useFavoriteProperties";
import { useHandleChat } from "@/hooks/useHandleChat";
import { Property } from "@/types/type";

//===========================================================

const PropertyComp = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const {
    propertyDetails,
    isPropertyDetailsPending,
    isPropertyDetailsError,
    refetchPropertyDetails,
  } = usePropertyDetails(id);

  const router = useRouter();

  // custom hooks
  const { handleShare } = useSharePropertyLink(id);
  const { handleLinking } = usePhoneLinking(propertyDetails?.agent.phone);
  const { toggleLike, favorites } = useFavoriteProperties();
  const { handleChat } = useHandleChat();

  // check if property is liked
  const isLiked = favorites?.some((prop: Property) => prop._id === id);

  const handleRentNow = () => {
    router.push(`/property/rent/${id}`);
  };

  // render error page
  if (isPropertyDetailsError)
    return (
      <ErrorState
        title="Failed to Load Property"
        message="We couldn't retrieve the details for this property. Please check your network and try again."
        onRetry={refetchPropertyDetails}
      />
    );
    
  // render skeleton
  if (isPropertyDetailsPending) return <PropertyDetailsSkeleton />;

  // main return
  return (
    <ScreenWrapper className="relative">
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isPropertyDetailsPending}
            onRefresh={refetchPropertyDetails}
          />
        }
      >
        <View className="gap-7 mb-5">
          <PropertyHeader
            onShare={handleShare}
            onToggleLike={() => toggleLike(propertyDetails, isLiked ? "remove" : "add")}
            isLiked={!!isLiked}
          />

          <PropertyImages images={propertyDetails?.images} />

          <PropertyMainInfo
            name={propertyDetails?.name}
            price={propertyDetails?.rentPerMonth}
            address={propertyDetails?.address}
          />

          <PropertySpecs
            bedrooms={propertyDetails?.bedrooms}
            bathrooms={propertyDetails?.bathrooms}
            area={propertyDetails?.area}
            yearBuilt={propertyDetails?.yearBuilt}
            parking={propertyDetails?.parking}
            status={propertyDetails?.status}
          />

          <PropertyDescription description={propertyDetails?.description} />

          <PropertyAgent
            agent={propertyDetails?.agent}
            onCall={handleLinking}
            onChat={() => handleChat(propertyDetails?.agent?._id)}
          />

          <PropertyMap location={propertyDetails?.location} />

          <PropertyReviews reviews={propertyDetails?.reviews} />
        </View>
      </ScrollView>

      <CustomButton
        textClassName="text-white"
        className="z-10 w-full rounded-xl"
        onButtonPress={handleRentNow}
      >
        Rent Now
      </CustomButton>
    </ScreenWrapper>
  );
};

export default PropertyComp;

