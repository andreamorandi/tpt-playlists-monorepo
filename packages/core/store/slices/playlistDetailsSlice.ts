import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPlaylistDetails } from "../thunks/fetchPlaylistDetails";
import { PlaylistDetails, PlaylistDetailsState } from "../../types/playlistDetails";
import { Map } from "immutable";

// export const initialPlaylistDetailsState: PlaylistDetailsState = Map({
//     data: {},
//     isLoading: false,
//     error: null,
// }) as PlaylistDetailsState;

export const initialPlaylistDetailsState: PlaylistDetailsState = {
    data: {},
    isLoading: false,
    error: null,
} as PlaylistDetailsState;

const playlistDetailsSlice = createSlice({
    name: 'playlistDetails',
    initialState: initialPlaylistDetailsState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchPlaylistDetails.pending, (state) => {
            // return state
            //     .set('isLoading', true)
            //     .set('error', null);
            state.isLoading = true;
            state.error = null;
            return state;
        });
        builder.addCase(fetchPlaylistDetails.fulfilled, (state, action: PayloadAction<PlaylistDetails>) => {
            // return state
            //     .set('isLoading', false)
            //     .set('data', action.payload)
            state.isLoading = false;
            state.data = action.payload;
            return state;
        });
        builder.addCase(fetchPlaylistDetails.rejected, (state, action) => {
            // return state
            //     .set('isLoading', false)
            //     .set('error', action.error);
            state.isLoading = false;
            state.error = action.error;
            return state;
        });
    },
});

export const playlistDetailsReducer = playlistDetailsSlice.reducer;