import React, { useEffect, useState } from 'react'
import requests from 'utils/requests'
import { tmbdAxios } from 'utils/axios/interceptor'
import Typography from '@material-ui/core/Typography'
import Skeleton from '@material-ui/lab/Skeleton'

import './styles.scss'

interface Props {}

const Banner: React.FC<Props> = ({ ...props }) => {

    const [bannerMovie, setBannerMovie] = useState({} as any);
  const [isImageLoaded, setIsImageLoaded] = useState(false)

      const imgBaseUrl = 'https://image.tmdb.org/t/p/original'


      useEffect(() => {
        try {
          tmbdAxios
            .get(requests.tvOriginals.url, { params: { ...requests.tvOriginals.params } })
            .then((response) => {
                setBannerMovie(
                  response.data.results[
                    Math.floor(Math.random() * response.data.results.length)
                  ],
                )
            })
        } catch (err) {
          console.log(err)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      console.log(bannerMovie);
  return (
    <>
      {/* {!isImageLoaded && (
        <Skeleton
          className="skeleton"
          variant="rect"
          height={448}
        />
      )} */}
      <header
        className="banner"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url(
            "${imgBaseUrl + bannerMovie?.backdrop_path}"
        )`,
          backgroundPosition: 'center center',
        }}
      >
        <div className="banner_contents">
          <Typography variant="h4">
            {bannerMovie.title || bannerMovie.name || bannerMovie.original_name}
          </Typography>
          <Typography variant="body1" className="banner_overview">
            {bannerMovie.overview}
          </Typography>
        </div>
        <div className="banner_fade_bottom" />
      </header>
    </>
  )
}

export default Banner
