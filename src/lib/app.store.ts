import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { useDispatch } from "react-redux";

import { isVercelProd } from "./app.constants";
import { directoriesReducer } from "./directories/directories.redux";
import { scrollToPageTopReducer } from "./scroll-to-page-top/scroll-to-page-top.redux";

export const makeStore = () =>
  configureStore({
    reducer: {
      directories: directoriesReducer,
      scrollToPageTop: scrollToPageTopReducer,
    },
    devTools: !isVercelProd,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });

export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];
export const useAppDispatch: () => AppDispatch = useDispatch;
