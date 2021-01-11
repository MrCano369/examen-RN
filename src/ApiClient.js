const URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=45ee0698538834c938960dd7afed9c16&format=json';

function getMusicData(){
    return fetch(`${URL}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(r => r.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(a => {
        return {
            id: a.mbid,
            name: a.name,
            image: a.image[3]['#text']
        }
    }))
}

export {getMusicData}