import * as React from "react";
import MainTitle from "../shared/MainTitle";
import YoutubeEmbed from "../home/YoutubeEmbed";
import clsx from "clsx";
import { CommentsPanelProps } from "../../types/shared/commentsPanel.types";
import CommentsPanel from "../shared/CommentsPanel";
import ItemPageTitle from "../shared/ItemPageTitle";
import { VideoItemPageProps } from "../../types/video/components.types";
import { useVideoItemPageStyles } from "../../styles/video/videoItemPageComponent.styles";
import { createVideoEmbedLink } from "../../lib/utils";
import VideoPlatformsPageDisplay from "./VideoPlatformsPageDisplay";
import VideoEmbed from "../shared/VideoEmbed";

export default function VideoItemPageComponent({
  videoItem,
  audioPlatforms,
}: VideoItemPageProps): JSX.Element {
  const classes = useVideoItemPageStyles();
  const videoEmbedUrl = createVideoEmbedLink(videoItem.audioId);

  const commentsProps: CommentsPanelProps = {
    mediaSlugID: videoItem._id,
    mediaTitle: videoItem.title,
    mediaTypeSlug: "video",
  };

  return (
    <section className={classes.root}>
      <ItemPageTitle>{videoItem.title}</ItemPageTitle>
      <div className={classes.bodyContainer}>
        <div className={classes.videoContainer}>
          <div className={classes.youtubeContainer}>
            <YoutubeEmbed embedId={videoItem.videoId} />
          </div>

          <VideoPlatformsPageDisplay
            audioPlatforms={audioPlatforms}
            className={classes.platformsContainer}
          />
        </div>
        <VideoEmbed
          videoEmbedUrl={videoEmbedUrl}
          className={classes.videoEmbed}
        />

        <div className={classes.descriptionContainer}>
          <div>
            <MainTitle>About this video</MainTitle>
            <p className={classes.description}>
              {videoItem.englishDescription}
            </p>
          </div>

          <div>
            <MainTitle className={classes.arabicText}>
              حول هذا البودكاست
            </MainTitle>
            <p className={clsx(classes.description, classes.arabicText)}>
              {videoItem.arabicDescription}
            </p>
          </div>
        </div>
        <CommentsPanel {...commentsProps} />
      </div>
    </section>
  );
}
