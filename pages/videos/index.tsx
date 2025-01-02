import React, { useEffect, useState } from "react";
import Head from "next/head";
import MainTitle from "../../src/components/shared/MainTitle";
import VideoCard from "../../src/components/video/VideoCard";
import { useVideoPageStyles } from "../../src/styles/video/videoPageComponent.styles";
import axios from "axios";

type VideoItem = {
  _id: string;
  videoId: string;
  audioId: string;
  arabicDescription: string;
  englishDescription: string;
  slug: { current: string };
  title: string;
  thumbnailURL: string;
  excerpt: string;
  streamingDateStr: string;
};

export default function PodcastPage(): any {
  const [videoPageEpisodes, setVideoPageEpisodes] = useState<Record<string, VideoItem>>({});
  const [videoViews, setVideoViews] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); 
  const classes = useVideoPageStyles();

  const youtubeApiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY!;
  const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID!;

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`, {
            params: {
              part: "snippet",
              channelId: channelId,
              maxResults: 100,
              key: youtubeApiKey,
              type: "video",
            }
          }
        );

        const videos = response.data.items.map((item: any) => {
          return {
            _id: item.id.videoId,
            videoId: item.id.videoId,
            audioId: `audio-${item.id.videoId}`,
            arabicDescription: "Video description in Arabic",
            englishDescription: "Video description in English",
            slug: { current: `https://www.youtube.com/watch?v=${item.id.videoId}` },
            title: item.snippet.title,
            thumbnailURL: item.snippet.thumbnails.high.url,
            excerpt: item.snippet.description,
            streamingDateStr: new Date(item.snippet.publishedAt).toLocaleDateString(),
          };
        });

        const videoEpisodes = videos.reduce((acc: any, video: VideoItem) => {
          acc[video.videoId] = video;
          return acc;
        }, {});

        setVideoPageEpisodes(videoEpisodes);

        // Now fetch view counts for each video
        const videoIds = videos.map((video: VideoItem) => video.videoId);
        const viewCountsResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos`, {
            params: {
              part: "statistics",
              id: videoIds.join(","),
              key: youtubeApiKey,
            }
          }
        );

        const views = viewCountsResponse.data.items.reduce((acc: any, item: any) => {
          acc[item.id] = item.statistics.viewCount;
          return acc;
        }, {});

        setVideoViews(views);
      } catch (err: any) {
        console.error("Error fetching YouTube videos", err);
        setError(err.response ? err.response.data.error.message : err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchYouTubeVideos();
  }, [youtubeApiKey, channelId]);

  return (
    <>
      <Head>
        <title>Ajincodew YouTube Videos</title>
        <meta name="description" content="Ajincodew YouTube videos" />
      </Head>
      <section className={classes.root}>
        <MainTitle>Ajincodew YouTube Videos</MainTitle>
        {loading && <div>Loading videos...</div>}
        {error && <div style={{ color: 'red' }}>Error: {error}</div>}
        <div className={classes.cardsContainer}>
          {Object.keys(videoPageEpisodes).map((key) => {
            const videoData = videoPageEpisodes[key];
            const views = videoViews[videoData.videoId] || 0;
            return (
              <VideoCard
                key={videoData.slug.current}
                videoCardData={videoData}
                className={classes.videoCard}
                views={views}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
