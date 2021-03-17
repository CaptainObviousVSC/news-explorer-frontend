
export class Api {
    constructor({ baseUrl }) {
      this.baseUrl = baseUrl
  
    }
    getUserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${token}`,
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
    }
    getNews(token) {
      return fetch(`${this.baseUrl}/articles`, {
         headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
          }
      })
        .then(res => {
          if (res.ok) {
            return res.json()
          }
          return Promise.reject(`Ошибка: ${res.status}`)
        })
    }
    postNews(item, token, keywords) {
        return fetch(`${this.baseUrl}/articles`, {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`,
              },
            body: JSON.stringify({
              keyword: keywords,
              title: item.title,
                  text: item.text,
                  date: item.date,
                  source: item.source,
                  link: item.link,
                  id: item.link,
                  image: item.image, 
            })
          })
            .then(res => {
              if (res.ok) {
                return res.json()
              }
              return Promise.reject(`Ошибка: ${res.status}`)
            })
    }
    deleteCard( articleId, token) {
      return fetch(`${this.baseUrl}/articles/${articleId}`, {
        method: 'DELETE',
        headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
          },
      }).then(res => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
    }
}
  const api = new Api({
    baseUrl: 'https://azik.news.students.nomoreparties.xyz'
  })
  export default api
  