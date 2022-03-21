class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status} ${res.statusText}`);
    }
  }

  getShows(q) {
    return fetch(`${this._url}/search/shows?q=${q}`, {
      method: 'GET',
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
      },
    }).then(this._checkResponse);
  }

  getSingleShow(id) {
    return fetch(`${this._url}/shows/${id}`, {
      method: 'GET',
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
      },
    }).then(this._checkResponse);
  }

  getCast(id) {
    return fetch(`${this._url}/shows/${id}/cast`, {
      method: 'GET',
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
      },
    }).then(this._checkResponse);
  }
}

const api = new Api({
  baseUrl: 'https://api.tvmaze.com',
});

export default api;
