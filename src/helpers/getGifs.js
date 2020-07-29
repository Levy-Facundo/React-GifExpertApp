export const getGifs =async(category, limite)=>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limite}&api_key=OsyBgIL2G88Wn1K2ZWAXzqbR4hj4ojFo`;
    const resp= await fetch(url);
    const  {data} = await resp.json();
    const gifs = data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}
