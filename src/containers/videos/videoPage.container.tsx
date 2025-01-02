import React from "react";
import VideoPageComponent from "../../components/video/VideoPageComponent";
import { VideoMap } from "../../types/video/video.types";
import { useSelector } from "react-redux";
import { selectVideoStateField } from "../../store/video/selectors";


export default function VideoPageContainer(): any {
  const videoPageEpisodes = useSelector(
    selectVideoStateField("pageVideoEpisodes")
  ) as VideoMap;
  return <VideoPageComponent videoPageEpisodes={videoPageEpisodes} />;
}
