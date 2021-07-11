const requests = {
  trending: {
    url: '/trending/all/week',
    params: {
      language: 'en-US',
    },
  },
  topRatedMovies: {
    url: '/movie/top_rated',
    params: {
      language: 'en-US',
    },
  },
  topRatedTv: {
    url: '/tv/top_rated',
    params: {
      language: 'en-US',
    },
  },
  tvOriginals: {
    url: '/discover/tv',
    params: {
      language: 'en-US',
      with_networks: 213,
    },
  },
  movieOriginals: {
    url: '/discover/movie',
    params: {
      language: 'en-US',
      with_networks: 213,
    },
  },
  actionMovies: {
    url: '/discover/movie',
    params: {
      language: 'en-US',
      with_genres: 28,
    },
  },
  comedyMovies: {
    url: '/discover/movie',
    params: {
      language: 'en-US',
      with_genres: 35,
    },
  },
  horrorMovies: {
    url: '/discover/movie',
    params: {
      language: 'en-US',
      with_genres: 27,
    },
  },
  romanceMovies: {
    url: '/discover/movie',
    params: {
      language: 'en-US',
      with_genres: 10749,
    },
  },
  documentaryMovies: {
    url: '/discover/movie',
    params: {
      language: 'en-US',
      with_genres: 99,
    },
  },
}

export default requests
