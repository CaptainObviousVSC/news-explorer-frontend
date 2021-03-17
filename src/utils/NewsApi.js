
class NewsApi {
    constructor ({ baseUrl, apiKey }) {
        this.baseUrl = baseUrl
        this.apiKey = apiKey
    }
    getArticles (keyword) {
        return fetch(`${this.baseUrl}/everything?q=${keyword}&from=2021-03-01&to=2021-03-14&pageSize=100&apiKey=${this.apiKey}`)
        .then(res => {
            if(res.ok) {
                console.log(keyword)
                return res.json()
            }
            return Promise.reject(res.status)
        })
    }
}
const newsApi = new NewsApi({
    baseUrl: 'https://newsapi.org/v2',
    apiKey: 'c3e53be096a849ffa5e02e8fa9903159'
  })
export default newsApi