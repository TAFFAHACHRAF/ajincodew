import React from "react";
import { AudioPlatform } from "../../types/shared/whereToListen.types";
import { selectSharedStateField } from "../../store/shared/selectors";
import { useSelector } from "react-redux";
import { VideoItemPageProps } from "../../types/video/components.types";
import VideoItemPageComponent from "../../components/video/VideoItemPageComponent";

export default function VideoItemPageContainer({
  videoItem,
}: VideoItemPageProps): JSX.Element {
  const audioPlatforms = useSelector(
    selectSharedStateField("audioPlatforms")
  ) as AudioPlatform[];

  return (
    <VideoItemPageComponent
      videoItem={videoItem}
      audioPlatforms={audioPlatforms}
    />
  );
}
