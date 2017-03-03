import axios from 'axios';

const API_KEY = 'AIzaSyDQN1X3SZb6R9fxo2FUzLnywq7aF-oEe3E';
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const SELECT_VIDEO = 'SELECT_VIDEO';

export function fetchVideos(term) {
    const params = {
        part: 'snippet',
        key:API_KEY,
        q: term,
        type: 'video'
    };

    const request = axios.get(ROOT_URL, {params: params});

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
