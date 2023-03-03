import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPlaylists } from "../thunks/fetchPlaylists";
import { Playlists, PlaylistsState } from "../../types/playlists";
import { Map } from "immutable";

// export const initialPlaylistsState: PlaylistsState = Map({
//     data: {},
//     isLoading: false,
//     error: null,
// }) as PlaylistsState;

export const initialPlaylistsState: PlaylistsState = {
    data: {},
    isLoading: false,
    error: null,
} as PlaylistsState;

const playlistsSlice = createSlice({
    name: 'playlists',
    initialState: initialPlaylistsState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchPlaylists.pending, (state) => {
            // return state.set('isLoading', true)
            state.isLoading = true;
            return state;
        });
        builder.addCase(fetchPlaylists.fulfilled, (state, action: PayloadAction<Playlists>) => {
            // return state
                // .set('isLoading', false)
                // .set('data', action.payload)
                state.isLoading = false;
                state.data = action.payload;
                return state;
        });
        builder.addCase(fetchPlaylists.rejected, (state, action) => {
            // return state
                // .set('isLoading', false)
                // .set('error', action.error);
                state.isLoading = false;
                state.error = action.error;
                return state;
        });
    },
});

export const playlistsReducer = playlistsSlice.reducer;