import * as React from "react";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import LinkWrapper from "../../containers/shared/linkWrapper.container";
import { createVideoLink, loadImageEffect } from "../../lib/utils";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { VideoCardProps } from "../../types/video/components.types";
import { useVideoCardStyles } from "../../styles/home/videoCard.styles";

export default function VideoCard({
  videoCardData,
  className,
}: VideoCardProps): JSX.Element {
  const classes = useVideoCardStyles();
  const videoLink = createVideoLink(videoCardData.slug.current);

  const [videoImg, setVideoImg] = useState("/video.png");
  useEffect(
    () => loadImageEffect(videoCardData.thumbnailURL, setVideoImg),
    [videoImg]
  );

  return (
    <Card className={clsx(classes.root, className)} raised={true}>
      <LinkWrapper href={videoLink} isExternal={false}>
        <CardActionArea className={classes.container}>
          <img
            alt={videoCardData.title}
            src={videoImg}
            className={classes.media}
          />
          <CardContent className={classes.content}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
            >
              {videoCardData.title}
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              component="p"
              className={classes.title}
            >
              {videoCardData.excerpt}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              className={classes.metadataPanel}
            >
              Streamed {videoCardData.streamingDateStr}
            </Typography>
          </CardContent>
        </CardActionArea>
      </LinkWrapper>
    </Card>
  );
}
