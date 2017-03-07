const initPlayer = {
    playing: false,
    video: {
        "kind": "youtube#searchResult",
        "etag": "\"uQc-MPTsstrHkQcRXL3IWLmeNsM/OXtUuy0m6q-R2PVi9HrkuDwfTwk\"",
        "id": {
            "kind": "youtube#video",
            "videoId": "NOZhkTLTKzU"
        },
        "snippet": {
            "publishedAt": "2013-12-31T21:09:53.000Z",
            "channelId": "UCMiD9p5NpD61dbOSGMy4u7w",
            "title": "Chill Out - Relaxing Classical Guitar, Spanish, Acoustic, Classical Music, Part 2",
            "description": "http://34.gs/s1rj AWESOME DEPRESSION METHOD: CLICK LINK ABOVE The Music: Part. 2 Romance de Durandarte Sonata, Andante Atom hearts Club Duo, ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/NOZhkTLTKzU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/NOZhkTLTKzU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/NOZhkTLTKzU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Ann Redgewell",
            "liveBroadcastContent": "none"
        }

    }

};

export default function (state = initPlayer, action) {
    switch (action.type) {
        case SET_PLAYER:
            return action.payload.data.items;
    }

    return state;
}