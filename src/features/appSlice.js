import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    ChannelId:null,
    ChannelName:null
  },
  reducers: {
    SetChannelInfo:(state,action)=>{
      state.channelId= action.payload.channelId;
      state.channelName= action.payload.channelName;
      state.channelImage= action.payload.channelImage;
      state.channelDesc= action.payload.channelDesc;
    }
    
  },
});

export const { SetChannelInfo} =appSlice.actions;

export const selectChannelId = (state)=>state.app.channelId;
export const ChannelInformation= (state)=>state.app;
export default appSlice.reducer;
