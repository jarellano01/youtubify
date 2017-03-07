import {SET_PLAYER} from '../actions/index'
export default function (state = null, action) {
    switch (action.type) {
        case SET_PLAYER:
            return action.payload;
    }

    return state;
}