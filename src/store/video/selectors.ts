import { createSelector } from "@reduxjs/toolkit";
import { selectSelf } from "../selectors";
import { State } from "../../types/shared/store.types";
import { VideoState } from "../../types/video/store.video.types";

export function selectVideoStateField(fieldName: keyof VideoState) {
  return createSelector(
    selectSelf,
    (state) => {
      console.log("State in selector:", state); // Debugging log
      return state?.video?.[fieldName] ?? {}; // Fallback to an empty object
    }
  );
}