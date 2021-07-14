import React, { useEffect } from 'react'
import Row from 'shared/Row'
import Banner from './Banner'
import requests from 'utils/requests'

interface Props {}

const HomePage: React.FC<Props> = ({ ...props }) => {
  useEffect(() => {})

  return (
    <>
      <Banner />
      <Row title="Top Rated Movies" requestObj={requests.topRatedMovies} />
      <Row title="Top Rated TV" requestObj={requests.topRatedTv} />
      <Row title="TV Originals" requestObj={requests.tvOriginals} />
      <Row title="Trending" requestObj={requests.trending} isPoster />
      <Row title="Movie Originals" requestObj={requests.movieOriginals} />
      <Row title="Action Movies" requestObj={requests.actionMovies} />
      <Row title="Comedy Movies" requestObj={requests.comedyMovies} />
      <Row title="Horror Movies" requestObj={requests.horrorMovies} isPoster />
      <Row title="Romance Movies" requestObj={requests.romanceMovies} />
      <Row title="Documentaries" requestObj={requests.documentaryMovies} />
    </>
  )
}

export default HomePage
