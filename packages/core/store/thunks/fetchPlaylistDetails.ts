import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PlaylistDetails } from "../../types/playlistDetails";

const proxyUrl = 'https://corsproxy.io';
const apiUrl = 'https://api.deezer.com/playlist';

const fetchPlaylistDetails = createAsyncThunk('playlistDetails/fetch', async (id: string) => {

    const response = await axios.get<PlaylistDetails>(`${proxyUrl}/?${apiUrl}/${id}`);

    return response.data;
});

export { fetchPlaylistDetails };