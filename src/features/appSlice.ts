import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    channelId:null,
    channelName:null,
    app:null
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setChannelId:(state,action)=>{
            state.app +=action.payload
        }
    }
});

export const { setChannelId } = appSlice.actions
export const selectChannelId =(state: { app: { channelId: any; }; }) => state.app.channelId;
export const selectChannelName = (state: { app: { channelName: any; }; }) => state.app.channelName;
export default appSlice.reducer