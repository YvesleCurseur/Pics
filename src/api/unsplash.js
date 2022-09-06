import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Qoji1hJjdGQNjIYt0DvmgoIPBR3uOxPsRVHGcyRDC-s'
    }
})