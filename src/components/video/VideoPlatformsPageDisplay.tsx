import * as React from "react";
import clsx from "clsx";
import { VideoPlatformsPageDisplayProps } from "../../types/video/components.types";
import { useVideoPlatformsPageDisplayStyles } from "../../styles/video/videoPlatformsDisplay.styles";

export default function VideoPlatformsPageDisplay({
  audioPlatforms,
  className,
}: VideoPlatformsPageDisplayProps): JSX.Element {
  const classes = useVideoPlatformsPageDisplayStyles();
  let rootClassName = classes.root;
  if (className) {
    rootClassName = clsx(classes.root, className);
  }

  return (
    <div className={rootClassName}>
      {audioPlatforms.map((platform) => (
        <a
          href={platform.url}
          className={classes.platformElement}
          key={platform.name}
          target={"_blank"}
          rel="noreferrer"
        >
          <img
            src={platform.largeIconPath}
            title={platform.name}
            alt={platform.name}
            className={classes.platformImage}
          />
        </a>
      ))}
    </div>
  );
}
