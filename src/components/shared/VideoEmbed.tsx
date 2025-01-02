import * as React from "react";
import clsx from "clsx";
import CircularProgress from "@mui/material/CircularProgress";
import { VideoEmbedProps } from "../../types/shared/videoEmbed.types";
import { useVideoEmbedStyles } from "../../styles/shared/videoEmbed.styles";

export default function VideoEmbed({
  videoEmbedUrl,
  className,
}: VideoEmbedProps): JSX.Element {
  const classes = useVideoEmbedStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <div className={classes.progressBarContainer}>
        <CircularProgress color="primary" />
      </div>

      <iframe
        src={videoEmbedUrl}
        className={classes.videoContainer}
        frameBorder="0"
        scrolling="no"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
    </div>
  );
}
