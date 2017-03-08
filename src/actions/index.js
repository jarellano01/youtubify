import axios from 'axios';
import firebase from 'firebase';

const API_KEY = 'AIzaSyDQN1X3SZb6R9fxo2FUzLnywq7aF-oEe3E';
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

const firebaseConfig = {
    apiKey: "AIzaSyCfLdjRtXhp3aez95icIZX67PE2pMOMc2c",
    authDomain: "youtubify-cc9ae.firebaseapp.com",
    databaseURL: "https://youtubify-cc9ae.firebaseio.com",
    storageBucket: "youtubify-cc9ae.appspot.com",
    messagingSenderId: "508625204452"
  };

//firebase connection
let app = firebase.initializeApp(firebaseConfig);

let dbRef = app.database().ref('firstObject');

dbRef.on('value', (snapshot) => {
    let param = snapshot.val();
    fetchPlaylistVideos(param);
});

dbRef.push(
    {name: 'Bob'}
);

export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const SELECT_VIDEO = 'SELECT_VIDEO';
export const FETCH_PLAYLISTS = 'FETCH_PLAYLISTS';
export const FETCH_PLAYLIST_VIDEOS = 'FETCH_PLAYLIST_VIDEOS';
export const SET_PLAYER = 'SET_PLAYER';
export const SET_PLAYER_STATE = 'SET_PLAYER_STATE';
export const ADD_TO_Playlist = 'ADD_TO_Playlist';

export function fetchVideos(term) {
    const params = {
        part: 'snippet',
        key:API_KEY,
        q: term,
        type: 'video'
    };

    const request = axios.get(ROOT_URL, {params: params});

    if(term==null) return {};
    return {
        type: FETCH_VIDEOS,
        payload: request
    }
}

export function selectVideo(video){
    return {
        type: SELECT_VIDEO,
        payload: video
    }
}

export function fetchPlaylists(user){
    return {
        type: FETCH_PLAYLISTS,
        payload: ["Playlist1", "Playlist2", "Playlist3", "Playlist4"]
    }
}

export function setPlayer(iframePlayer){
    return {
        type: SET_PLAYER, iframePlayer,
        payload: iframePlayer
    }
}

export function fetchPlaylistVideos(param) {
    return {
        type: FETCH_PLAYLIST_VIDEOS,
        payload: param
    }
}

export function setPlayerState(playerState){
    return {
        type: SET_PLAYER_STATE,
        payload: playerState
    }
}

export function addToPlaylist(video) {
    dbRef.push(video);
    return {
        type: ADD_TO_Playlist,
        //payload: []
    }
}
