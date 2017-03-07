import { combineReducers} from 'redux';
import ResultsReducer from './reducer_results';
import SelectedVideoReducer from './reducer_selected_video';
import PlaylistsReducer from './reducer_playlists';
import PlaylistVideos from './reducer_playlist-videos';
import Player from './reducer_player';
import PlayerState from './reducer_player-state';


const rootReducer = combineReducers({
    searchResults: ResultsReducer,
    selectedVideo: SelectedVideoReducer,
    playlists: PlaylistsReducer,
    playlistVideos: PlaylistVideos,
    player: Player,
    playerState: PlayerState

});

export default rootReducer;