var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "overworld - overworld",
        "end - end"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1609955972",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Overworld",
            "zoomLevels": 11,
            "defaultZoom": 1,
            "maxZoom": 11,
            "path": "overworld",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "overworld - overworld",
            "last_rendertime": 1609897043,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                197,
                80,
                242
            ],
            "minZoom": 0,
            "spawn": [
                197,
                80,
                242
            ],
            "north_direction": 0
        },
        {
            "name": "The End",
            "zoomLevels": 11,
            "defaultZoom": 1,
            "maxZoom": 11,
            "path": "nether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "end - end",
            "last_rendertime": 1609896716,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                64,
                0
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
