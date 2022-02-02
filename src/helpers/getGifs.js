

// encodeURI elimina espacios, etc
export const getGifs = async (category) => {
    const urlGifs = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=12&api_key=VmL4NRzy1ofB3JUYRLD8kk3BGvJ1nCGU`;
    const resp = await fetch(urlGifs);

    // const resultado = await resp.json();
    // console.log(resultado)

    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url, // ? si viene las imgs entonces lo utilice
        }
    })


    return gifs;

    // console.log(gifs)
    // setImages(gifs)
}