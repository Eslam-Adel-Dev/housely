// react imports
import React, { useState } from "react";
import { View } from "react-native";
// react native video
import Video from "react-native-video";

//=====================================================

const VideoBubble = React.memo(
  (props: any) => {
    const [videoFullScreenState, setVideoFullScreenState] = useState(false);
    const videoURL = props.currentMessage?.video;

    // rerender test
    console.warn("Video Bubble Rendered");

    return (
      <View className="h-[220px] w-[320px] rounded-xl overflow-hidden mb-2">
        <Video
          source={{ uri: videoURL }}
          style={{ width: 320, height: 220, borderRadius: 10 }}
          controls
          resizeMode={videoFullScreenState ? "none" : "stretch"}
          onFullscreenPlayerDidPresent={() => setVideoFullScreenState(true)}
          onFullscreenPlayerDidDismiss={() => setVideoFullScreenState(false)}
        />
      </View>
    );
  },
  (prevProps, nextProps) =>
    prevProps.currentMessage.video === nextProps.currentMessage.video,
);

VideoBubble.displayName = "VideoBubble";

export default VideoBubble;
