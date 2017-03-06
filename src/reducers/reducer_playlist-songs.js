import { FETCH_PLAYLIST_VIDEOS } from '../actions/index';
export default function(state=curPlaylist, action){
    switch(action.type){
        case FETCH_PLAYLIST_VIDEOS:
            console.log(action.payload.data.items);
            return action.payload.data.items;
    }

    return state;
}
const curPlaylist = [
    {
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
    },
    {
        "kind": "youtube#searchResult",
        "etag": "\"uQc-MPTsstrHkQcRXL3IWLmeNsM/OH0Jf7AIrpxWuHZjgxgGFLSojMc\"",
        "id": {
            "kind": "youtube#video",
            "videoId": "V80EzF--UNk"
        },
        "snippet": {
            "publishedAt": "2015-03-16T13:22:44.000Z",
            "channelId": "UCo5RYA-DJT3ckxftIPR4wlw",
            "title": "3 HOURS Best Calming Music | Classical Guitar | Background, Relax, Sleep, Study, Meditation | #2",
            "description": "Best Calming Music | Guitar Relaxing Music Enjoy 3 hours of soothing classical guitar music. You can use it for relax, sleeping, studying, etc. On this channel you ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/V80EzF--UNk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/V80EzF--UNk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/V80EzF--UNk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "TheRelaxingWorld",
            "liveBroadcastContent": "none"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "\"uQc-MPTsstrHkQcRXL3IWLmeNsM/9RNPOvqOn_YfmHrxYIkcSHomN5M\"",
        "id": {
            "kind": "youtube#video",
            "videoId": "8B6jOUzBKYc"
        },
        "snippet": {
            "publishedAt": "2011-12-08T05:29:38.000Z",
            "channelId": "UCXGoBMZ1hSQqgMogIQkjBwQ",
            "title": "Malaguena - Michael Lucarelli,  classical guitar",
            "description": "CD \"Favorites\" available http://www.michaellucarelli.com Michael Lucarelli plays \"Malaguena\" on classical guitar. Bonneville Salt Flats Support me by ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/8B6jOUzBKYc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/8B6jOUzBKYc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/8B6jOUzBKYc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Michael Lucarelli",
            "liveBroadcastContent": "none"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "\"uQc-MPTsstrHkQcRXL3IWLmeNsM/fMaBYPEhK5VDOwF-Ssd9XVoTnO4\"",
        "id": {
            "kind": "youtube#video",
            "videoId": "uRz3AQx21y8"
        },
        "snippet": {
            "publishedAt": "2014-05-31T07:56:46.000Z",
            "channelId": "UCvQI6QKWZ0wQuRx3JcIWfmQ",
            "title": "The Best of Andrés Segovia /// Guitar Masterpieces for Classical Music Lovers (Full Album) [HQ]",
            "description": "Enjoy The Best of Andrés Segovia /// Guitar Masterpieces for Classical Music Lovers in High Quality Sound. Facebook ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/uRz3AQx21y8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/uRz3AQx21y8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/uRz3AQx21y8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Classical Tunes",
            "liveBroadcastContent": "none"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "\"uQc-MPTsstrHkQcRXL3IWLmeNsM/1W7-YPl9AaQc96rWQts1WS8wqXw\"",
        "id": {
            "kind": "youtube#video",
            "videoId": "UfZmMJKIBec"
        },
        "snippet": {
            "publishedAt": "2012-03-24T18:31:45.000Z",
            "channelId": "UCC-zoZQUQ4ADY3Kr0nEEBmg",
            "title": "Bohemian Rhapsody - Steve Bean - Classical Guitar",
            "description": "Available now on iTunes: https://itunes.apple.com/gb/album/bohemian-rhapsody-single/id734943587 www.stevebean.co.uk (for Tab -see below) TAB ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/UfZmMJKIBec/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/UfZmMJKIBec/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/UfZmMJKIBec/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Steve Bean",
            "liveBroadcastContent": "none"
        }
    }
];

