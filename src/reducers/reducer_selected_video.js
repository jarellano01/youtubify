import {SELECT_VIDEO} from '../actions/index';
import { FETCH_VIDEOS } from '../actions/index';

export default function(state=null, action){
    switch(action.type){
        case FETCH_VIDEOS:
            return action.payload.data.items[0];
        case SELECT_VIDEO:
            return action.payload;
    }
    return state;
}