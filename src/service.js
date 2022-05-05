const baseUrl = 'https://newsapi.org';
const service = {
    getTop: function (id) {
        return fetch(`${baseUrl}/v2/top-headlines?category=general&apiKey=141311ec7431409faa6fc63fc222d752${id ? `/${id}` : ''}`).then(res => res.json());
    },
    getAll: function (id) {
        return fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=141311ec7431409faa6fc63fc222d752')
            .then(res => res.json());
    }
}

export default service;