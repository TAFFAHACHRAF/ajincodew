import * as React from "react";
import { VideoPageProps } from "../../types/video/components.types";
import MainTitle from "../shared/MainTitle";
import VideoCard from "./VideoCard";
import { useVideoPageStyles } from "../../styles/video/videoPageComponent.styles";

export default function VideoPageComponent({
  videoPageEpisodes,
}: VideoPageProps): JSX.Element {
  const classes = useVideoPageStyles();
  return (
    <section className={classes.root}>
      <MainTitle>Ajincodew YouTube Videos</MainTitle>
      <div className={classes.cardsContainer}>
        {videoPageEpisodes &&
          Object.keys(videoPageEpisodes).map((key) => (
            <VideoCard
              key={videoPageEpisodes[key].slug.current}
              videoCardData={videoPageEpisodes[key]}
              className={classes.videoCard}
            />
          ))}
      </div>
    </section>
  );
}
