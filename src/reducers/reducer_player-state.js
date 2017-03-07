import { SET_PLAYER_STATE } from '../actions/index';

export default function(state=0, action){
    switch(action.type){
        case SET_PLAYER_STATE:
            return action.payload;
    }

    return state;
}