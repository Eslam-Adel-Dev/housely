// react imports
import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
// react native video
import Video from "react-native-video";

//=====================================================

const VideoBubble = React.memo(
  (props: any) => {
    const [videoFullScreenState, setVideoFullScreenState] = useState(false);
    const videoURL = props.currentMessage?.video;
    const status = props.currentMessage?.status;

    // rerender test
    console.warn("Video Bubble Rendered");

    const isLoading = status === "uploading" || status === "pending";

    return (
      <View className="h-[220px] w-[320px] rounded-xl overflow-hidden mb-2">
        <Video
          source={{ uri: videoURL }}
          style={{
            width: 320,
            height: 220,
            borderRadius: 10,
            opacity: isLoading ? 0.5 : 1,
          }}
          controls={!isLoading}
          resizeMode={videoFullScreenState ? "none" : "stretch"}
          onFullscreenPlayerDidPresent={() => setVideoFullScreenState(true)}
          onFullscreenPlayerDidDismiss={() => setVideoFullScreenState(false)}
        />
        {isLoading && (
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.2)",
            }}
          >
            <ActivityIndicator size="large" color="#ffffff" />
          </View>
        )}
      </View>
    );
  },
  (prevProps, nextProps) =>
    prevProps.currentMessage.video === nextProps.currentMessage.video &&
    prevProps.currentMessage.status === nextProps.currentMessage.status,
);

VideoBubble.displayName = "VideoBubble";

export default VideoBubble;
