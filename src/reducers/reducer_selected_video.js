import {SELECT_VIDEO} from '../actions/index';

const initVideo = {
    id: {
        videoId: 'XxVg_s8xAms'
    }
};

export default function(state=initVideo, action){
    switch(action.type){
        case SELECT_VIDEO:
            return action.payload;
    }
    return state;
}