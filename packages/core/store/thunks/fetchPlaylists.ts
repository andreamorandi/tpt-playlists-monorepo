import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Playlists } from "../../types/playlists";

const proxyUrl = 'https://corsproxy.io';
const apiUrl = 'https://api.deezer.com/chart/0/playlists?limit=30';

const fetchPlaylists = createAsyncThunk('playlists/fetch', async () => {
    
    const response = await axios.get<Playlists>(`${proxyUrl}/?${apiUrl}`);
    
    return response.data;
});

export { fetchPlaylists };