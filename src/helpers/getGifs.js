export const getGifs = async ( category ) => {
    const URL = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=BvQHl3dKiOdT0gWywUIYRENLysVutHoR`; // encodeURI: function encodes a URI by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character 
    // BvQHl3dKiOdT0gWywUIYRENLysVutHoR

    const resp = await fetch( URL );
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            image: img.images?.downsized_medium.url
        }
    })

    return gifs;
}