import { AudioPlatform } from "../shared/whereToListen.types";
import { VideoItem, VideoMap } from "./video.types";

export interface VideoCardProps {
  videoCardData: VideoItem;
  className?: string;
}

export interface VideoPageProps {
  videoPageEpisodes: VideoMap;
}

export interface VideoItemPageProps {
  videoItem: VideoItem;
  audioPlatforms: AudioPlatform[];
}

export interface VideoPlatformsPageDisplayProps {
  className?: string;
  audioPlatforms: AudioPlatform[];
}