

export default class MarvelService {
    getResource = async (url) => {
        let res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url} status: ${res.status}`)
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource('https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=48dbc8be51388196d5924a35ebbdf414');
    }

    getCharacter = (id) => {
        return this.getResource(`https://gateway.marvel.com:443/v1/public/characters/${id}?&apikey=48dbc8be51388196d5924a35ebbdf414`);
    }
}
