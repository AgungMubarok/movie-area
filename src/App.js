/* eslint-disable react-hooks/exhaustive-deps */
import { connect, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import * as Boots from 'react-bootstrap'

import Layouts from './components/layouts';
import MovieCard from './components/movie-card';
import { fetchMov, fetchMovRequest } from './redux/actions/moviesActions';
import { Loading } from './components/loading'

function App({data, fetchMov}) {
  const [query, setQuery] = useState('batman');
  const [pageNumber, setPageNumber] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const dispatch = useDispatch();

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
      dispatch(fetchMovRequest)
      setIsFetching(true);
    }
  }

  function fetchMoreListItems() {
    setTimeout(() => {
      setIsFetching(false);
    }, 2000);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    if (isFetching) {
      setPageNumber(pageNumber + 1);
      window.scrollTo(0, 0);
      fetchMoreListItems();
    };
  }, [isFetching]);


  useEffect(() => {
    fetchMov(query, pageNumber);
  }, [fetchMov, pageNumber, query])

  function handleSearch(e) {
    setQuery(e.target.value)
    setPageNumber(1)
    if (e.target.value.length === 0) {
      setQuery("Batman")
    }
  }

  return data.loading ? <Loading /> : data.error ? (<p>{data.error}</p>) : (
    <div>
      <Layouts search={handleSearch} />
      <Boots.Container>
        <Boots.Row xs={2} className="g-3 py-5">
          {data.movie ? data.movie.Search !== undefined ? data.movie.Search.map(e => (
            <Boots.Col>
              <MovieCard 
                movieName={e.Title}
                movieImage={e.Poster}
                year={e.Year}
                imdbID={e.imdbID}
              />
            </Boots.Col>
          )) : <Loading /> : null}
        </Boots.Row>
      </Boots.Container>
      {data.loading && <Loading />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.movie
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);
  return {
    fetchMov: (query, page) => dispatch(fetchMov(query, page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
