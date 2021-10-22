const initialState = {
  movies: [],
  search: '',
  limit: '',
  loading: false,
  error: '',
  pagenumber: 1
};

const moviesReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIE_REQUEST' :
      return {
        ...state,
        loading: true
      }
    case 'FETCH_MOVIE_SUCCESS':
      return {
        loading: false,
        movie: action.payload,
        error: '',
      }
    case 'FETCH_MOVIE_FAILURE':
      return {
        loading: false,
        movie: [],
        error: action.payload,
      }
    case 'INFINITE_SCROLL':
      return {
        loading: true,
        movie: action.payload,
        error: '',
        pagenumber: state.pagenumber + 1
      }
    default: return state
  }
};

export default moviesReducers;