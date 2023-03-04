const getGift = async ( category ) => {

    const url = "https://api.giphy.com/v1/gifs/search?api_key=3dXiu0xqzyAjgW2EVIqDw9HqdbSyzjGk&q=category&limit=25&offset=0&rating=g&lang=en"
    const resp = await fetch(url)
    const {data} = await resp.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs
}

export const GifGrid2 = ({category}) => {
    getGift( category )
    return (
        <>
            <h3> { category } </h3>
            <p> Hello world </p>
        </>
    )
}