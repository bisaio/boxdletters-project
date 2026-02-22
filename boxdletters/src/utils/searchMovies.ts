const searchAPI = import.meta.env.VITE_SEARCH;
const apiRAtoken = import.meta.env.VITE_API_RA_TOKEN

export default async function searchMovies(searchText: string) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiRAtoken}`
        }
    };

    const search_string = `${searchAPI}${searchText.replaceAll(" ", "%20")}`;

    const response = await fetch(search_string, options);
    const data = await response.json();
    return data;
}