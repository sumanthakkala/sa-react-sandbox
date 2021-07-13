import React, { useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { tmbdAxios } from 'utils/axios/interceptor'
import { Request } from 'utils/requests'
import Skeleton from '@material-ui/lab/Skeleton'
import Image from './Image';

import './styles.scss'
interface Props {
  title: string
  requestObj: Request
  isPoster?: boolean
}

const Row: React.FC<Props> = ({
  title = 'Title',
  requestObj = {} as Request,
  isPoster = false,
  ...props
}) => {
  const [data, setData] = useState([])

  const imgBaseUrl = 'https://image.tmdb.org/t/p/original'

  useEffect(() => {
    try {
      tmbdAxios
        .get(requestObj.url, { params: { ...requestObj.params } })
        .then((response) => {
          console.log(response)
          setData(response.data.results)
        })
    } catch (err) {
      console.log(err)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="row_container">
      <Typography variant="h5">{title}</Typography>

      <div className="card_container">
        <div className="items">
          {data.length !== 0 ? (
            data.map((item: any) => {
              if (isPoster && item.poster_path) {
                return (
                  <Image
                    isPoster={isPoster}
                    src={imgBaseUrl + item.poster_path}
                  />
                )
              }
              if (!isPoster && item.backdrop_path) {
                return (
                  <Image
                    isPoster={isPoster}
                    src={imgBaseUrl + item.backdrop_path}
                  />
                )
              }
              return <></>
            })
          ) : (
            <Skeleton
              className="skeleton"
              variant="rect"
              width={210}
              height={118}
            />
          )}
        </div>
        <span
          className={isPoster ? 'shadow_end_poster' : 'shadow_end_backdrop'}
        />
      </div>
    </div>
  )
}

export default Row
