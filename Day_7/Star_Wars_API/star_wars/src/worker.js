import axios from "axios";

// This file is getting data from the NASA API
const getplanets = (page_number) => {
    return axios.get(`https://swapi.co/api/planets/?page=${page_number}`)
}
export default getplanets;