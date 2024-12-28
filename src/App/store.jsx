import { configureStore } from "@reduxjs/toolkit";

import redditSliceReducer from "../Features/reddit/redditSlice";
import subredditsSliceReducer from "../Features/subreddits/subredditsSlice";

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
    reducer: {
      reddit: redditSliceReducer,
      subreddit: subredditsSliceReducer,
    },
  });