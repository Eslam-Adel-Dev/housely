// react native imports
import { ScrollView, Text, View } from "react-native";
// components imports
import TitleBar from "@/components/layout/TitleBar";
import NotificationCard from "@/components/notificationsScreen/NotificationCard";
import ScreenWrapper from "@/components/ScreenWrapper";
// data imports
import { notifications } from "@/data/data";
// flashlist imports
import { FlashList } from "@shopify/flash-list";
// images imports
import NoNotifications from "@/assets/images/NoNotifications.svg";

//=========================================================

const NotificationsScreen = () => {
  const todaysNotifications = notifications.filter(
    (item) => new Date(item.createdAt).getDate() === new Date().getDate(),
  );

  const yesterdaysNotifications = notifications.filter(
    (item) => new Date(item.createdAt).getDate() === new Date().getDate() - 1,
  );

  const restOfNotifications = notifications.filter(
    (item) =>
      new Date(item.createdAt).getDate() !== new Date().getDate() &&
      new Date(item.createdAt).getDate() !== new Date().getDate() - 1,
  );

  return (
    <ScreenWrapper>
      <TitleBar title="Notification" className="my-2 " />
      <ScrollView>
        {/* no notifications */}
        {notifications && notifications.length === 0 ? (
          <View className="h-[97vh]">
            <View className="flex-1 items-center justify-center ">
              <NoNotifications size={100} />
              <View className="gap-3 mt-10">
                <Text className="font-bold text-2xl text-center">
                  No Notifications
                </Text>
                <Text className="text-md text-zinc-400 text-center px-5">
                  All notification we send will appear here, so you can view
                  them easily anytime.
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View className="gap-10 pb-10 pt-5">
            {/* today's notifications */}
            {todaysNotifications && todaysNotifications.length > 0 && (
              <View className="gap-5">
                <Text className="font-bold text-2xl ">Today</Text>
                <FlashList
                  data={todaysNotifications}
                  renderItem={({ item }) => {
                    const valid =
                      item.type === "message" || "system" || "personal";
                    if (valid) {
                      return <NotificationCard {...item} />;
                    } else {
                      return null;
                    }
                  }}
                  horizontal={false}
                  keyExtractor={(item) => item.id.toString()}
                  ItemSeparatorComponent={() => <View className="h-4" />}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            )}

            {/* yesterday's notifications */}
            {yesterdaysNotifications && yesterdaysNotifications.length > 0 && (
              <View className="gap-5">
                <Text className="font-bold text-2xl">Yesterday</Text>
                <FlashList
                  data={yesterdaysNotifications}
                  renderItem={({ item }) => {
                    const valid =
                      item.type === "message" || "system" || "personal";
                    if (valid) {
                      return <NotificationCard {...item} />;
                    } else {
                      return null;
                    }
                  }}
                  horizontal={false}
                  keyExtractor={(item) => item.id.toString()}
                  ItemSeparatorComponent={() => <View className="h-4" />}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            )}

            {/* Rest of notifications */}
            {restOfNotifications && restOfNotifications.length > 0 && (
              <View className="gap-5">
                <Text className="font-bold text-2xl">
                  Rest of notifications
                </Text>
                <FlashList
                  data={restOfNotifications}
                  renderItem={({ item }) => {
                    const valid =
                      item.type === "message" || "system" || "personal";
                    if (valid) {
                      return <NotificationCard {...item} />;
                    } else {
                      return null;
                    }
                  }}
                  horizontal={false}
                  keyExtractor={(item) => item.id.toString()}
                  ItemSeparatorComponent={() => <View className="h-4" />}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default NotificationsScreen;
