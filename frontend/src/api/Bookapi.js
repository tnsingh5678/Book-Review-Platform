import axios from "axios"
const url = "http://localhost:4000"
const fetchBookById = async (id) => {
    const res = await axios.get(`${url}/books/:id`)
    return res;
}

const fetchBooks = async () => {
    const res = await axios.get(`${url}/books/`)
    return res;
}

const submitReview = async () => {
    const res = await axios.post(`${url}/reviews/`)
    return res;
}

export {fetchBookById , fetchBooks , submitReview};

