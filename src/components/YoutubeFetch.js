
const YoutubeFetch = async (url) => {     
    try {
        const response = await fetch(url);
        if (response.status === 404) {
            throw Error('404 Route Not Found!');
        } else if (!response.ok) {
            throw Error('Something went wrong...');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}
 
export default YoutubeFetch;