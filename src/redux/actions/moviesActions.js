import axios from 'axios';

export const fetchMovRequest = () => {
  return {
    type: "FETCH_MOVIE_REQUEST"
  }
}

const fetchMovSuccess = movie => {
  return {
    type: "FETCH_MOVIE_SUCCESS",
    payload: movie
  }
}

const fetchMovFailure = error => {
  return {
    type: "FETCH_MOVIE_FAILURE",
    payload: error
  }
}

export const fetchMov = (query, page, scrolling) => {
  return (dispatch) => {
    dispatch(fetchMovRequest)
    axios.get(`http://www.omdbapi.com/?apikey=faf7e5bb&s=${query}&page=${page}`)
      .then(res => {
        const mov = res.data
        dispatch(fetchMovSuccess(mov))
      })
      .catch(err => {
        const errMsg = err.message
        dispatch(fetchMovFailure(errMsg))
      })
  }
}