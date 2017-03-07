import { combineReducers} from 'redux';
import ResultsReducer from './reducer_results';
import SelectedVideoReducer from './reducer_selected_video';
import PlaylistsReducer from './reducer_playlists';
import PlaylistVideos from './reducer_playlist-videos'


const rootReducer = combineReducers({
    searchResults: ResultsReducer,
    selectedVideo: SelectedVideoReducer,
    playlists: PlaylistsReducer,
    playlistVideos: PlaylistVideos

});

export default rootReducer;