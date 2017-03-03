import { combineReducers} from 'redux';
import VideoReducer from './reducer_videos';
import SelectedVideoReducer from './reducer_selected_video';


const rootReducer = combineReducers({
    videos: VideoReducer,
    selectedVideo: SelectedVideoReducer

});

export default rootReducer;