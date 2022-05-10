const baseUrl = "https://newsapi.org/v2/";
const apiKey = "141311ec7431409faa6fc63fc222d752";
const sources = "bbc-news,nbc-news,associated-press,reuters,medical-news-today,national-geographic,business-insider,fox-sports"

const services = {

    getAll: function () {
        return fetch(`${baseUrl}everything?sources=${sources}&pageSize=19&sortBy=publishedAt&apiKey=${apiKey}`)
            .then(res => res.json());
    },

    getByCategory: function (category) {
        return fetch(`${baseUrl}top-headlines?country=us&category=${category}&apiKey=${apiKey}`)
            .then(res => res.json());
    },

    getBySource: function () {
        return fetch(`${baseUrl}top-headlines/sources?&language=en&apiKey=${apiKey}`)
            .then(res => res.json());
    },

    getTop: function () {
        return fetch(`${baseUrl}top-headlines?sources=${sources}?&apiKey=${apiKey}`)
            .then(res => res.json());
    },
}

export default services;