import { FETCH_VIDEOS } from '../actions/index';

export default function(state=[], action){
    switch(action.type){
        case FETCH_VIDEOS:
            console.log(action.payload.data.items);
            return action.payload.data.items;
    }

    return state;
}
