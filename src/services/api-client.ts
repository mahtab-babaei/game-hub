import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4622cbcf3a044b0b9e6cd6c73a9b28bb'
    }
})