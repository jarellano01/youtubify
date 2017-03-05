import { combineReducers} from 'redux';
import ResultsReducer from './reducer_results';
import SelectedVideoReducer from './reducer_selected_video';
import PlaylistsReducer from './reducer_playlists';


const rootReducer = combineReducers({
    searchResults: ResultsReducer,
    selectedVideo: SelectedVideoReducer,
    playlists: PlaylistsReducer

});

export default rootReducer;