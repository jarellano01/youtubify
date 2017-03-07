# Youtubify

An app that allows you to store your own lists of of youtube videos separated into separate playlists. These playlist can be played directly from the web app and will play in the order in which they are placed in the playlist.

### Developing
- Run `npm start` to start webpack dev server
- Go to `localhost:8080`
- For style changes run `gulp` to start listening to changes that you make, which will then compile into one minified css file
- Only work from the less folder inside of assets


### Live Link
http://youtubify.surge.sh/

### Libraries and Frameworks
- Firebase for the database
    - Will later be replaced with mongodb implementing socket.io
- React for the front end
    - Redux for state management
- Youtube API for searching and selecting Videos
- iFrame API for pause/play/next/previous functionality

### Progress
- Currently building React Interface
