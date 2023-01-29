import axios from 'axios';

class API {
  #API_KEY = '31766266-b4c442347c7d8dfc69a6e358e';
  #BASE_URL = 'https://pixabay.com/api/';

  constructor() {
    this._queryToFetch = '';
    this.pageToFetch = 1;
  }

  get API_KEY() {
    return this.#API_KEY;
  }

  get BASE_URL() {
    return this.#BASE_URL;
  }

  resetPage() {
    this.pageToFetch = 1;
  }

  incrementPage() {
    this.pageToFetch += 1;
  }

  get queryToFetch() {
    return this._queryToFetch;
  }

  set queryToFetch(keyword) {
    this._queryToFetch = keyword;
  }

  async fetch() {
    const searchParams = new URLSearchParams({
      q: this.queryToFetch,
      key: this.API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: this.pageToFetch,
    }).toString();

    return await axios.get(`${this.BASE_URL}?${searchParams}`);
  }
}

const api = new API();

export { api };
