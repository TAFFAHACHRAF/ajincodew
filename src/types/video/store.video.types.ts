import { VideoItem, VideoMap } from "./video.types";

export interface VideoState {
  pageVideoEpisodes: VideoMap;
}

export interface SetVideoItemStateAction {
  slug: string;
  newState: VideoItem;
}
