const apiURL: string = 'http://localhost:8080';

export const apiFetch = (url: string, options?: RequestInit) => {
  if (url.charAt(0) !== '/') {
    throw new Error('invalid url.')
  }
  return fetch(apiURL + url, options).then((res) => res.json());
}
