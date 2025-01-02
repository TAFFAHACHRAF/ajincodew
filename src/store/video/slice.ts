import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VideoState, SetVideoItemStateAction } from "../../types/video/store.video.types";

const initialState: VideoState = {
  pageVideoEpisodes: {},
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setVideoState(state: VideoState, action: PayloadAction<VideoState>) {
      return {
        ...state,
        ...action.payload,
      };
    },
    setVideoItemState(
      state: VideoState,
      action: PayloadAction<SetVideoItemStateAction>
    ) {
      const { slug, newState } = action.payload;
      state.pageVideoEpisodes[slug] = newState;
    },
  },
});

export const { setVideoState, setVideoItemState } = videoSlice.actions;

export const videoRootReducer = videoSlice.reducer;
