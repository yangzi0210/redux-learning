import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const countStore = createSlice({
  name: "channel",
  initialState: {
    channelList: [],
  },
  reducers: {
    setChannels(state, action) {
      state.channelList = action.payload;
    },
  },
});

const { setChannels } = countStore.actions;

const channelReducer = countStore.reducer;

const fetchChannelList = () => {
  return async (dispatch) => {
    const res = await axios.get("http://geek.itheima.net/v1_0/channels");
    dispatch(setChannels(res.data?.data?.channels));
  };
};

export { fetchChannelList };

export default channelReducer;
