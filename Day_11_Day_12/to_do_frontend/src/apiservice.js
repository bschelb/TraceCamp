const axios = require("axios");


const API_URL = `http://127.0.0.1:8000`;
const config = {};

function detailList(id) {
    return axios.get(`${API_URL}/detail/${id}/`, config);
}

function updateList(payload, id) {
    return axios.put(`${API_URL}/detail/${id}`, payload);
}

function listofLists() {
    return axios.get(`${API_URL}/list/`, config);
}

function createList(payload) {
    return axios.post(`${API_URL}/create`, payload);
}

function deleteList(id) {
    return axios.delete(`${API_URL}/delete/${id}/`, config);
}

export { detailList, listofLists, createList, deleteList, updateList };