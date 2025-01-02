export interface VideoItem {
  _id: string;
  slug: {
    current: string;
  };
  thumbnailURL: string;
  title: string;
  excerpt: string;
  streamingDateStr: string;
  videoId: string;
  audioId: string;
  arabicDescription: string;
  englishDescription: string;
}

export interface VideoMap {
  [key: string]: VideoItem;
}
