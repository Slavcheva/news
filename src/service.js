const baseUrl = "https://newsapi.org/v2/";
// const apiKey = "3742feb43d1740c1925fbebbb53c0347";
const apiKey = "141311ec7431409faa6fc63fc222d752";
const sources="bbc-news,nbc-news,associated-press,mtv-news,fox-sports,medical-news-today,national-geographic"

const service = {

    getAll: function (category = "general") {
        return fetch(`${baseUrl}everything?sources=${sources}&pageSize=37&sortBy=publishedAt&apiKey=${apiKey}`).then(res => res.json());
    },

    getTop: function () {
        return fetch(`https://newsapi.org/v2/top-headlines?sources=${sources}?&apiKey=${apiKey}`)
            .then(res => res.json());
    },

}

export default service;