import { PodcastState } from "../../src/types/podcast/store.podcast.types";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { setPodcastState } from "../../src/store/podcast/slice";
import Head from "next/head";
import VideoPageContainer from "../../src/containers/videos/videoPage.container";

export default function PodcastPage(props: PodcastState): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPodcastState(props));
  }, []);

  return (
    <>
      <Head>
        <title>Ajincodew youtube videos</title>
        <meta name="description" content="Ajincodew YouTube videos"/>
      </Head>
      <VideoPageContainer />
    </>
  );
}
