import { FETCH_PLAYLIST_VIDEOS } from '../actions/index';

export default function(state={}, action) {
    switch(action.type){
        case FETCH_PLAYLIST_VIDEOS:
            console.log(action.payload);
            return action.payload;
    }

    return state;
}


