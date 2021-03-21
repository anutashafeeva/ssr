import * as Constants from '../assets/constants.js';

export async function getMoviesAsync(search = '', sort = 'release_date', filter = null) {
  const url = new URL(Constants.URL);
  const params = [['searchBy', 'title'], ['search', search], ['limit', '6'], ['sortBy', sort], ['sortOrder', 'asc']];
  if(filter !== null){
    params.push(['filter', [filter]]);
  }
  url.search = new URLSearchParams(params).toString();
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export async function addMovieAsync(movie) {
  const url = new URL(Constants.URL);
  await fetch(url, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  });
}

export async function deleteMovieAsync(id) {
  const url = new URL(Constants.URL);
  await fetch(`${url}/${id}`, {method: 'DELETE'});
}

export async function editMovieAsync(movie) {
  const url = new URL(Constants.URL);
  await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  });
}

export async function getMovieByIdAsync(id) {
  const url = new URL(`${Constants.URL}/${id}`);
  const response = await fetch(url);
  const json = await response.json();
  return json;
}