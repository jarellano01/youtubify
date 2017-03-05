import {FETCH_PLAYLISTS} from '../actions/index';

export default function(state=null, action){
    switch(action.type){
        case FETCH_PLAYLISTS:
            return action.payload
    }
    return state;
}